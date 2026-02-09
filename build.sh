#!/bin/bash
set -e

echo "🚀 Starting Vercel deployment build..."

# Portfolio
echo "📦 Building portfolio..."
cd portfolio
echo "Current directory: $(pwd)"
echo "Checking package.json..."
ls -la package.json
echo "Build script in package.json:"
grep -A2 '"scripts"' package.json
npm install --legacy-peer-deps --no-audit --no-fund
echo "Running npm run build..."
CI=false DISABLE_ESLINT_PLUGIN=true npm run build
cd ..

# Frontend
echo "📦 Building frontend..."
cd frontend
npm install --legacy-peer-deps --no-audit --no-fund
npm run build
cd ..

# Copy portfolio to frontend
echo "📁 Copying portfolio..."
mkdir -p frontend/build/portfolio
cp -r portfolio/build/* frontend/build/portfolio/

echo "✅ Build successful! Output in frontend/build/"