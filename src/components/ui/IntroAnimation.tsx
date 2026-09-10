"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// ------------------------------------------------------------------
// 1. Procedural Butterfly Component (Solid Wings & Glitters)
// ------------------------------------------------------------------
const createWingShape = () => {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(1, 2, 3, 4, 4.5, 2.5); 
  shape.bezierCurveTo(5, 1.5, 4, 0.5, 3.5, 0); 
  shape.bezierCurveTo(3, -1.5, 2, -3, 1, -2.5); 
  shape.bezierCurveTo(0.5, -2, 0, -1, 0, 0); 
  return shape;
};

const GlitterParticles = ({ color, parentGroupRef }: { color: string, parentGroupRef: React.RefObject<THREE.Group> }) => {
  const count = 150;
  const positions = useMemo(() => new Float32Array(count * 3), []);
  const opacities = useMemo(() => new Float32Array(count), []);
  
  const particlesRef = useRef<THREE.Points>(null);
  const dataRef = useRef(Array.from({ length: count }, () => ({
    velocity: new THREE.Vector3(),
    life: 0,
    active: false
  })));
  
  let spawnIndex = 0;

  useFrame(() => {
    if (!particlesRef.current || !parentGroupRef.current) return;
    
    const parentPos = new THREE.Vector3();
    parentGroupRef.current.getWorldPosition(parentPos);
    
    if (Math.random() > 0.5) {
      for (let i = 0; i < 2; i++) {
        const d = dataRef.current[spawnIndex];
        d.active = true;
        d.life = 1.0;
        d.velocity.set(
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2 - 0.1, 
          (Math.random() - 0.5) * 0.2
        );
        
        positions[spawnIndex * 3] = parentPos.x + (Math.random() - 0.5) * 2;
        positions[spawnIndex * 3 + 1] = parentPos.y + (Math.random() - 0.5) * 2;
        positions[spawnIndex * 3 + 2] = parentPos.z + (Math.random() - 0.5) * 2;
        opacities[spawnIndex] = 1.0;
        
        spawnIndex = (spawnIndex + 1) % count;
      }
    }

    const positionsAttr = particlesRef.current.geometry.attributes.position;
    const opacitiesAttr = particlesRef.current.geometry.attributes.opacity;

    for (let i = 0; i < count; i++) {
      const d = dataRef.current[i];
      if (d.active) {
        d.life -= 0.02;
        if (d.life <= 0) {
          d.active = false;
          opacities[i] = 0;
        } else {
          positions[i * 3] += d.velocity.x;
          positions[i * 3 + 1] += d.velocity.y;
          positions[i * 3 + 2] += d.velocity.z;
          opacities[i] = d.life;
        }
      }
    }
    
    positionsAttr.needsUpdate = true;
    opacitiesAttr.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-opacity" args={[opacities, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.3} color={color} transparent opacity={1} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const Butterfly = ({ 
  startPos, targetPos, color, glitterColor, delay, progress 
}: { 
  startPos: THREE.Vector3; targetPos: THREE.Vector3; color: string; glitterColor: string; delay: number; progress: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Group>(null);
  const rightWingRef = useRef<THREE.Group>(null);

  const wingGeometry = useMemo(() => {
    const shape = createWingShape();
    return new THREE.ShapeGeometry(shape, 12);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current || !leftWingRef.current || !rightWingRef.current) return;

    const t = clock.elapsedTime;
    const flapSpeed = 25;
    const flapAngle = Math.sin(t * flapSpeed) * 0.8 + 0.4;
    
    leftWingRef.current.rotation.y = flapAngle;
    rightWingRef.current.rotation.y = -flapAngle;

    const p = Math.max(0, Math.min(1, (progress - delay) * 1.5));
    const ease = 1 - Math.pow(1 - p, 3);
    
    groupRef.current.position.lerpVectors(startPos, targetPos, ease);
    groupRef.current.rotation.z = Math.sin(t * 2 + startPos.x) * 0.2;
    
    if (p < 0.99) {
      groupRef.current.lookAt(targetPos);
      groupRef.current.rotateX(Math.PI / 2); 
    }
  });

  const fadeOpacity = progress >= 0.95 ? 0 : 0.9;

  return (
    <>
      <group ref={groupRef} visible={progress < 1}>
        <mesh>
          <capsuleGeometry args={[0.1, 1, 4, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={fadeOpacity} />
        </mesh>
        
        <group ref={leftWingRef} scale={[-1, 1, 1]}>
          <mesh geometry={wingGeometry}>
            <meshBasicMaterial color={color} transparent opacity={fadeOpacity} side={THREE.DoubleSide} />
          </mesh>
        </group>

        <group ref={rightWingRef}>
          <mesh geometry={wingGeometry}>
            <meshBasicMaterial color={color} transparent opacity={fadeOpacity} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>
      
      {progress < 1 && <GlitterParticles color={glitterColor} parentGroupRef={groupRef as React.RefObject<THREE.Group>} />}
    </>
  );
};

// ------------------------------------------------------------------
// 2. Scene Choreographer
// ------------------------------------------------------------------
const Scene = ({ onSwarmMerge }: { onSwarmMerge: () => void }) => {
  const { camera } = useThree();
  const [progress, setProgress] = useState(0); 
  const [merged, setMerged] = useState(false);
  const composerRef = useRef<any>(null);
  const flashRef = useRef(0);

  const swarmConfig = useMemo(() => [
    { start: new THREE.Vector3(-20, 15, -10), color: "#06b6d4", glitter: "#ec4899", delay: 0 }, 
    { start: new THREE.Vector3(20, 15, -10), color: "#6366f1", glitter: "#06b6d4", delay: 0.1 }, 
    { start: new THREE.Vector3(-20, -15, -10), color: "#10b981", glitter: "#fbbf24", delay: 0.05 }, 
    { start: new THREE.Vector3(20, -15, -10), color: "#ec4899", glitter: "#fbbf24", delay: 0.15 } 
  ], []);

  useFrame((state, delta) => {
    if (!merged) {
      if (progress < 1) {
        setProgress(p => Math.min(1, p + delta * 0.28)); 
      } else {
        setMerged(true); 
      }
    } else {
      flashRef.current += delta;
      
      const pCamera = camera as THREE.PerspectiveCamera;
      if (pCamera.fov !== undefined) {
        pCamera.fov = THREE.MathUtils.lerp(pCamera.fov, 100, 0.1);
        pCamera.updateProjectionMatrix();
      }

      if (flashRef.current > 0.5) {
        onSwarmMerge(); // Trigger the HTML loading UI
      }
    }
  });

  return (
    <>
      <color attach="background" args={["#050505"]} />
      
      {swarmConfig.map((b, i) => (
        <Butterfly 
          key={i} 
          startPos={b.start} 
          targetPos={new THREE.Vector3(0, 0, 0)} 
          color={b.color}
          glitterColor={b.glitter}
          delay={b.delay}
          progress={progress}
        />
      ))}

      <EffectComposer ref={composerRef}>
        <Bloom 
          luminanceThreshold={0.1} 
          luminanceSmoothing={0.9} 
          intensity={merged ? 5 + flashRef.current * 20 : 2} 
        />
        <ChromaticAberration 
          offset={
            merged 
              ? new THREE.Vector2(0.01 * flashRef.current, 0.01 * flashRef.current) 
              : new THREE.Vector2(0.001, 0.001)
          } 
        />
      </EffectComposer>
    </>
  );
};

// ------------------------------------------------------------------
// 3. Cyberpunk Loading Bar Component
// ------------------------------------------------------------------
const LoadingUI = ({ onComplete }: { onComplete: () => void }) => {
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 2500; // 2.5 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setLoadProgress(p);

      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300); // short pause at 100% before firing complete
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="w-full max-w-2xl px-8 flex flex-col items-center gap-8">
        
        {/* Loading Text & Dots */}
        <div className="flex items-center gap-5">
          <span className="text-white text-3xl font-mono tracking-[0.3em] uppercase">Loading</span>
          <div className="flex gap-3">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1, delay: 0 }} 
              className="w-3 h-3 rounded-full bg-[#06b6d4] shadow-[0_0_12px_#06b6d4]" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} 
              className="w-3 h-3 rounded-full bg-[#6366f1] shadow-[0_0_12px_#6366f1]" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} 
              className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_12px_#10b981]" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1, delay: 0.6 }} 
              className="w-3 h-3 rounded-full bg-[#ec4899] shadow-[0_0_12px_#ec4899]" 
            />
          </div>
        </div>

        {/* Cyberpunk Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-pink-500 via-cyan-400 to-emerald-400"
            style={{ width: `${loadProgress}%` }}
          />
          {/* Glowing head of the progress bar */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_16px_#fff]"
            style={{ left: `calc(${loadProgress}% - 12px)` }}
          />
        </div>

        {/* Numeric progress */}
        <div className="text-zinc-500 font-mono text-lg">
          {Math.floor(loadProgress)}%
        </div>

      </div>
    </motion.div>
  );
};

// ------------------------------------------------------------------
// 4. Main Wrapper
// ------------------------------------------------------------------
export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isReady, setIsReady] = useState(false);
  const [showLoadingUi, setShowLoadingUi] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleSwarmMerge = () => {
    setShowLoadingUi(true);
  };

  const handleFinishSequence = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 500); 
  };

  if (!isReady) return <div className="fixed inset-0 bg-[#050505] z-50" />;

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#050505]"
        >
          {/* Skip Button */}
          <button 
            onClick={handleFinishSequence}
            className="absolute bottom-8 right-8 z-[60] text-xs font-mono text-zinc-500 hover:text-white transition-colors"
          >
            [ SKIP SEQUENCE ]
          </button>

          {!showLoadingUi ? (
            <Canvas 
              camera={{ position: [0, 0, 15], fov: 45 }}
              gl={{ antialias: false, powerPreference: "high-performance" }}
            >
              <Scene onSwarmMerge={handleSwarmMerge} />
            </Canvas>
          ) : (
            <LoadingUI onComplete={handleFinishSequence} />
          )}

          {/* Flash Overlay on final exit */}
          <motion.div 
            className="pointer-events-none absolute inset-0 bg-white z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFadingOut ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
