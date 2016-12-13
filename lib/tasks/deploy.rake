namespace :build do
  desc "Builds & deploys all sites to public folder"
  task :build_all => :environment do
    sh "scripts/build_all.sh"
  end
  desc "Build credentials react site and copies to site generator"
  task :credentials_build => :environment do
    sh "scripts/credentials_build.sh"
  end
  desc "Build hockey api react site and copies to site generator"
  task :hockey_build => :environment do
    sh "scripts/hockey_build.sh"
  end
  desc "Builds Jekyll Site and copies to public"
  task :jekyll_build => :environment do
    sh "scripts/jekyll_build.sh"
  end
end
