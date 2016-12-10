#!/bin/sh
echo "Running Hockey Build..."
cd client/hockey && npm run build


echo "build for jekyll site..."
echo '---' >> build/index_temp.html
echo 'layout: default' >> build/index_temp.html
echo '---' >> build/index_temp.html
cat build/index.html >> build/index_temp.html
mv build/index_temp.html build/index.html

echo "Starting Copy"
cp -pvr ./build/* ../../_site_generator/hockey/

echo "Hockey BUILD IS DONE!"
echo ""
