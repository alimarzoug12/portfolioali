echo "Copying portfolio build to frontend/build/portfolio..."

# Remove old folder completely
rm -rf ../frontend/build/portfolio 2>/dev/null || true

# Create the directory
mkdir -p ../frontend/build/portfolio

# Copy everything from portfolio/build into frontend/build/portfolio
# Use -r and . to copy contents
cp -r ./build/* ../frontend/build/portfolio/ 2>/dev/null || cp -r ./build/. ../frontend/build/portfolio/

echo "Copy done. Listing files:"
ls -la ../frontend/build/portfolio || echo "No files copied!"