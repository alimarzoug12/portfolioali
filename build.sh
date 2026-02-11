echo "Copying portfolio build to frontend/build/portfolio..."

# 1. Clean previous copy
rm -rf ../frontend/build/portfolio 2>/dev/null || true

# 2. Create the folder
mkdir -p ../frontend/build/portfolio

# 3. Copy the ENTIRE contents of portfolio/build into frontend/build/portfolio
#    Use -a to preserve permissions, -v for verbose (visible in logs)
cp -av portfolio/build/. ../frontend/build/portfolio/

# 4. Debug - show what was copied (will appear in Vercel build logs)
echo "=== Files copied to portfolio folder ==="
ls -la ../frontend/build/portfolio

echo "=== Static folder contents ==="
ls -la ../frontend/build/portfolio/static 2>/dev/null || echo "Static folder missing!"

echo "Build complete!"