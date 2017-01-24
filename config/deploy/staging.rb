set :stage, :staging
server '192.168.56.102', user: 'deploy', roles: %w{app web db}
role :app, %w{deploy@192.168.56.102}
role :web, %w{deploy@192.168.56.102}
role :db,  %w{deploy@192.168.56.102}
