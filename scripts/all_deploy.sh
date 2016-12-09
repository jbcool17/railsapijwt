#!/bin/sh
echo "Running Credentials Build..."
cd client/credentials && npm run build
echo "Starting Copy"
cp -pvr ./build/* ../../public/credentials/

echo "Running Hockey Build..."
cd ../hockey && npm run build
echo "Starting Copy"
cp -pvr ./build/* ../../public/hockey/

echo "DONE!"
