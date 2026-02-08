const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  console.log('📁 Copying portfolio to frontend...');
  
  const source = path.join(__dirname, 'portfolio/build');
  const destination = path.join(__dirname, 'frontend/build/portfolio');
  
  // Remove destination if exists
  if (fs.existsSync(destination)) {
    fs.rmSync(destination, { recursive: true, force: true });
  }
  
  // Create destination directory
  fs.mkdirSync(destination, { recursive: true });
  
  // Copy files
  execSync(`cp -r "${source}/"* "${destination}/"`);
  
  console.log('✅ Portfolio copied successfully!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}