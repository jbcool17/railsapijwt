#!/bin/sh
echo "___> Running Credentials Build..."
cd _clients/credentials && npm run build

echo "___> Build for jekyll site..."
echo '---' >> build/index_temp.html
echo 'layout: default' >> build/index_temp.html
echo '---' >> build/index_temp.html
cat build/index.html >> build/index_temp.html
mv build/index_temp.html build/index.html

echo "---> Cleaning up old files..."
rm -rf ../../_site_generator/credentials
mkdir ../../_site_generator/credentials

echo "___> Starting Copy"
cp -pvr ./build/* ../../_site_generator/credentials/

echo "Credentials BUILD IS DONE!"
