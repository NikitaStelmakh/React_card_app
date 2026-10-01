Webpack — Main Concepts
Webpack is a module bundler for JavaScript applications.

It takes different files and modules from a project, analyzes their dependencies, and creates one or more optimized bundles that can be loaded by the browser.

Webpack can work with:

JavaScript
TypeScript
CSS
Images
Fonts
HTML
JSON
SVG

The main idea is:

Application
    ↓
Modules
    ↓
Webpack
    ↓
Dependency graph
    ↓
Bundles
    ↓
Browser

Webpack is especially useful for large applications where many files depend on each other.

What is a module?
A module is a file that contains code which can be imported and exported.

For example:

// math.js

export function add(a, b) {
  return a + b;
}

Another file can import it:

// index.js

import { add } from "./math.js";

console.log(add(10, 20));

Webpack analyzes these imports and determines which files are required by the application.

Module graph
Webpack builds a dependency graph from the application's modules.

For example:

index.js
   ↓
math.js
   ↓
utils.js

Or:

index.js
   ├── Header.js
   │      └── logo.svg
   │
   ├── UserList.js
   │      └── User.js
   │
   └── api.js

Webpack starts from an entry point and follows imports.

The result is a dependency graph.

Entry
  ↓
Modules
  ↓
Dependencies
  ↓
Dependency graph

Entry
The entry tells Webpack where the application starts.

A simple configuration:

const path = require("path");

module.exports = {
  entry: "./src/index.js",
};

Webpack starts from:

src/index.js

and follows its imports.

For example:

import { add } from "./math";
import { render } from "./render";

Webpack will analyze:

index.js
   ↓
math.js
render.js

Output
The output option specifies where Webpack should create the generated bundle.

For example:

const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ),
    filename: "bundle.js",
  },
};

Webpack can generate:

dist/
└── bundle.js

The important options are:

path
filename

Basic Webpack configuration
A simple configuration can look like:

const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ),
    filename: "bundle.js",
  },
};

The basic flow is:

src/index.js
      ↓
    Webpack
      ↓
dist/bundle.js

Installation
Webpack can be installed as a development dependency.

For example:

npm install --save-dev webpack webpack-cli

This installs:

webpack
webpack-cli

webpack is the bundler.

webpack-cli allows us to run Webpack from the command line.

package.json script
We can add a script:

{
  "scripts": {
    "build": "webpack"
  }
}

Then run:

npm run build

Webpack will execute the configuration and create the bundle.

webpack.config.js
Webpack configuration is usually stored in:

webpack.config.js

For example:

const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ),
    filename: "bundle.js",
  },
};

Webpack automatically looks for this file when running:

webpack

We can also specify another configuration file.

Mode
Webpack has different modes.

The most common are:

development
production
none

For example:

module.exports = {
  mode: "development",
};

Production:

module.exports = {
  mode: "production",
};

Development mode is optimized for development.

Production mode enables optimizations intended for deployment.

Development mode
A development configuration might look like:

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
  },
};

Development mode generally prioritizes:

debugging
readability
development experience

Production mode
Production mode is intended for building an application for deployment.

For example:

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
  },
};

Production builds can include optimizations such as:

minification
tree shaking
smaller output
dead code elimination

Loaders
Webpack itself primarily understands JavaScript and JSON.

Loaders allow Webpack to process other file types.

For example:

TypeScript
CSS
SCSS
Images
Fonts

A loader transforms a module before Webpack adds it to the dependency graph or bundle.

The general idea is:

File
 ↓
Loader
 ↓
Processed module
 ↓
Webpack
 ↓
Bundle

Why loaders are needed
Suppose we have:

src/
├── index.js
├── styles.css
└── logo.png

And:

import "./styles.css";
import logo from "./logo.png";

Webpack needs to know how to process:

.css
.png

Loaders provide that behavior.

module.rules
Loaders are configured using:

module.rules

For example:

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

The rule says:

Find .css files
      ↓
css-loader
      ↓
style-loader

test
The test property determines which files a rule applies to.

For example:

