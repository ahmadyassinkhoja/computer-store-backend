# Computer Store Project BackEnd

 <!--I m using this cause Synk Co. doesn't provide for private repo's But it's true in our repo 😉-->

[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
[![Build Status](https://travis-ci.com/ahmadyassinkhoja/supermarket-back-end-.svg?token=qygxqkdc5qqrxr91xxDH&branch=master)](https://travis-ci.com/ahmadyassinkhoja/supermarket-back-end-)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1409690a371c4279b814d3173d04919d)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=ahmadyassinkhoja/supermarket-back-end-&utm_campaign=Badge_Grade)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)](<>)

<!-- [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
![discord](https://img.shields.io/discord/497486687681773579.svg?style=for-the-badge) -->

> You Can Join US at Ciatek Server at Discord
> [![Discord](https://discordapp.com/api/guilds/497486687681773579/widget.png)](https://discord.gg/Y9hjA3T)
>
> Click Here to See this Project Live  
> [![N|Solid](images/minimall.jpg)](https://supermarket-1542828174855.firebaseapp.com/client)

## Getting Started

> This is a living document, so please check back occasionally for changes. Any major changes will be communicated to the team.

### Repository Conventions

-   Remote repository is hosted on GitHub
-   Use `npm`, not `yarn`
-   `eslint` standards will be enforced using a modified Airbnb style guide
-   Use project structure defined below
-   **Do not** commit `node_modules` files or other sensitive information
-   **Do not** commit changes directly to the `master` branch
-   ..Commit changes via a branch named as follows:
-   ..`year-month-module-feature`
-   `year` should be a number, two digit year in which branch was created
-   `month` should be a number, two digit month in which branch was created
-   `module` should be camel case, starts with a lower case letter
-   `feature` should be sentence case, starts with upper case letter
-   If the feature is not for a single module then use `general`
-   Examples are `18-11-accounting-Add Account graphQL type` or `19-01-general-Add User graphQL type`

### Visual Studio Code

> It would be best to use Visual Studio code so we can all use the same plugins. However, if you feel more comfortable using a different editor/IDE please do so.
> Visual Studio Code has great Git integration. If you use something else you may need to learn various Git commands - good luck!

#### Recommended Plugins

-   GitLens // for github inetrgration
-   Eslint // for JS linting
-   Toggle Format on Save // for auto correct
-   Babal ES6/ES7 // for writing es6 in js (get integrates with nodemon or node)
-   npm Intellisense // autocompletes npm modules in import statements.
-   Rainbow Brackets // for nice color for brackets, etc..
-   Better Comment // for upgrading comments to Alerts, Queries, TODOs, Highlights, Strikethrough, etc...
-   Remark // for improving code quality of .md files

## Installing

<pre>
These steps will allow for local development of the _application_ on your machine.
</pre>

1.  Make sure you already have `npm`, and `node` (version 10 or greater) installed
2.  Clone this repository
3.  Run `npm install` from the project root
4.  Run `npm start` to start the server locally
5.  In your browser open `http://localhost:8530/` to access the application

## Deploying

### Heroku

> Just push your code to Github

## Commands

List of commands found in `package.json`. Most of the actions you need to perform via the command line will be available via these commands. These all assume you are in the project root.

`npm run dev` - start development server locally and watch for changes

`npm run build` - output into `dist` directory for production

`npm start` - build and start the application on heroku

## Project Structure

This structure is important because it will alleviate issues when we attempt to merge our code. We should not have to create any new folders at this point. If the need arises please communicate the need to the project manager.

Of course, the project structure will change as the project grows. But we will make any structural change decisions as a team when needed.

    ├── dist
    ├── node_modules
    ├── src
    │   ├── database
    │   │   ├── mongodb.js
    │   │   └── msdb.js
    │   ├── errors
    │   │   └── custom-error.js
    │   ├── admin.js
    │   ├── client.js
    │   ├── communicationAPI.js
    │   ├── items.js
    │   ├── orders.js
    │   ├── scripts.js
    │   ├── server.js
    │   └── setting.js
    ├── .babelrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
