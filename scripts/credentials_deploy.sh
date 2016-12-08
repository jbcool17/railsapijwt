#!/bin/sh
echo "Running Credentials Build..."
cd client/credentials && npm run build
echo "Starting Copy"
cp -pvr ./build/* ../../public/react/

echo "DONE!"
