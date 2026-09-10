const fs = require('fs');
const path = require('path');

const sectionsDir = 'src/components/sections';
const files = fs.readdirSync(sectionsDir).map(f => path.join(sectionsDir, f));

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace <motion.section ...> with <section ...>
    content = content.replace(/<motion\.section([\s\S]*?)>/g, (match, p1) => {
      // Remove framer-motion specific props
      let newProps = p1
        .replace(/initial=\{[^}]+\}/g, '')
        .replace(/whileInView=\{[^}]+\}/g, '')
        .replace(/viewport=\{[^}]+\}/g, '')
        .replace(/transition=\{[^}]+\}/g, '');
      return `<section${newProps}>`;
    });
    
    // Replace </motion.section> with </section>
    content = content.replace(/<\/motion\.section>/g, '</section>');

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated', file);
    }
  }
});
