# RAILS API w/ JS Front End(React)
- Using JWT
- React Front End Started


```
# React Development - work done from 'client' folder
$ cd client/ && npm install
# Start Up
foreman start
```

```
# Create production build of react site - Runs script
rake deploy:react_build_production
# Start dev server - react site will be at '/'
rails s
```

If you get CORS errors check which ports you are using and update application.rb accordingly.
