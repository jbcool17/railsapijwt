# rails-api-w-jwt-backend

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Stories in Progress](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Ready](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=ready&title=Ready)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Done](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=done&title=Done)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Backlog](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=backlog&title=backlog)](http://waffle.io/jbcool17/railsapijwt)

> demonstrating APIs &amp; Json Web Token Creation/Authentication

This project uses the Rails 5 API setting for the backend and a jekyll site generator to compile various mini sites using JS FrontEnd Frameworks(React) via custom scripts. They are currently hosted from github.io: [railsapijwt-frontend](https://jbcool17.github.io/railsapijwt-frontend/). The purpose of this is to learn about APIs and Javascript Front-End Frameworks.
- Frontend repo is located at: [Frontend Repo](https://github.com/jbcool17/railsapijwt-frontend)

## Table of Contents

- [Development](#development)
- [Usage](#usage)
- [Deploy](#deploy)
- [API](#api)
- [Specs](#specs)
- [Testing](#testing)
- [License](#license)

## Development
```
$ bundle install
$ rake db:migrate

# Populate Database
$ rake db:seed
$ rake hockey:get_standings
```

## Usage
```
# start server
$ rails s
```

## Deploy
- This site deploys to [Heroku](https://floating-tor-40582.herokuapp.com/)

## API

### Sign Up / Confirm / Login - Get Json Web Token
```
# POST /users
$ curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" \
  -d '{"user": {"email":"user@user1.com", "password": "test123","password_confirmation": "test123" }}' \
  "https://floating-tor-40582.herokuapp.com/users"

=> {"status":"User created successfully","confirm_link":"CONFIRM_LINK_WITH_TOKEN"}

# POST /users/confirm?token
$ curl -X POST -H "Cache-Control: no-cache" "CONFIRM_LINK_WITH_TOKEN"

=> {"status":"User confirmed successfully"}

# POST /users/login
$ curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{"email": "user@user1.com", "password": "test123"}' "https://floating-tor-40582.herokuapp.com/users/login"

=> {"auth_token": "TOKEN"}
```

### Beer API
```
# GET /v1/beers
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers"

# GET /v1/beers/:id
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers/:id"

# GET /v1/beers/search/:name
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers/search/:name"
```

### Hockey API
```
# No Token Needed

# GET /v1/standings
# Default 10 Results
$ curl -X GET -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/standings"
# Get by page
$ curl -X GET -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/standings?page%5Bnumber%5D=2
# Get per_page
$ curl -X GET -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/standings?per_page=20

# GET /v1/standings/:id
$ curl -X GET -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/standings/:id"

# GET /v1/standings/search/:name
$ curl -X GET -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/standings/search/:name"

# GET /v1/standings/dates?date=2016-12-20
# Gets all records before date
$ curl -X GET -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/standings/dates?date2016-12-20"
```

## Specs
- Ruby v2.3.1 / Rails v5.0.0.1
- JWT
- Database - Development / Sqlite3 - Production / Postgresql

## Testing
- Rspec
- more to come

## License

MIT © John Brilla
