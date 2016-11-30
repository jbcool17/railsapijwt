# RAILS API w/ JS Front End(React)
- Using JWT
- react in client folder


```
# React Development
# start up
foreman start
```

```
# create production build of react site
## Runs script
rake deploy:react_build_production
# start dev server - react site will be at '/'
rails s
```

If you get CORS errors check which ports you are using and update application.rb accordingly.