{
  test: /\.css$/,
}

This matches files ending with:

.css

Another example:

{
  test: /\.tsx?$/,
}

This matches:

.ts
.tsx

use
The use property specifies which loaders should process the matching files.

For example:

{
  test: /\.css$/,
  use: [
    "style-loader",
    "css-loader",
  ],
}

The loaders are applied in reverse order.

Conceptually:

CSS
 ↓
css-loader
 ↓
style-loader
 ↓
JavaScript bundle

CSS loader
css-loader allows Webpack to process CSS files.

For example:

{
  test: /\.css$/,
  use: ["css-loader"],
}

It allows CSS to be imported:

import "./styles.css";

style-loader
style-loader injects CSS into the page through <style> tags.

For example:

{
  test: /\.css$/,
  use: [
    "style-loader",
    "css-loader",
  ],
}

The flow is:

styles.css
    ↓
css-loader
    ↓
style-loader
    ↓
<style>
    ↓
Browser

CSS Modules
Webpack can also be configured to work with CSS Modules.

For example:

{
  test: /\.module\.css$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,
      },
    },
  ],
}

Then:

Button.module.css

can be imported as a module.

For example:

import styles from "./Button.module.css";

console.log(styles.button);

Babel loader
Babel can be used together with Webpack to transform modern JavaScript or JSX.

Installation:

npm install --save-dev babel-loader @babel/core @babel/preset-env

A basic configuration:

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

Babel configuration
Babel can be configured using:

babel.config.js

For example:

module.exports = {
  presets: [
    "@babel/preset-env",
  ],
};

The flow becomes:

JavaScript
    ↓
babel-loader
    ↓
Babel
    ↓
transformed JavaScript
    ↓
Webpack

JSX with Webpack
React applications often use JSX.

For example:

function App() {
  return <h1>Hello</h1>;
}

Webpack does not transform JSX by itself.

A common setup is:

Webpack
   +
Babel
   +
babel-loader

Babel can transform JSX into JavaScript.

React and Babel
A Babel configuration for React may use:

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
  ],
};

Webpack:

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};

The flow is:

JSX
 ↓
Babel
 ↓
JavaScript
 ↓
Webpack
 ↓
Bundle

TypeScript with Webpack
Webpack can also work with TypeScript.

A common loader is:

ts-loader

Installation:

npm install --save-dev typescript ts-loader

Configuration:

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

TypeScript configuration
A TypeScript project usually contains:

tsconfig.json

For example:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true
  }
}

Webpack and TypeScript can then work together:

.ts / .tsx
    ↓
ts-loader
    ↓
TypeScript
    ↓
JavaScript
    ↓
Webpack
    ↓
Bundle

Plugins
Loaders transform individual modules.

Plugins can perform broader build-related tasks.

For example, plugins can:

generate HTML
extract CSS
copy files
define environment variables
optimize bundles
clean output directories

Plugins are configured with:

plugins: []

HtmlWebpackPlugin
HtmlWebpackPlugin can generate an HTML file and automatically include the generated bundles.

Installation:

npm install --save-dev html-webpack-plugin

Configuration:

const HtmlWebpackPlugin =
  require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

The flow is:

index.html
    ↓
HtmlWebpackPlugin
    ↓
dist/index.html

The generated HTML can include the Webpack bundle automatically.

CleanWebpackPlugin
Webpack can clean the output directory before generating a new build.

Modern Webpack can often use:

output: {
  clean: true,
}

For example:

module.exports = {
  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ),
    filename: "bundle.js",
    clean: true,
  },
};

Before a new build, old generated files can be removed.

Copying static files
Webpack applications may need to copy static files into the output directory.

A plugin can be used for this purpose.

For example:

npm install --save-dev copy-webpack-plugin

Configuration:

const CopyPlugin =
  require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "public",
        },
      ],
    }),
  ],
};

The plugin copies files during the build.

Asset modules
Modern Webpack supports asset modules without requiring separate file-loader packages.

For example:

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

Now an image can be imported:

import logo from "./logo.png";

Webpack generates an output file and provides its URL.

