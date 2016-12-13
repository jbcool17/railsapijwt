#!/bin/sh
echo '---> Building and Deploying to public folder...'
echo '---> CREDENTIALS SITE...'
./scripts/credentials_build.sh
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '---> HOCKEY SITE...'
./scripts/hockey_build.sh
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '---> JEKYLL SITE...'
./scripts/jekyll_build.sh

echo "ALL DEPLOY SCRIPT IS COMPLETE!"
