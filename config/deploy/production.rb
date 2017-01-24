set :stage, :production
server '192.168.56.101', user: 'deploy', roles: %w{app web db}
role :app, %w{deploy@192.168.56.101}
role :web, %w{deploy@192.168.56.101}
role :db,  %w{deploy@192.168.56.101}
set :rails_env, 'production'
set :branch, 'production'
