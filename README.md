# eliftech
_Hi! For this project I've used:_ :

**NodeJS, Mongoose, React,** 

**Webpack, React-Router, Redux,**

**MongoLab and Css-Modules**

Basic CRUD operations SPA application with storing data in a database. 

## Setup

```shell
$ cd {intoYourProjectsFolder}

$ git clone https://github.com/bassment/eliftech.git

$ cd eliftech

$ npm install

$ npm start
```

_You will also need to add **MONGO_URL** to your ENV_VARIABLES to connect application with a database!_

## Production

First you need to build a project with webpack.
In package.json we have simple script to do this task, so in your terminal:

```shell
$ npm run build

$ npm run production
```

_The production version will run at the same port(3000) as the development version._
_So be sure to run them one at once._
