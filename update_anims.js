const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/components/sections');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Trigger earlier
  content = content.replace(/margin: "-80px"/g, 'margin: "100px"');
  content = content.replace(/margin: "-100px"/g, 'margin: "100px"');
  
  // Reduce durations
  content = content.replace(/duration: 0.8/g, 'duration: 0.4');
  content = content.replace(/duration: 0.6/g, 'duration: 0.3');
  content = content.replace(/duration: 0.5/g, 'duration: 0.3');
  
  // Speed up staggers
  content = content.replace(/staggerChildren: 0.2/g, 'staggerChildren: 0.1');
  content = content.replace(/staggerChildren: 0.15/g, 'staggerChildren: 0.05');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
