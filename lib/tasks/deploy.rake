namespace :deploy do
  desc "Build All React Apps"
  task :all_build => :environment do
    sh "scripts/all_deploy.sh"
  end
  desc "credentials_build"
  task :credentials_build => :environment do
    sh "scripts/credentials_deploy.sh"
  end
  desc "hockey_build"
  task :hockey_build => :environment do
    sh "scripts/hockey_deploy.sh"
  end
  desc "jekyll_build"
  task :jekyll_build => :environment do
    sh "scripts/jekyll_deploy.sh"
  end
end