asset/resource
asset/resource emits the file as a separate asset.

For example:

{
  test: /\.png$/,
  type: "asset/resource",
}

The result can look like:

src/logo.png
      ↓
Webpack
      ↓
dist/abc123.png

The imported value becomes the URL of the generated asset.

asset/inline
asset/inline embeds the asset into the bundle.

For example:

{
  test: /\.svg$/,
  type: "asset/inline",
}

The asset can be converted into a data URI.

Conceptually:

file
 ↓
data URI
 ↓
JavaScript bundle

This can be useful for small assets.

asset
The asset type allows Webpack to automatically choose between emitting a separate file and embedding the asset.

For example:

{
  test: /\.(png|jpg|gif)$/i,
  type: "asset",
}

Webpack uses a size threshold to determine how the asset should be handled.

Asset modules summary
The main asset module types are:

asset/resource
    ↓
separate file

asset/inline
    ↓
embedded into bundle

asset/source
    ↓
source content

asset
    ↓
automatic choice

Resolve
The resolve option controls how Webpack resolves imports.

For example:

module.exports = {
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
  },
};

This allows:

import Button from "./Button";

instead of:

import Button from "./Button.tsx";

Webpack checks the configured extensions.

resolve.alias
Aliases can create shorter import paths.

For example:

const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "src"
      ),
    },
  },
};

Now instead of:

import Button from "../../../components/Button";

we can write:

import Button from "@/components/Button";

Aliases can make imports easier to maintain.

Source maps
Source maps help developers debug the original source code instead of the generated bundle.

For example:

module.exports = {
  devtool: "source-map",
};

Without source maps:

Browser
 ↓
bundle.js
 ↓
debug generated code

With source maps:

Browser
 ↓
bundle.js
 ↓
source map
 ↓
original source

This is especially useful during development.

Common devtool options
Webpack provides different source map configurations.

For example:

devtool: "source-map";

Other options include:

eval
eval-source-map
cheap-module-source-map
source-map
inline-source-map

Different options provide different trade-offs between:

build speed
debugging quality
bundle size

Development server
Webpack can be used with a development server.

A common package is:

webpack-dev-server

Installation:

npm install --save-dev webpack-dev-server

A configuration can include:

module.exports = {
  devServer: {
    port: 3000,
    open: true,
  },
};

Then the application can run through a local development server.

webpack-dev-server
The development server can provide features such as:

local development server
automatic rebuilds
browser refresh
Hot Module Replacement

The development flow becomes:

Edit source code
      ↓
Webpack detects changes
      ↓
Rebuild
      ↓
Browser updates

Hot Module Replacement
Hot Module Replacement, or HMR, allows Webpack to update modules while the application is running without performing a full page reload in many cases.

The basic idea is:

Change source file
      ↓
Webpack rebuilds module
      ↓
HMR sends update
      ↓
Application updates

HMR is useful for fast development feedback.

HMR configuration
For example:

module.exports = {
  devServer: {
    hot: true,
  },
};

With modern Webpack development setups, HMR can often be enabled with minimal configuration.

Code splitting
Code splitting divides the application into multiple bundles or chunks.

Instead of:

application
    ↓
one huge bundle

we can have:

application
    ↓
main.js
dashboard.js
settings.js
profile.js

This can allow parts of an application to be loaded only when needed.

Dynamic imports
One common way to create split points is using dynamic imports.

For example:

import("./dashboard.js")
  .then((module) => {
    module.render();
  });

Webpack detects the dynamic import.

The result can be:

main.js
    +
dashboard chunk

The dashboard code can be loaded later.

React lazy loading
Code splitting is often used with React.

For example:

import React from "react";

const Dashboard =
  React.lazy(
    () => import("./Dashboard")
  );

Then:

<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>

Webpack can create a separate chunk for:

Dashboard

The browser can load it when needed.

Lazy loading
Lazy loading means that code or resources are loaded when they are needed rather than immediately.

For example:

Initial page
    ↓
Load main application
    ↓
User opens dashboard
    ↓
