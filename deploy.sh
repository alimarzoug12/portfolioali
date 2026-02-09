#!/bin/bash
set -e

echo "🚀 Local build script..."
npm run build
echo "✅ Build complete! Run 'vercel --prod' to deploy"