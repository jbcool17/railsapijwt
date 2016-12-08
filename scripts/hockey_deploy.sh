#!/bin/sh
echo "Running Hockey Build..."
cd client/hockey && npm run build
echo "Starting Copy"
cp -pvr ./build/* ../../public/hockey/

echo "DONE!"