Load dashboard chunk

This can reduce the amount of JavaScript needed during the initial load.

Entry points and multiple bundles
Webpack can have multiple entry points.

For example:

module.exports = {
  entry: {
    main: "./src/main.js",
    admin: "./src/admin.js",
  },

  output: {
    filename: "[name].bundle.js",
  },
};

Webpack can generate:

main.bundle.js
admin.bundle.js

Each entry represents a separate starting point.

Output filename placeholders
Webpack supports placeholders in output filenames.

For example:

output: {
  filename: "[name].bundle.js",
}

Possible placeholders include:

[name]
[contenthash]
[chunkhash]
[id]

For example:

filename: "[name].[contenthash].js"

can produce:

main.abc123.js

Content hashes
Content hashes can help with browser caching.

For example:

output: {
  filename:
    "[name].[contenthash].js",
}

If the content does not change, the generated filename can remain the same.

If the content changes:

main.abc123.js

may become:

main.def456.js

This allows browsers to cache unchanged files more effectively.

Caching
Browsers cache static assets.

Suppose the browser has:

main.abc123.js

If the application changes and Webpack generates:

main.def456.js

the browser knows that this is a different resource.

This is one reason content hashes are commonly used in production builds.

Tree shaking
Tree shaking removes unused exports from the final bundle when Webpack can determine that they are not needed.

For example:

// math.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

If we only import:

import { add } from "./math";

Webpack can potentially remove unused code such as:

subtract()

from the production bundle.

Tree shaking works best with ES modules.

ES modules and tree shaking
Webpack can analyze static ES module imports and exports.

For example:

import { add } from "./math";

Webpack can determine which exports are used.

This is one reason modern JavaScript applications commonly use:

import
export

instead of older dynamic module systems.

Dead code elimination
Dead code is code that cannot be reached or is not required.

For example:

if (false) {
  console.log("This code is never used");
}

Production optimizations can remove code like this.

Tree shaking and other optimization techniques can reduce the final bundle size.

Minification
Production builds commonly minify JavaScript.

For example:

function add(a, b) {
  return a + b;
}

can be transformed into a smaller representation similar to:

function add(a,b){return a+b}

The goal is to reduce file size.

Webpack production mode can use optimization tooling for this automatically.

Optimization
Webpack provides an optimization configuration object.

For example:

module.exports = {
  optimization: {
    minimize: true,
  },
};

Optimization can involve:

minification
tree shaking
code splitting
chunk optimization
module optimization

SplitChunksPlugin
Webpack provides SplitChunksPlugin for extracting shared dependencies into separate chunks.

For example:

Page A
  ↓
React

Page B
  ↓
React

Instead of duplicating React in both chunks, Webpack can create a shared chunk.

Conceptually:

main
  ↓
shared

pageA
  ↓
shared

pageB
  ↓
shared

This can improve caching and reduce duplication.

Runtime chunk
Webpack can separate runtime code into its own chunk.

For example:

optimization: {
  runtimeChunk: "single",
}

This can produce a structure such as:

runtime.js
main.js
vendors.js

The runtime contains Webpack's runtime-related code for managing modules and chunks.

Public path
The publicPath option controls the base URL used for generated assets.

For example:

output: {
  publicPath: "/assets/",
}

Webpack can then reference assets using paths such as:

/assets/main.js
/assets/logo.png

This is useful when assets are hosted under a specific path or CDN.

Environment variables
Webpack can define values that are available during the build.

For example, using DefinePlugin:

const webpack =
  require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(
        "https://api.example.com"
      ),
    }),
  ],
};

Application code can then reference:

console.log(API_URL);

The value is replaced during the build.

DefinePlugin
DefinePlugin allows compile-time constants to be defined.

For example:

const webpack =
  require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV":
        JSON.stringify("production"),
    }),
  ],
};

The important concept is:

DefinePlugin
    ↓
defines compile-time values
    ↓
Webpack replaces references
    ↓
generated bundle

It does not automatically create a secure secret store.

Webpack aliases and environment configuration
A project may combine:

