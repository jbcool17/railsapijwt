namespace :deploy do
  desc "react_build_production"
  task :react_build_production => :environment do
    sh "scripts/react_deploy.sh"
  end
end
