#  Bootstrap 5 From Scratch - Build 5 Modern Websites, Brad Traversy

20240610-12

## Starting Notes

[Course supplements 1](https://github.com/bradtraversy/bootstrap5websites)
[Course supplements 2](https://github.com/PacktPublishing/Bootstrap-5-From-Scratch-Build-5-Modern-Websites)

##  Initial CDN

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Initial</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
</head>

<body>

    <div class="container">
        <h1 class="text-center">Hello, World!</h1>
        <button type="button" class="btn btn-primary">
            Button
        </button>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>
```

##  Initial WebPack My Custom Fully Operational

```shell title='Webpack Packages'
npm init -y
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i --save bootstrap @popperjs/core
npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
npm install --save-dev mini-css-extract-plugin
```

```shell title='Project Directory Structure'
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss webpack.config.js
```

```javascript title='webpack.config.js'
'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5505,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg'
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
```

```html title='src/index.html'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Webpack</title>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Webpack!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
  </body>
</html>
```

```javascript title='src/js/main.js'
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'
```

```scss title='/src/scss/styles.scss'
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
```

No need to copy paste just informational

```json title='package.json'
{
  "name": "initial-webpack",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "webpack serve",
    "build": "webpack build --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "css-loader": "^7.1.2",
    "html-webpack-plugin": "^5.6.0",
    "postcss-loader": "^8.1.1",
    "sass": "^1.77.4",
    "sass-loader": "^14.2.1",
    "style-loader": "^4.0.0",
    "webpack": "^5.91.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.4"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.3"
  }
}
```

## Initial Webpack

```shell
git clone https://github.com/twbs/examples.git
cd examples/webpack/
npm install
npm start
```

Mevcut hali ile bootstrap-icons ve font-awesome free versiyonları destekleniyor.

```shell
❯ git status -v
On branch ratings-component
Your branch is up to date with 'origin/ratings-component'.

nothing to commit, working tree clean

b5fs-brad-traversy/initial-webpack on  ratings-component is 📦 v1.0.0 via  v22.2.0 on ☁️  bulent@btegitim.com 
❯ git branch
  chapter1
  chapter2
  main
  pricing-cards
* ratings-component
```

##  Initial SASS

```shell
npm install sass
npm install @fontawesome/fontawesome-free
npm install bootstrap

```

```javascript title='package.json'
{
...
  "scripts": {
    "sass:build": "sass --watch scss:css"
  },


```

```shell
scss/styles.scss
scss/bootstrap.css
bootstrap.bundle.min.js from node_modules
```

```shell
❯ git remote -v
origin  https://github.com/bbmorten/b5fs-brad-traversy.git (fetch)
origin  https://github.com/bbmorten/b5fs-brad-traversy.git (push)

b5fs-brad-traversy/starter-template on  saas-starter-template is 📦 v1.0.0 via  v22.3.0 on ☁️  bulent@btegitim.com 
❯ git branch
  chapter1
  chapter2
  main
  pricing-cards
  ratings-component
* saas-starter-template
  user-list
```
