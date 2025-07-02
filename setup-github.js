#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 GitHub Repository Setup Script');
console.log('==================================\n');

// Check if git is initialized
function checkGitInit() {
  if (!fs.existsSync('.git')) {
    console.log('❌ Git repository not initialized');
    console.log('📝 Run this command first:');
    console.log('   git init\n');
    return false;
  }
  console.log('✅ Git repository found\n');
  return true;
}

// Check for large files
function checkLargeFiles() {
  console.log('🔍 Checking for large files...');
  
  const documentsDir = path.join('public', 'documents');
  if (fs.existsSync(documentsDir)) {
    const files = fs.readdirSync(documentsDir);
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    
    if (pdfFiles.length > 0) {
      console.log(`⚠️  Found ${pdfFiles.length} PDF files in public/documents/`);
      console.log('   These are excluded in .gitignore to avoid large file issues\n');
    }
  }
  
  console.log('✅ Large file check complete\n');
}

// Create README with instructions
function createReadmeInstructions() {
  const readmeAddition = `

## 🚀 GitHub Setup Instructions

### 1. Initialize Git (if not done)
\`\`\`bash
git init
\`\`\`

### 2. Add all files
\`\`\`bash
git add .
git commit -m "Initial commit: Leiderschap in Sport en Bewegen app"
\`\`\`

### 3. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: \`leiderschap-sport-bewegen\`
4. **Don't** check any boxes (README, .gitignore, license)
5. Click "Create repository"

### 4. Connect and Push
\`\`\`bash
git remote add origin https://github.com/YOUR-USERNAME/leiderschap-sport-bewegen.git
git branch -M main
git push -u origin main
\`\`\`

### 5. Deploy to Netlify (Optional)
1. Connect your GitHub repository to Netlify
2. Build command: \`npm run build\`
3. Publish directory: \`out\`

---
`;

  // Read current README
  let currentReadme = '';
  if (fs.existsSync('README.md')) {
    currentReadme = fs.readFileSync('README.md', 'utf8');
  }

  // Check if instructions already exist
  if (!currentReadme.includes('GitHub Setup Instructions')) {
    fs.writeFileSync('README.md', currentReadme + readmeAddition);
    console.log('✅ Added GitHub setup instructions to README.md\n');
  } else {
    console.log('✅ GitHub instructions already in README.md\n');
  }
}

// Main setup function
function setupGitHub() {
  console.log('🎯 Setting up project for GitHub...\n');
  
  // Check git initialization
  const gitInitialized = checkGitInit();
  
  // Check for large files
  checkLargeFiles();
  
  // Add instructions to README
  createReadmeInstructions();
  
  console.log('📋 Next Steps:');
  console.log('==============');
  
  if (!gitInitialized) {
    console.log('1. Run: git init');
    console.log('2. Run: git add .');
    console.log('3. Run: git commit -m "Initial commit"');
  } else {
    console.log('1. Run: git add .');
    console.log('2. Run: git commit -m "Add .gitignore and setup instructions"');
  }
  
  console.log('3. Create repository on GitHub.com');
  console.log('4. Run: git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git');
  console.log('5. Run: git branch -M main');
  console.log('6. Run: git push -u origin main\n');
  
  console.log('🎉 Setup complete! Check README.md for detailed instructions.');
}

// Run the setup
setupGitHub();