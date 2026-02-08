const fs = require('fs');
const path = require('path');

console.log('📁 Starting copy process...');

const source = path.join(__dirname, 'portfolio/build');
const destination = path.join(__dirname, 'frontend/build/portfolio');

console.log(`Source: ${source}`);
console.log(`Destination: ${destination}`);

// Check if source exists
if (!fs.existsSync(source)) {
  console.error('❌ Error: Portfolio build not found at:', source);
  console.log('Please build portfolio first: cd portfolio && npm run build');
  process.exit(1);
}

// Create destination directory
if (!fs.existsSync(path.dirname(destination))) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
}

// Remove existing destination
if (fs.existsSync(destination)) {
  fs.rmSync(destination, { recursive: true, force: true });
}

// Copy function
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Perform copy
try {
  fs.mkdirSync(destination, { recursive: true });
  copyRecursive(source, destination);
  console.log('✅ Portfolio copied successfully!');
} catch (error) {
  console.error('❌ Error copying files:', error.message);
  process.exit(1);
}