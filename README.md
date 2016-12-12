# rails-api-w-jwt

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Stories in Progress](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Ready](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=ready&title=Ready)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Done](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=done&title=Done)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Backlog](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=backlog&title=backlog)](http://waffle.io/jbcool17/railsapijwt)

> demonstrating APIs &amp; Json Web Token Creation/Authentication

This project uses the Rails 5 api only setting for the backend and a jekyll site generator to compile various mini sites using JS FrontEnd Frameworks(React) via custom scripts. They are currently hosted from the /public/ of the Rails Application. The purpose of this is to learn about APIs and Javascript Front-End Frameworks.

## Table of Contents

- [Development](#development)
- [Usage](#usage)
- [API](#api)
- [Specs](#specs)
- [Styles](#styles)
- [License](#license)
- [How To - JWT Creation / Authentication via React App](#how-to)

## Development
- follow these instructions or run the following script:

```
# Setup Project
./scripts/setup_project.sh
```

```
# Rails API Setup
$ bundle install
$ rake db:migrate

# Populate Database
$ rake db:seed
$ rake hockey:get_standings
```

```
# Static Site Generator - Jekyll - this will contain the mini sites
$ cd _site_generator && bundle
```

```
# React Mini Sites - work done from '_client' folder
$ cd _clients/<PROJECT> && npm install
```

## Usage
### For Development - Static Sites
```
# React Mini Sites - Work with Directly
# JWTCredentialsSite @ http://localhost:5000/
# HockeySite         @ http://localhost:5100/
# Rails API          @ http://localhost:3000/
# Start Up
$ foreman start -f Procfile.react

# Jekyll - Main Site - Hosting Mini Sites
# This will build your mini sites automatically
# http://localhost:4000
# type 'exit' to quit
$ foreman start

```
### Deploy
```
# When ready to deploy run:
$ rake deploy:deploy_all
# View Site @ http://localhost:3000
$ rails s
```

### Other
```
# Build Helpers
rake deploy:deploy_all              # Builds & deploys all sites to public folder
rake deploy:credentials_build       # Build credentials react site and copies to site generator
rake deploy:hockey_build            # Build hockey api react site and copies to site generator
rake deploy:jekyll_build            # Builds Jekyll Site and copies to public
```


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
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers/:name"
```

### Hockey API
- soon

## Specs
- Ruby v2.3.1 / Rails v5.0.0.1
- JWT
- Uses npm for js frontend
- Database - Development / Sqlite3 - Production / Postgresql

## Styles
- styles being done in _site_generator but can also be done in react mini apps

## License

MIT © John Brilla

# How To
## JWT Creation / Authentication via React App
- Check the browser console for status messages

### 1 - Sign Up - with Email/Password/Password Confirmation
- this gives you a confirmation link that would normally get sent out via email.

![Step 2](https://floating-tor-40582.herokuapp.com/images/021.png)
![Step 3](https://floating-tor-40582.herokuapp.com/images/031.png)

### 2 - Click Confirm
![Step 4](https://floating-tor-40582.herokuapp.com/images/041.png)

### 3 - Login - Enter credentials from above, after confirmation complete.
![Step 6](https://floating-tor-40582.herokuapp.com/images/061.png)

### 4 - Current user should have the email.
- JWT should be in the console.
![Step 7](https://floating-tor-40582.herokuapp.com/images/071.png)

### 5 - Click 'Get All Beer' to get data
![Step 8](https://floating-tor-40582.herokuapp.com/images/081.png)
