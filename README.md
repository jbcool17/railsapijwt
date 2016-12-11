# RAILS API w/ JS Front End(React)
[![Stories in Progress](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Ready](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=ready&title=Ready)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Done](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=done&title=Done)](http://waffle.io/jbcool17/railsapijwt)
[![Stories in Backlog](https://badge.waffle.io/jbcool17/railsapijwt.svg?label=backlog&title=backlog)](http://waffle.io/jbcool17/railsapijwt)
- Demonstating Rails API w/JWT Authentication
- Using Faker Gem - All beer data is randomly generated.

## Development
```
# React Development - work done from 'client' folder
$ cd client/<PROJECT> && npm install

# JWTCredentialsSite @ http://localhost:5000/
# HockeySite         @ http://localhost:5100/
# Rails API          @ http://localhost:3000/
# Start Up
$ foreman start
```

## Production Deploy Notes
```
# Create production build of react sites - Run a script
# Creates build and copies to /public/ folder
$ rake deploy:all_build
$ rake deploy:credential_build
$ rake deploy:hockey_build

# Start dev server
$ rails s
```

## Hosting - Heroku
- [RailsAPI-JWT](https://floating-tor-40582.herokuapp.com/)

## API Only DOCS
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

### Get JSON
```
# GET /v1/beers
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers"

# GET /v1/beers/:id
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers/:id"

# GET /v1/beers/search/:name
$ curl -X GET -H "Authorization: Bearer TOKEN" -H "Cache-Control: no-cache" "https://floating-tor-40582.herokuapp.com/v1/beers/:name"
```

## Testing via React
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

# Issues
- cannot add/update/delete beer
- delete beer cause React error
- needs hockey docs
