<!-- @format -->

# Nodejs API AUTH With JWT

## What did i do 🐶

- In the terminal 🤖

`npm init`

`npm i -D nodemon`

`npm i express`

`npm i jsonwebtoken`

`touch an new file callled app.js`

- Routes 🚦

  - `api/` => welcome route
  - `api/login` => to signin and get the token
  - `api/post` [protected route] ⛔ => to create a post

- Functions
  - verifyToken to check if the token exists or not and if exists extract it from the request header and assign it to the request token

## Tools used

- vscode editor
- postman
- express
- jsonwebtoken
