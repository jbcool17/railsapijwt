#!/bin/sh
echo "Running Jekyll Build..."

cd _site_generator
jekyll build
cp -pvr ./_site/* ../public/

echo "DONE!"
