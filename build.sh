#!/bin/bash
set -e

# Frontend
cd frontend
npm install --legacy-peer-deps
DISABLE_ESLINT_PLUGIN=true npm run build

# Portfolio
cd ../portfolio
npm install --legacy-peer-deps
DISABLE_ESLINT_PLUGIN=true npm run build

# Copy
cd ..
mkdir -p frontend/build/portfolio
cp -r portfolio/build/* frontend/build/portfolio/