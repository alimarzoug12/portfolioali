const fs = require('fs-extra');
const path = require('path');

async function copyPortfolio() {
  try {
    console.log('📁 Copie du portfolio vers frontend...');
    
    const source = path.join(__dirname, 'portfolio/build');
    const destination = path.join(__dirname, 'frontend/build/portfolio');
    
    // Vérifie si le portfolio est construit
    if (!fs.existsSync(source)) {
      console.error('❌ Portfolio build non trouvé!');
      console.log('Essayez d\'abord: cd portfolio && npm run build');
      process.exit(1);
    }
    
    // Crée le dossier de destination
    await fs.ensureDir(destination);
    
    // Copie tous les fichiers
    await fs.copy(source, destination);
    
    console.log('✅ Portfolio copié avec succès!');
    console.log(`📍 Source: ${source}`);
    console.log(`🎯 Destination: ${destination}`);
    
  } catch (error) {
    console.error('❌ Erreur lors de la copie:', error);
    process.exit(1);
  }
}

copyPortfolio();