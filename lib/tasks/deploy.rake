namespace :deploy do
  desc "react_build_production"
  task :react_build_production => :environment do
    sh "./react_deploy.sh"
  end
end
