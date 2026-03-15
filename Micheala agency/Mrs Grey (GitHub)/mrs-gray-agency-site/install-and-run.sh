#!/bin/bash
# Install dependencies and start dev server

cd "$(dirname "$0")"

# Try to find npm in common locations
export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.bun/bin:$HOME/.nvm/versions/node/*/bin:$PATH"

# Source nvm if it exists
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" 2>/dev/null

# Find npm
NPM_CMD=""
for npm_path in npm /usr/local/bin/npm /opt/homebrew/bin/npm; do
  if command -v "$npm_path" >/dev/null 2>&1; then
    NPM_CMD="$npm_path"
    break
  fi
done

if [ -z "$NPM_CMD" ]; then
  echo "Error: npm not found. Please ensure Node.js/npm is installed and in your PATH."
  echo "You can install Node.js from https://nodejs.org/"
  exit 1
fi

echo "Found npm at: $(which $NPM_CMD)"
echo "Installing dependencies..."
$NPM_CMD install

if [ $? -eq 0 ]; then
  echo "Dependencies installed successfully!"
  echo "Starting dev server..."
  $NPM_CMD run dev
else
  echo "Failed to install dependencies."
  exit 1
fi

