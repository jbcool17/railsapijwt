#!/bin/sh
echo "Running Build..."
cd client && npm run build
echo "Starting Copy"
cp -pvr ./build/* ../public/react/

echo "DONE!"