aliases
environment variables
entry points
loaders
plugins

For example:

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "src"
      ),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(
        process.env.API_URL
      ),
    }),
  ],
};

This allows build configuration to depend on the environment.

Webpack with TypeScript and React
A typical React + TypeScript Webpack project can contain:

project/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
│
├── public/
│   └── index.html
│
├── package.json
├── tsconfig.json
└── webpack.config.js

The build flow:

.tsx
  ↓
ts-loader
  ↓
TypeScript
  ↓
JavaScript
  ↓
Webpack
  ↓
bundle

Example React + TypeScript configuration
A simplified configuration:

const path = require("path");
const HtmlWebpackPlugin =
  require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/main.tsx",

  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ),
    filename: "bundle.js",
    clean: true,
  },

  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    port: 3000,
    hot: true,
  },
};

Webpack build process
A simplified Webpack build process looks like:

1. Read configuration
        ↓
2. Find entry point
        ↓
3. Analyze imports
        ↓
4. Build dependency graph
        ↓
5. Apply loaders
        ↓
6. Apply plugins
        ↓
7. Optimize modules
        ↓
8. Split chunks
        ↓
9. Generate assets
        ↓
10. Write output

Webpack dependency graph example
Suppose:

main.tsx

contains:

import App from "./App";
import "./styles.css";

And App.tsx contains:

import Header from "./Header";

Webpack can create a graph:

main.tsx
   │
   ├── App.tsx
   │      │
   │      └── Header.tsx
   │
   └── styles.css

Webpack uses this graph to determine what must be included in the build.

Webpack vs browser
The browser does not need to understand the entire Webpack configuration.

Webpack performs the build before deployment.

The typical process is:

Developer writes source code
        ↓
Webpack builds application
        ↓
dist/
        ↓
Deploy generated files
        ↓
Browser downloads assets

The browser receives the generated assets rather than the Webpack configuration itself.

Webpack development vs production
Development:

Development
    ↓
webpack-dev-server
    ↓
fast rebuilds
    ↓
source maps
    ↓
HMR

Production:

Production
    ↓
webpack build
    ↓
optimization
    ↓
minification
    ↓
code splitting
    ↓
hashed assets
    ↓
deployment

Webpack concepts summary
The main Webpack concepts are:

Entry
    ↓
Where the application starts

Output
    ↓
Where generated files are written

Loaders
    ↓
Process individual file types

Plugins
    ↓
Perform broader build tasks

Resolve
    ↓
Control how modules are found

Dev Server
    ↓
Run the application during development

HMR
    ↓
Update modules during development

Code Splitting
    ↓
Create multiple chunks

Tree Shaking
    ↓
Remove unused exports

Optimization
    ↓
Reduce and improve production output

Loader vs Plugin
One of the most important differences is:

Loader
   ↓
Transforms or processes modules

Plugin
   ↓
Extends Webpack's build process

For example:

css-loader
    ↓
processes CSS imports

babel-loader
    ↓
transforms JavaScript / JSX

ts-loader
    ↓
processes TypeScript

HtmlWebpackPlugin
    ↓
generates HTML

DefinePlugin
    ↓
defines compile-time constants

Webpack mental model
A useful way to think about Webpack is:

Source files
     ↓
Entry point
     ↓
Imports
     ↓
Dependency graph
     ↓
Loaders
     ↓
Plugins
     ↓
Optimization
     ↓
Chunks
     ↓
Assets
     ↓
dist/

Webpack is essentially a build system centered around a module dependency graph.

Webpack and npm
Webpack itself is usually installed through npm.

For example:

npm install --save-dev webpack webpack-cli

Other functionality can be added through packages:

webpack-dev-server
babel-loader
ts-loader
css-loader
style-loader
html-webpack-plugin
copy-webpack-plugin

The exact dependencies depend on the project.

Webpack configuration structure
A typical configuration can be organized like this:

const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ),
    filename: "bundle.js",
    clean: true,
  },

  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
  },

  module: {
    rules: [],
  },

  plugins: [],

  optimization: {},

  devtool: "source-map",

  devServer: {
    port: 3000,
  },
};

