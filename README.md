# RAILS API w/ JS Front End(React)
- Demonstating Rails API w/JWT Authentication
- React Front End Started
- Using Faker Gem - All beer data is randomly generated.

```
# React Development - work done from 'client' folder
$ cd client/ && npm install
# Start Up
# ReactSite: http://localhost:5000/
# Rails API: http://localhost:3000/
foreman start
```

```
# Create production build of react site - Runs script
rake deploy:react_build_production
# Start dev server - react site will be at '/'
rails s
```

## Hosting - Heroku
- [RailsAPI-JWT](https://floating-tor-40582.herokuapp.com/react/)

## Testing via React
- You check the browser console for status messages

![Step 1](https://floating-tor-40582.herokuapp.com/images/01.png)

### Sign Up - with Email/Password/Password Confirmation
![Step 2](https://floating-tor-40582.herokuapp.com/images/02.png)
![Step 3](https://floating-tor-40582.herokuapp.com/images/03.png)
![Step 4](https://floating-tor-40582.herokuapp.com/images/04.png)
- this gives you a confirmation link that would normally get sent out via email.

### Click Confirm
![Step 5](https://floating-tor-40582.herokuapp.com/images/05.png)

### Login - Enter credentials from above, after confirmation complete.
![Step 6](https://floating-tor-40582.herokuapp.com/images/06.png)

### Current user should have the email used.
![Step 7](https://floating-tor-40582.herokuapp.com/images/07.png)

### Click 'Get All Beer' to get data
![Step 8](https://floating-tor-40582.herokuapp.com/images/08.png)

## Issues
- cannot add/update beer
- delete beer cause React error
