# React Redux Skeleton
Simple skeleton for SPA based on React and Redux and compiled via Webpack.

## App
### Included
* **React**, **Redux** packages
* Routing via **React-router**, injecting routing info into Redux state via **React-router-redux**
* **React-intl** for multilanguage apps
* **Redux-forms** for handling forms using Redux state

### Implemented
* Api calls via **Redux-saga** and **Redux-multi** packages
* Logic of **access and refresh tokens**
* Simple login and handling user and authentication info in Redux state

## Development
* Using **Webpack** for app build
* Using **Webpack-dev-server** for easy development
* Using **Yarn lockfile** for sync packages

### Commands
* `yarn start` - starts development server with autorefresh and compilation of project **on change**
* `yarn build:dev` - builds app into `/build` folder with development config
* `yarn build:prod` - builds app into `/build` folder with production config (performs some additional transformation on generated assets using Webpack plugins)
* `yarn build` - alias for `yarn build:dev`

### Web server settings
* For any web server that is serving files from `/build` folder it is expected to have **root** set into this folder.
* Used web server needs to have set **historyApiFallback** on `'/'`.

## TODO
* include some king of **testing**
* include **linting**