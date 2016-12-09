#!/bin/sh
echo "Running Jekyll Build..."

cd _site_generator
jekyll build
cp -pvr ./_site/* ../public/

echo "JEKYLL BUILD IS DONE!"
