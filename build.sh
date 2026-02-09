#!/bin/bash
set -e

echo "=== INITIALIZING ==="

# Initialize submodules if they exist
if [ -f ".gitmodules" ]; then
  echo "Initializing Git submodules..."
  git submodule update --init --recursive
fi

echo "=== CHECKING FILES ==="
echo "Current directory: $(pwd)"
echo ""
echo "Portfolio directory exists: $(ls -d portfolio/ 2>/dev/null && echo 'YES' || echo 'NO')"
echo "Portfolio package.json exists: $(ls portfolio/package.json 2>/dev/null && echo 'YES' || echo 'NO')"
echo ""

if [ ! -f "portfolio/package.json" ]; then
  echo "❌ ERROR: portfolio/package.json not found!"
  echo "This might be a Git submodule issue."
  echo "Try: git submodule update --init --recursive"
  exit 1
fi

echo "=== BUILD STARTING ==="

# Portfolio
echo "1. Building Portfolio..."
cd portfolio
npm install --legacy-peer-deps --no-audit --no-fund
CI=false DISABLE_ESLINT_PLUGIN=true npm run build
cd ..

# Frontend
echo "2. Building Frontend..."
cd frontend
npm install --legacy-peer-deps --no-audit --no-fund
npm run build
cd ..

# Copy
echo "3. Copying portfolio to frontend..."
mkdir -p frontend/build/portfolio
cp -r portfolio/build/* frontend/build/portfolio/

echo "=== BUILD COMPLETE ==="
echo "Output: frontend/build/"