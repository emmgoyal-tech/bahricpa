#!/bin/bash
set -e

echo "=== Bahri Associates - CPA Firm Website ==="
echo "Setting up development environment..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is required. Install Node.js 18+."
    exit 1
fi

echo "Node.js version: $(node -v)"

# Install backend dependencies
echo "Installing backend dependencies..."
cd "$(dirname "$0")/server"
npm install

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd ../client
npm install

# Start both servers
echo ""
echo "Starting servers..."
cd ..

# Start backend
cd server
node index.js &
BACKEND_PID=$!
echo "Backend started on http://localhost:3001 (PID: $BACKEND_PID)"

# Start frontend
cd ../client
npx vite --port 3000 --host &
FRONTEND_PID=$!
echo "Frontend started on http://localhost:3000 (PID: $FRONTEND_PID)"

echo ""
echo "=== Both servers running ==="
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:3001"
echo "Press Ctrl+C to stop both servers"

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT TERM
wait
