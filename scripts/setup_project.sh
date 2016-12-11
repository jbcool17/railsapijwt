#!/bin/sh

echo '===> Starting RAILSAPIJWT Project setup...'
echo '===> Setting up rails api...'
bundle install
bundle exec rake db:migrate

echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Populating Database...'
bundle exec rake db:seed
bundle exec rake hockey:get_standings

echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Setting up jekyll generator...'
cd _site_generator && bundle
cd ..
echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Setting up react mini sites...'
echo '===> Credentials site...'
cd _clients/credentials && npm install

echo '===> Hockey site...'
cd ../hockey && npm install

echo '===> React mini sites have been setup.'
cd ../../

echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Updating public folder...'
./scripts/all_deploy.sh

echo ''
echo "PROJECT SETUP IS NOW COMPLETE!"
