# mydiaryapp
MyDiary is an online journal where users can pen down their thoughts and feelings.

# Development
The development is broken down into two parts, the server side and the client side. ES6 Javascript is used for the frontend/client side while the server side (API/backend) is developed using Express, NodeJs and PostgreSQL for persisting data, Json Web token for authentication.

# API FEATURE
myDiary has the following features:

# Authentication
- Jsonwebtoken is used for authentication.
- Users have to supply their token after login to access all route.

# Users
- A user can register their details which include name,username, email and password.
- Upon registration, a new user account will be created which can then be used to login.
- Registered users can access all the routes.

# Entries
- Authenticated users can create an entry by supplying the title and details of the entry.
- Authenticated users can also get all entries that belong to them and not other users entries.
- Authenticated users can get a specific diary entry by supplying the entry Id.
- Authenticated users can modify an entry for as long as the entry was created on the same day.

## INSTALLATION
* Clone the repository locally on your desktop using git clone https://github.com/Ecklene/mydiaryapp.git
* Navigate from your terminal to mydiaryapp using +++cd myDiaryApp+++
* From the git bash, pull development branching form github +++git pull origin develop+++
* Install all dependencies using +++npm install+++
* Create a +++.env ++++ file at the root of the project following the guide in +++.env.sample+++ to setup your port
* You can view the app using +++localhost:PORT/+++ or +++127.0.0.1:PORT+++
* Run +++ npm run test +++ to run all endpoints test

# TESTING WITH POSTMAN
The API contains different endpoints with their respective payload below
Endpoints|Functions|Requets Method 
***api/v1/auth/signup** Create a new user, username, email,  password | POST|
***/api/v1/auth/login*** Login a user|username, password| POST|
***/api/v1/entries*** Get all entries for a user|GET|
***/api/v1/entries*** Post a new user entry|title| POST|
***/api/v1/entries***:entryId| Get entry by Id| GET|
***api/v1/entries***:entryId| Modify a pending request|title| PUT|
***/api/v1/entries***:entryId| delete an entry for a user| DELETE|

# TECHNOLOGIES USED
* [Node-js](https://nodejs.org/en/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
* [Javascript-ES6](https://en.wikipedia.org/wiki/ECMAScript) The 6th edition of EcmaScript, officially known as ECMAScript 2015, was finalized in June 2015. This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode
* [Babel](https://babeljs.io/) used for transpiling codes from ES6 to ES5
* [Mocha](https://mochajs.org/) used for running up tests.
* Chai (http://www.chaijs.com/), also used for testing.
* [PostgreSQL](https://www.postgresql.org/) used for setting up relational database
* [Vanilla Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for frontend design
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) for frontend design
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) for styling frontend
* [FETCH API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for making Ajax call from the client to the API

# Coding style
- Airbnb is used for style guide to ensure clean code
- Eslint is use for flagging errors when writing codes.

# Author
Akinsete Motunrayo


[![Coverage Status](https://coveralls.io/repos/github/Ecklene/mydiaryapp/badge.svg?branch=ft-fixapi)](https://coveralls.io/github/Ecklene/mydiaryapp?branch=ft-fixapi)    [![Build Status](https://travis-ci.org/Ecklene/mydiaryapp.svg?branch=readapi)](https://travis-ci.org/Ecklene/mydiaryapp)
