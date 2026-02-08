#!/bin/bash
set -e

echo "🚀 Starting Vercel deployment build..."

# Frontend
echo "📦 Building frontend..."
cd frontend
rm -rf node_modules build 2>/dev/null || true
npm install --legacy-peer-deps --no-audit --no-fund
npm run build

# Portfolio
echo "📦 Building portfolio..."
cd ../portfolio
rm -rf node_modules build 2>/dev/null || true
npm install --legacy-peer-deps --no-audit --no-fund
CI=false DISABLE_ESLINT_PLUGIN=true npm run build

# Copy portfolio to frontend
echo "📁 Copying portfolio..."
cd ..
mkdir -p frontend/build/portfolio
cp -r portfolio/build/* frontend/build/portfolio/

echo "✅ Build successful! Output in frontend/build/"