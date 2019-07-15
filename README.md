# southbound
The website for the China Power Southbound Report
It is built using [Create React App Rewired](https://github.com/timarney/react-app-rewired) and [React Snapshot](https://github.com/geelen/react-snapshot)

Data is connected to a Google Sheet workbook in the China Power Google Drive folder. Triggering a new deploy runs the Google API via node write.js and updates data in src/app/charts.json

## Table of Contents
* [Quick-Start Instructions](#quick-start-instructions)
* [Usage](#usage)
* [What's Included](#whats-included)
* [Project Organization](#project-organization)
* [Contributing](#contributing)

## Quick-start Instructions

```shell
$ git clone https://github.com/CSIS-iLab/southbound.git
$ cd southbound
$ npm install
```
You will need to create a charts.json file, which uses Google Sheets API to pull in, and structure data. Create an .env file and fill in the Google API Key. See ``.env.example` The API Key is available in Slack
```shell
$ node write.js
$ npm start
```

## Usage

### development

This will give you file watching, browser synchronization, auto-rebuild, CSS injecting, etc.

```shell
$ npm start
```



### production

```shell
$ npm run build
```
You can serve the build folder locally
```shell
$ npm install -g serve
$ serve -s build
```

## What's Included
- Create React App includes:
  - webpack
  - service worker
  - hot reloading
  - es6 features
  - async/await
  - spread operators
  - imports
  - and [more](https://github.com/facebook/create-react-app)
- React Snapshot is a zero-configureation pre-renderer that creates static html. This is better SEO for crawlers like Google and Web Archive.
- Polyfills for older browsers used by our global audience:
  - @babel/polyfill
  - react-app-polyfill
- Create React App Rewired's config-overrides.js allows the use of other style utilities in order to conform with other CSIS projects:
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss](http://postcss.org/)
  - [stylelint](https://stylelint.io/)
  - [sass-loader](https://github.com/webpack-contrib/sass-loader)
  - [node-sass](https://github.com/sass/node-sass)
  - [cssnano](https://cssnano.co/)
  - for js: [eslint](https://eslint.org/)
- To parse markdown
  - [gray-matter](https://github.com/jonschlinkert/gray-matter)
  - [raw-loader](https://github.com/webpack-contrib/raw-loader)

## Project Organization

### src/assets
Contains styles, images, and fonts

### src/content
The `content` folder contains markdown files that can be used to set up a routes in App.js, or for use throughout the site. Markdown can be parsed using the GetData.js helper. Files produced by forestry in markdown, yaml, json or other formats can go here.

### src/app
Contains helper utility functions, React components, layouts, that render elements that may be repeated through out the site. Pages have state and lifecycle methods. App.js sets up data flow and routing.

### src/lambda
Can contain lambda functions that will run provided an npm script and netlify.toml file

### public
Contains the page template. Only files inside public can be used from public/index.html. [learn more](https://facebook.github.io/create-react-app/docs/using-the-public-folder#docsNav)

### forestry
Configuration files for the Forestry CMS can live here, including the front matter UI fields and settings for the different content types.

## Contributing
### Branching
When modifying the code base, always make a new branch. Unless it's necessary to do otherwise, all branches should be created off of `master`.

Branches should use the following naming conventions:

| Branch type               | Name                                                      | Example                     |
|---------------------------|-----------------------------------------------------------|-----------------------------|
| New Feature               | `feature/<short description of feature>`                  | `feature/header-navigation` |
| Bug Fixes                 | `bug/<short description of bug>`                          | `bug/mobile-navigation`     |
| Documentation             | `docs/<short description of documentation being updated>` | `docs/readme`               |
| Code clean-up/refactoring | `refactor/<short description>`                            | `refactor/apply-linting`    |
| Content Updates           | `content/<short description of content>`                  | `content/add-new-posts`     |

When ready to merge, submit a Pull Request into `master`. All code will be reviewed by the lead developer on the project before being merged into `master`.

### Commit Messages
Write clear and concise commit messages describing the changes you are making and why. If there are any issues associated with the commit, include the issue # in the commit title.

### CSS Styles
* This project uses the [BEM](http://getbem.com/introduction/) naming convention.

## Copyright / License

Copyright © 2018 CSIS iDeas Lab under the [MIT License](https://github.com/ixkaito/frasco/blob/master/LICENSE).
