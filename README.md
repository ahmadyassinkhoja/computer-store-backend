# Computer Store Project BackEnd

[![Known Vulnerabilities](https://snyk.io/test/github/ahmadyassinkhoja/computer-store-backend/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ahmadyassinkhoja/computer-store-backend?targetFile=package.json)
[![Build Status](https://travis-ci.com/ahmadyassinkhoja/computer-store-backend.svg?branch=master)](https://travis-ci.com/ahmadyassinkhoja/computer-store-backend.svg?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/238dba77a9b54077bade471ee7edd2d8)](https://www.codacy.com/app/ahmadyassinkhoja/computer-store-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ahmadyassinkhoja/computer-store-backend&amp;utm_campaign=Badge_Grade)

## Getting Started

> This is a living document, so please check back occasionally for changes. Any major changes will be communicated to the team.

### Repository Conventions

-   Remote repository is hosted on GitHub
-   Use `npm`, not `yarn`
-   `eslint` standards will be enforced using a modified Airbnb style guide

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
These steps will allow for local development of the application on your machine.
</pre>

1.  Make sure you already have `npm`, and `node` (version 10 or greater) installed
2.  Clone this repository
3.  Run `npm install` from the project root
4.  Run `npm run dev` to start the server locally
5.  In your browser open `http://localhost:8500/` to access the application

## Deploying

### Heroku

> Just push your code to Github

## Commands

List of commands found in `package.json`. Most of the actions you need to perform via the command line will be available via these commands. These all assume you are in the project root.

`npm run dev` - start development server locally and watch for changes

`npm run build` - output into `build` directory for production

`npm start` - build and start the application on heroku

## Project Structure

This structure is important because it will alleviate issues when we attempt to merge our code. We should not have to create any new folders at this point. If the need arises please communicate the need to the project manager.

Of course, the project structure will change as the project grows. But we will make any structural change decisions as a team when needed.

    ├── node_modules
    ├── src
    │   ├── server.js
    │   └── scripts.js
    ├── .babelrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── .travis.yml
    ├── package-lock.json
    ├── package.json
    └── README.md
