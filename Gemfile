source 'https://rubygems.org'
ruby "2.3.1"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'

#DATABASE
gem 'pg'
gem 'active_model_serializers', '~> 0.10.0'
gem 'faker'

# Use Puma as the app server
gem 'puma', '~> 3.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

# AUTH
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'
gem 'jwt'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# API
# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'
gem 'will_paginate'
# Web Scaping
gem 'nokogiri'
gem 'httparty'
gem 'geocoder'

group :development, :test do

  # Call 'byebug'/'binding.pry' anywhere in the code to stop execution and get a debugger console
  # gem 'byebug', platform: :mri
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-byebug'
  # gem 'rb-readline', '~> 0.5.3'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
end

group :development do
  gem 'capistrano', '~> 3.6'
  gem 'capistrano-passenger', '>= 0.1.1'
  gem 'capistrano-rails', '~> 1.1'
  gem 'capistrano-rvm'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # gem 'guard'
  # gem 'guard-shell'
  # gem 'foreman'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
