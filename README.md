# Deploying mern.io project to Heroku
[![status|done](http://jeffreynerona.com/badges/status-done.svg)](http://jeffreynerona.com/projects) [![type|practice-project](http://jeffreynerona.com/badges/type-practiceproject.svg)](http://jeffreynerona.com/projects/) [![language|ruby](http://jeffreynerona.com/badges/language-javascript.svg)](http://jeffreynerona.com/projects/javascript)

A simple tutorial on deploying a MERN (MongoDB - Express - React - Node) app generated with mern.io.

## package.json
Modify your start script to production:
```
"start": "cross-env NODE_ENV=production node index.js"
```
Copy your devDependencies to dependencies:
```
"dependencies": {
    "babel-core": "^6.9.1",
    "body-parser": "^1.15.1",
    "compression": "^1.6.2",
    "cross-env": "^1.0.8",
    "cuid": "^1.3.8",
    "express": "^4.13.4",
    "intl": "^1.2.4",
    "intl-locales-supported": "^1.0.0",
    "isomorphic-fetch": "^2.2.1",
    "limax": "^1.3.0",
    "mongoose": "^4.4.20",
    "react": "^15.1.0",
    "react-dom": "^15.1.0",
    "react-helmet": "^3.1.0",
    "react-intl": "^2.1.2",
    "react-redux": "^4.4.5",
    "react-router": "^2.4.1",
    "redux": "^3.5.2",
    "redux-thunk": "^2.1.0",
    "sanitize-html": "^1.11.4",
    "ava": "^0.15.2",
    "babel-eslint": "^6.0.4",
    "babel-loader": "^6.2.4",
    "babel-plugin-webpack-loaders": "^0.7.0",
    "babel-polyfill": "^6.9.1",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-es2015-native-modules": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-react-optimize": "^1.0.1",
    "babel-preset-stage-0": "^6.5.0",
    "babel-register": "^6.9.0",
    "chai": "^3.5.0",
    "chunk-manifest-webpack-plugin": "0.1.0",
    "coveralls": "^2.11.9",
    "css-loader": "^0.23.1",
    "css-modules-require-hook": "^4.0.1",
    "cssnano": "^3.7.0",
    "enzyme": "^2.3.0",
    "eslint": "^2.11.1",
    "eslint-config-airbnb": "^9.0.1",
    "eslint-plugin-ava": "^2.4.0",
    "eslint-plugin-import": "^1.8.1",
    "eslint-plugin-jsx-a11y": "^1.3.0",
    "eslint-plugin-react": "^5.1.1",
    "eventsource-polyfill": "^0.9.6",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.8.5",
    "jsdom": "^9.2.1",
    "json-loader": "^0.5.4",
    "mock-css-modules": "^1.0.0",
    "mockgoose": "^6.0.3",
    "nock": "^8.0.0",
    "nodemon": "^1.9.2",
    "null-loader": "^0.1.1",
    "nyc": "^6.4.4",
    "postcss-cssnext": "^2.6.0",
    "postcss-focus": "^1.0.0",
    "postcss-loader": "^0.9.1",
    "postcss-reporter": "^1.3.3",
    "pre-commit": "^1.1.3",
    "react-addons-test-utils": "^15.1.0",
    "react-hot-loader": "^3.0.0-beta.2",
    "redux-ava": "^2.0.0",
    "redux-devtools": "^3.3.1",
    "redux-devtools-dock-monitor": "^1.1.1",
    "redux-devtools-log-monitor": "^1.0.11",
    "rimraf": "^2.5.2",
    "sinon": "^1.17.4",
    "style-loader": "^0.13.1",
    "supertest": "^1.2.0",
    "url-loader": "^0.5.7",
    "webpack": "2.1.0-beta.8",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-dev-server": "^2.1.0-beta.0",
    "webpack-externals-plugin": "^1.0.0",
    "webpack-hot-middleware": "^2.10.0",
    "webpack-manifest-plugin": "^1.0.1"
  },
```

## server/config.js
Add your Cloud MongoDB url<br>
it usually starts with: 'mongodb://.......'<br>
If you don't have one yet, one choice is https://cloud.mongodb.com<br>
Create a new cluster and get your link... Be sure to update the password in your link.
```
const config = {
  mongoURL: process.env.MONGO_URL || 'your_mongo_url_here',
  port: process.env.PORT || 8000,
};

export default config;
```
## .gitignore
Unignore `public/*` and `dist`
```
.DS_Store
node_modules/
npm-debug.log
.idea/
dump.rdb
.vscode/
coverage/
.nyc_output/
```
## Build
Build the client part:
```
npm run build
```
Build the server part:
```
npm run build:server
```

## Deploy to Heroku
Go to https://dashboard.heroku.com/apps/ and create a new app.<br>
There are several ways to deploy like Heroku CLI or Github, here I'll be using Gtihub.

Go to your project and push it to github:
```
git init
git add .
git commit -n -m "initial commit"
git remote add origin "your-github-repository-link"
git push -u origin master
```
Go to your new heroku app and Deploy with github.<br>
Finally, run your app... Here's mine: https://mern-io-heroku.herokuapp.com/
# The End
