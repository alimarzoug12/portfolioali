echo "=== Copying portfolio build ==="

# Clean everything
rm -rf ../frontend/build/portfolio 2>/dev/null || true

# Create the folder
mkdir -p ../frontend/build/portfolio

# Copy the contents (not the 'build' folder itself)
cp -a -v portfolio/build/. ../frontend/build/portfolio/

# Debug - show what Vercel really has
echo "=== Source portfolio/build contents ==="
ls -la portfolio/build

echo "=== Copied to frontend/build/portfolio ==="
ls -la ../frontend/build/portfolio

echo "=== Checking static/js ==="
ls -la ../frontend/build/portfolio/static/js 2>/dev/null || echo "!!! static/js MISSING !!!"

echo "=== Checking static/css ==="
ls -la ../frontend/build/portfolio/static/css 2>/dev/null || echo "!!! static/css MISSING !!!"

echo "Build complete!"