The main configuration sections are:

mode
entry
output
resolve
module
plugins
optimization
devtool
devServer

Common Webpack workflow
A typical workflow is:

1. Create project
        ↓
2. Install Webpack
        ↓
3. Create webpack.config.js
        ↓
4. Define entry
        ↓
5. Define output
        ↓
6. Configure loaders
        ↓
7. Configure plugins
        ↓
8. Run development server
        ↓
9. Build production bundle
        ↓
10. Deploy dist/

Example package.json
A simple project can have:

{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production"
  },
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^6.0.0",
    "webpack-dev-server": "^5.0.0"
  }
}

Then:

npm run dev

starts development.

And:

npm run build

creates a production build.

Webpack output
After building, a project might contain:

project/
├── src/
│   ├── index.js
│   └── App.js
│
├── dist/
│   ├── index.html
│   ├── main.abc123.js
│   └── 456.def456.js
│
├── package.json
└── webpack.config.js

The dist directory contains generated files.

These files can be deployed to a web server.

Webpack and deployment
Webpack is a build tool.

It does not normally serve the production application by itself.

The common flow is:

Source code
    ↓
Webpack build
    ↓
dist/
    ↓
Web server / CDN
    ↓
Browser

A production server can serve the generated HTML, JavaScript, CSS, images, and other assets.

Webpack mental model for React developers
For a React developer, it can be useful to think about Webpack like this:

React components
       ↓
TypeScript / JSX
       ↓
Loaders
       ↓
Webpack
       ↓
Dependency graph
       ↓
Code splitting
       ↓
Optimization
       ↓
JavaScript chunks
       ↓
Browser

Webpack is not React.

React is a UI library.

Webpack is a build and bundling tool.

They can be used together.

Webpack vs Vite
Webpack and Vite are both tools used in modern frontend development, but they work differently.

Webpack is primarily a mature module bundler with a highly configurable build pipeline.

Vite provides a development server that uses native ES modules during development and uses a production build pipeline based on Rollup in current versions.

Conceptually:

Webpack

Source
  ↓
Webpack
  ↓
Bundle
  ↓
Browser

While Vite development works more like:

Source
  ↓
Vite Dev Server
  ↓
Native ES Modules
  ↓
Browser

The production build process is different from the development server behavior.

Webpack vs Vite development experience
Webpack development commonly involves:

webpack-dev-server
      ↓
Webpack compilation
      ↓
HMR
      ↓
Browser

Vite development commonly uses:

Vite dev server
      ↓
Native ESM
      ↓
Browser

Both tools support modern frontend development, but their architectures and configuration approaches differ.

When Webpack is useful
Webpack can be useful when a project needs:

highly customized build behavior
complex loader pipelines
custom plugins
multiple entry points
advanced bundling configuration
legacy project compatibility
fine-grained build control

Webpack has a large ecosystem and has been used extensively in production frontend applications.

When understanding Webpack matters
Even when using another tool such as Vite, understanding Webpack concepts is useful because many frontend build concepts are shared.

For example:

modules
dependencies
bundles
chunks
loaders
plugins
tree shaking
code splitting
source maps
asset processing
caching

These concepts appear throughout modern frontend tooling.

Final Webpack mental model
The most important idea is:

Your application
      ↓
Entry point
      ↓
Webpack follows imports
      ↓
Dependency graph
      ↓
Loaders process files
      ↓
Plugins extend the build
      ↓
Webpack optimizes the graph
      ↓
Code is split into chunks
      ↓
Assets are generated
      ↓
dist/
      ↓
Browser

In short:

Webpack
    =
Module Bundler
    +
Build Pipeline
    +
Asset Processing
    +
Optimization

The key concepts to remember are:

Entry
Output
Loaders
Plugins
Resolve
Dependency Graph
Chunks
Code Splitting
Tree Shaking
Optimization
Source Maps
HMR
Assets
Caching

These concepts form the foundation for understanding Webpack and how modern JavaScript applications are built.


