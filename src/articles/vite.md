Vite — Main Concepts

Vite is a modern frontend build tool designed to provide a fast and efficient development experience.

It is commonly used with modern JavaScript and TypeScript frameworks such as React, Vue, Svelte, and others.

The main idea of Vite is:

```text
Source Code
    ↓
Vite
    ↓
Fast Development Server
    ↓
Browser

For production:

Source Code
    ↓
Vite Build
    ↓
Optimized JavaScript / CSS / Assets
    ↓
Production Server

Vite focuses on fast development, fast startup, efficient hot updates, and optimized production builds.

🚀 What is Vite?
Vite is a frontend build tool and development server.

It provides:

⚡ Fast development server

🔥 Hot Module Replacement

📦 Production builds

🧩 Plugin system

⚙️ Configuration

🟦 TypeScript support

⚛️ React support

🎨 CSS processing

🖼️ Asset handling

🌍 Environment variables

🔧 Integration with modern frontend frameworks

Vite is not a frontend framework.

For example:

React
 ↓
UI library

Vite
 ↓
Development server + build tool

A project can use:

React + Vite

or:

Vue + Vite

or:

Svelte + Vite

🧠 Why Vite?
Traditional frontend tooling can require a significant amount of work before a development server becomes ready.

Vite uses modern browser capabilities during development to avoid unnecessarily bundling the entire application before starting the server.

The basic idea is:

Traditional development

Source files
    ↓
Bundle everything
    ↓
Start development server
    ↓
Browser

Vite development:

Source files
    ↓
Start server quickly
    ↓
Browser requests modules
    ↓
Vite serves them as needed

This can make development startup and updates very fast.

⚡ Vite development server
When we start a Vite project:

npm run dev

Vite starts a development server.

For example:

Local:   http://localhost:5173/

The browser connects to the development server and requests application modules.

The development server handles:

JavaScript
TypeScript
CSS
Images
SVG
Assets
Framework files

📦 Creating a Vite project
A common way to create a new Vite project is:

npm create vite@latest

Vite will ask questions about the project.

For example:

Project name:
Select a framework:
Select a variant:

We can also specify the project directly.

For React + TypeScript:

npm create vite@latest my-app -- --template react-ts

Then:

cd my-app
npm install
npm run dev

The general flow is:

Create project
    ↓
Install dependencies
    ↓
Start development server
    ↓
Open browser

🧩 Vite templates
Vite provides templates for several technologies.

Examples include:

vanilla
vanilla-ts
react
react-ts
vue
vue-ts
svelte
svelte-ts

For example:

npm create vite@latest my-app -- --template react

React with TypeScript:

npm create vite@latest my-app -- --template react-ts

Vue with TypeScript:

npm create vite@latest my-app -- --template vue-ts

The template determines the initial project structure.

📁 Typical Vite project structure
A React + TypeScript Vite project can look approximately like:

my-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts

Different templates and Vite versions can generate slightly different structures.

The important files are:

index.html
    ↓
HTML entry point

src/main.tsx
    ↓
Application entry point

src/App.tsx
    ↓
Main React component

vite.config.ts
    ↓
Vite configuration

package.json
    ↓
Project scripts and dependencies

🏁 index.html
Vite projects have an index.html file at the project root.

For example:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>My App</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      type="module"
      src="/src/main.tsx"
    ></script>
  </body>
</html>

The important part is:

<script
  type="module"
  src="/src/main.tsx"
></script>

This loads the application entry point.

⚛️ React entry point
In a React + TypeScript project, main.tsx may look like:

import {
  StrictMode,
} from "react";

import {
  createRoot,
} from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <App />
  </StrictMode>
);

The flow is:

index.html
    ↓
main.tsx
    ↓
App.tsx
    ↓
React application

📜 package.json
The package.json file describes the project.

For example:

{
  "name": "my-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

The scripts are especially important.

npm run dev
    ↓
Start development server

npm run build
    ↓
Create production build

npm run preview
    ↓
Preview production build

🔥 npm run dev
The development command is usually:

npm run dev

This starts Vite's development server.

Typical output:

VITE vX.X.X  ready in XXX ms

➜  Local:   http://localhost:5173/

The exact version and startup time depend on the project and environment.

🏗️ npm run build
The production build is usually created with:

npm run build

This runs:

vite build

The process is approximately:

Source code
    ↓
Vite
    ↓
Transform
    ↓
Bundle
    ↓
Optimize
    ↓
dist/

The result is usually placed inside:

dist/

👀 npm run preview
After building the application:

npm run build

we can preview the production build:

npm run preview

This starts a local server for the generated production files.

The flow is:

npm run build
    ↓
dist/
    ↓
npm run preview
    ↓
Local production preview

The preview server is intended for local previewing rather than serving as a production server.

📦 dist directory
After:

npm run build

Vite generates a production output directory.

Usually:

dist/

It may contain files such as:

dist/
├── assets/
├── index.html
└── ...

These files are optimized for deployment.

⚙️ vite.config.ts
Vite configuration is commonly stored in:

vite.config.ts

For example:

import {
  defineConfig,
} from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
});

This changes the development server port.

🧩 defineConfig
Vite provides:

defineConfig()

for configuration.

For example:

import {
  defineConfig,
} from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
});

Using defineConfig provides better editor and TypeScript support for the configuration.

🔌 Plugins
Vite has a plugin system.

Plugins can add or modify functionality.

For example, a React project commonly uses a React plugin.

import {
  defineConfig,
} from "vite";

import react from
  "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
});

The flow is:

Vite
 ↓
Plugin system
 ↓
React plugin
 ↓
React-specific functionality

⚛️ React plugin
A React Vite project commonly uses:

@vitejs/plugin-react

Configuration:

import {
  defineConfig,
} from "vite";

import react from
  "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
});

The plugin provides integration between Vite and React.

🔥 Hot Module Replacement
One of Vite's important development features is:

HMR

which means:

Hot Module Replacement

Suppose we have:

function App() {
  return (
    <h1>Hello</h1>
  );
}

We change it to:

function App() {
  return (
    <h1>Hello World</h1>
  );
}

Vite can update the affected module in the browser without requiring a complete page reload in many cases.

The idea is:

Edit file
    ↓
Vite detects change
    ↓
Update affected module
    ↓
Browser updates

This makes development faster.

🔄 HMR vs page reload
Traditional page reload:

Change code
    ↓
Reload page
    ↓
Application starts again

HMR:

Change code
    ↓
Vite detects change
    ↓
Affected module updates
    ↓
Application state can often be preserved

The exact behavior depends on the framework and the type of change.

🌐 Server configuration
The development server can be configured.

For example:

import {
  defineConfig,
} from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
});

Common options include:

port
host
https
proxy
open

🔢 Port
The development server normally uses:

5173

A different port can be configured:

export default defineConfig({
  server: {
    port: 3000,
  },
});

Now the application is available on:

http://localhost:3000

🌍 host
The host option controls which network interfaces the development server listens on.

For example:

export default defineConfig({
  server: {
    host: true,
  },
});

This can make the development server accessible from other devices on the local network, depending on the environment and network configuration.

🔗 open
Vite can automatically open the browser when the development server starts.

For example:

export default defineConfig({
  server: {
    open: true,
  },
});

Then:

npm run dev

can automatically open the application in the default browser.

🔄 Proxy
A development server can proxy API requests.

This is especially useful when the frontend and backend run on different ports.

For example:

Frontend
http://localhost:5173

Backend
http://localhost:3000

We can configure:

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});

Then a frontend request:

fetch("/api/users");

can be forwarded by Vite to:

http://localhost:3000/api/users

🌐 Why use a proxy?
Without a proxy:

Browser
   ↓
Frontend :5173

Browser
   ↓
Backend :3000

The browser may treat these as different origins.

With a development proxy:

Browser
   ↓
Vite :5173
   ↓
/api
   ↓
Backend :3000

This can simplify local development.

🛣️ Proxy path rewriting
A proxy can also rewrite paths.

For example:

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "http://localhost:3000",
        rewrite: (
          path
        ) =>
          path.replace(
            /^\/api/,
            ""
          ),
      },
    },
  },
});

A request:

/api/users

can become:

/users

when sent to the backend.

📁 public directory
Vite supports a:

public/

directory.

Files inside public are served as static assets.

For example:

public/
└── logo.png

The file can be referenced as:

<img src="/logo.png" />

The important idea is:

public/logo.png
       ↓
/logo.png

🖼️ Assets inside src
Assets can also live inside:

src/

For example:

src/
├── assets/
│   └── logo.png
└── App.tsx

Then we can import the asset:

import logo from
  "./assets/logo.png";

function App() {
  return (
    <img src={logo} />
  );
}

Vite processes the imported asset as part of the build.

📌 public vs src/assets
A useful mental model:

public/
    ↓
Static files
    ↓
Referenced by URL

src/assets/
    ↓
Imported files
    ↓
Processed by Vite

For example:

public/logo.png

can be referenced as:

/logo.png

While:

src/assets/logo.png

is typically imported:

import logo from
  "./assets/logo.png";

🎨 CSS
Vite supports CSS imports directly.

For example:

import "./style.css";

Vite processes the stylesheet during development and production builds.

A CSS file can contain:

body {
  margin: 0;
  font-family: sans-serif;
}

🎨 CSS modules
Framework projects can also use CSS Modules.

For example:

Button.module.css

.button {
  background: blue;
  color: white;
}

Then:

import styles from
  "./Button.module.css";

function Button() {
  return (
    <button
      className={styles.button}
    >
      Click
    </button>
  );
}

CSS Modules provide locally scoped class names.

🟦 TypeScript support
Vite supports TypeScript projects.

For example:

src/
├── App.tsx
├── main.tsx
└── types.ts

TypeScript files can use:

.ts
.tsx

Vite can transform TypeScript files for development and production builds.

However, Vite's default transformation process does not perform full TypeScript type checking.

Type checking is commonly handled separately with:

tsc

or project-specific tooling.

🧠 Vite and TypeScript type checking
It is important to distinguish:

Vite
 ↓
Fast module transformation and bundling

TypeScript compiler
 ↓
Type checking

For example:

tsc --noEmit

can be used to check types without generating JavaScript output.

A project can have scripts such as:

{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "type-check": "tsc --noEmit"
  }
}

The exact scripts depend on the project setup.

🌍 Environment variables
Vite supports environment variables.

For example:

.env
.env.local
.env.production

A variable exposed to client-side code generally needs the:

VITE_

prefix.

For example:

VITE_API_URL=https://api.example.com

In application code:

const apiUrl =
  import.meta.env.VITE_API_URL;

🔐 VITE_ prefix
Suppose .env contains:

VITE_API_URL=https://api.example.com

Then:

import.meta.env.VITE_API_URL

is available to client-side code.

But:

DATABASE_PASSWORD=secret

is not automatically exposed through:

import.meta.env

The important rule is:

VITE_*
    ↓
intended for client exposure

Therefore, secrets should not be placed in VITE_ variables.

⚠️ Environment variables are not secrets
This is extremely important.

If a value is included in frontend code:

Browser
    ↓
JavaScript
    ↓
User can inspect it

Therefore:

API keys intended to remain secret
database passwords
private tokens
server credentials

should not be placed into client-exposed Vite environment variables.

For example:

VITE_SECRET_PASSWORD=123

is not actually secret.

The VITE_ prefix means the value can be exposed to the client bundle.

📄 .env
A basic .env file can contain:

VITE_API_URL=https://api.example.com
VITE_APP_NAME=My Application

Then:

const apiUrl =
  import.meta.env.VITE_API_URL;

const appName =
  import.meta.env.VITE_APP_NAME;

🧪 .env.local
A common local environment file is:

.env.local

For example:

VITE_API_URL=http://localhost:3000

This file is commonly used for local development-specific values.

Projects often configure .gitignore to prevent local environment files containing sensitive or machine-specific values from being committed.

🏭 .env.production
Environment-specific files can also be used.

For example:

.env
.env.local
.env.production
.env.production.local

Different files can provide different values depending on the mode.

For example:

Development
    ↓
.env.development

Production
    ↓
.env.production

🎛️ Modes
Vite uses modes to determine which environment configuration should be loaded.

Common modes include:

development
production

For example:

vite

normally runs in:

development

while:

vite build

normally uses:

production

🔎 import.meta.env.MODE
The current mode can be accessed using:

import.meta.env.MODE

For example:

console.log(
  import.meta.env.MODE
);

It may produce:

development

or:

production

depending on how the application was started.

🛠️ import.meta.env.DEV
Vite provides:

import.meta.env.DEV

which indicates whether the application is running in development mode.

For example:

if (import.meta.env.DEV) {
  console.log(
    "Development mode"
  );
}

🏭 import.meta.env.PROD
Vite also provides:

import.meta.env.PROD

which indicates whether the application is running in production mode.

For example:

if (import.meta.env.PROD) {
  console.log(
    "Production mode"
  );
}

🌐 import.meta.env.BASE_URL
Vite provides:

import.meta.env.BASE_URL

which represents the configured base URL of the application.

This becomes especially important when deploying an application under a subpath.

📍 base option
Vite can configure the base path:

import {
  defineConfig,
} from "vite";

export default defineConfig({
  base: "/my-app/",
});

Then assets and generated URLs are based on:

/my-app/

This can be useful when deploying to a subdirectory.

🚀 Deploying to a subdirectory
Suppose the application is deployed at:

https://example.com/my-app/

The Vite configuration may use:

export default defineConfig({
  base: "/my-app/",
});

Without the correct base path, generated asset URLs may point to the wrong location.

📦 Build process
A simplified production build looks like:

Source code
      ↓
Vite
      ↓
Transform modules
      ↓
Resolve imports
      ↓
Bundle modules
      ↓
Optimize assets
      ↓
Generate production files
      ↓
dist/

The resulting files can be deployed to a static hosting service or served by a web server.

🧩 Code splitting
Vite can split application code into multiple chunks.

For example:

Application
    ↓
main.js
    ↓
feature chunk
    ↓
another chunk

This can allow parts of an application to load only when they are needed.

💤 Dynamic imports
Dynamic imports are one way to create lazy-loaded modules.

For example:

const module =
  await import("./feature");

The module can be loaded asynchronously.

In React applications, this can be combined with:

const Dashboard =
  lazy(
    () => import("./Dashboard")
  );

This allows the dashboard code to be loaded separately.

⚛️ React.lazy with Vite
For example:

import {
  lazy,
  Suspense,
} from "react";

const Dashboard = lazy(
  () =>
    import("./Dashboard")
);

function App() {
  return (
    <Suspense
      fallback={
        <div>Loading...</div>
      }
    >
      <Dashboard />
    </Suspense>
  );
}

The flow is:

Initial application
       ↓
Dashboard not loaded yet
       ↓
User needs Dashboard
       ↓
Browser loads chunk
       ↓
Dashboard renders

📦 Dependency optimization
During development, Vite performs dependency optimization for dependencies from node_modules.

This helps Vite handle dependencies efficiently in the development environment.

For example:

node_modules
    ↓
Dependency optimization
    ↓
Browser

This is especially useful because modern projects can contain many dependencies.

🧱 Build target
Vite allows configuring the JavaScript target for production builds.

For example:

export default defineConfig({
  build: {
    target: "es2020",
  },
});

The target determines which JavaScript syntax the generated code is allowed to use.

📦 build.outDir
The output directory can be changed.

For example:

export default defineConfig({
  build: {
    outDir: "build",
  },
});

Instead of:

dist/

the production output goes to:

build/

🧹 build.emptyOutDir
Vite normally clears the output directory before generating a new build when appropriate.

The behavior can be configured using:

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
});

This helps avoid stale files from previous builds.

🗜️ Minification
Production builds generally minify JavaScript and CSS.

For example:

function greet(name) {
  return "Hello " + name;
}

can be transformed into a smaller representation.

The purpose is:

Smaller files
    ↓
Less data transferred
    ↓
Faster loading

🖼️ Asset handling
Vite processes imported assets such as:

images
SVG
fonts
CSS

For example:

import logo from
  "./assets/logo.svg";

Vite resolves the asset and generates an appropriate URL for the build.

🔤 SVG
An SVG can be imported:

import logo from
  "./logo.svg";

and used as:

<img src={logo} />

Depending on the framework and plugin configuration, SVG files can also be transformed into components using additional tooling.

🔤 JSON imports
Vite supports importing JSON.

For example:

import config from
  "./config.json";

console.log(
  config.name
);

This allows JSON data to be used directly in modules.

🧪 Testing with Vite
Vite itself is primarily a build tool and development server.

Testing can be added using tools such as:

Vitest

Vitest is designed to integrate closely with Vite's ecosystem and configuration.

For example:

npm install -D vitest

A test may look like:

import {
  describe,
  expect,
  test,
} from "vitest";

describe(
  "addition",
  () => {
    test(
      "adds numbers",
      () => {
        expect(
          1 + 2
        ).toBe(3);
      }
    );
  }
);

🧪 Vite and Vitest
The relationship can be thought of as:

Vite
 ↓
Development + build tooling

Vitest
 ↓
Testing framework

Vitest can reuse concepts from Vite such as:

aliases
plugins
environment configuration
module transformation

🔗 Path aliases
Large projects often use aliases.

Instead of:

import Button from
  "../../../components/Button";

we may want:

import Button from
  "@/components/Button";

An alias can be configured in Vite.

For example:

import {
  defineConfig,
} from "vite";

import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@":
        path.resolve(
          __dirname,
          "./src"
        ),
    },
  },
});

Then:

import Button from
  "@/components/Button";

🧩 resolve.alias
Aliases are configured through:

resolve: {
  alias: {
    "@": "./src"
  }
}

A more complete example:

import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "./src"
      ),
    },
  },
});

The idea is:

@
 ↓
src/

🟦 TypeScript paths
When using TypeScript, the alias should generally also be understood by TypeScript.

For example:

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}

This means both tools understand:

@/components/Button

as:

src/components/Button

Modern Vite projects may use plugins or newer configuration approaches to keep Vite and TypeScript path resolution aligned.

🔌 Custom plugins
Vite plugins can modify the development and build process.

A plugin can respond to lifecycle hooks and perform custom transformations.

A simplified plugin:

export default {
  name: "my-plugin",

  transform(code, id) {
    if (
      id.endsWith(".custom")
    ) {
      return {
        code,
        map: null,
      };
    }
  },
};

Then:

export default defineConfig({
  plugins: [
    myPlugin(),
  ],
});

Plugins are useful when integrating additional technologies into the build process.

🧠 Plugin lifecycle
Vite plugins can participate in different stages.

Conceptually:

Project starts
    ↓
Plugin initialization
    ↓
Resolve modules
    ↓
Load files
    ↓
Transform code
    ↓
Build
    ↓
Generate output

The exact hooks and behavior depend on the plugin.

🔧 Common Vite configuration
A React project may have:

import {
  defineConfig,
} from "vite";

import react from
  "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],

  server: {
    port: 3000,

    proxy: {
      "/api": {
        target:
          "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "dist",
  },
});

This configuration defines:

React plugin
     ↓
React support

server.port
     ↓
Development server port

server.proxy
     ↓
API proxy

build.outDir
     ↓
Production output directory

🧭 Vite and routing
Vite itself does not provide application routing.

For React applications, routing is commonly handled by a library such as:

React Router

The relationship is:

Vite
 ↓
Build tool

React
 ↓
UI

React Router
 ↓
Client-side routing

🌐 SPA fallback
Single Page Applications often use client-side routing.

For example:

/
 /about
 /users
 /settings

The browser may request:

/users

directly.

The production web server must usually be configured to serve the application's index.html for routes that are handled by the client router.

This is a deployment/server configuration concern rather than something Vite alone solves.

🚀 Vite deployment
A Vite application can be deployed to many hosting providers.

The general process is:

Write application
    ↓
npm run build
    ↓
dist/
    ↓
Upload/deploy dist/
    ↓
Web server
    ↓
Browser

The exact deployment configuration depends on the hosting provider.

☁️ Static hosting
Because Vite produces static frontend assets, many Vite applications can be deployed to static hosting services.

Examples include:

GitHub Pages
Netlify
Vercel
Cloudflare Pages
Firebase Hosting
AWS S3

The typical deployment process is:

npm run build
    ↓
dist/
    ↓
Static hosting

🔐 HTTPS in development
Vite can be configured to use HTTPS during development.

For example:

export default defineConfig({
  server: {
    https: true,
  },
});

In many projects, HTTPS development requires certificates or additional configuration.

HTTPS can be useful when testing features that require a secure context.

🔄 Environment-specific configuration
A project can use different configuration values depending on the environment.

For example:

Development
    ↓
http://localhost:3000

Production
    ↓
https://api.example.com

Environment variables can provide these values:

VITE_API_URL=http://localhost:3000

and:

VITE_API_URL=https://api.example.com

Then:

const apiUrl =
  import.meta.env.VITE_API_URL;

The application can use the same code while the environment provides different values.

📌 import.meta.env
Vite exposes environment information through:

import.meta.env

For example:

console.log(
  import.meta.env.MODE
);

console.log(
  import.meta.env.DEV
);

console.log(
  import.meta.env.PROD
);

console.log(
  import.meta.env.VITE_API_URL
);

🧠 Vite vs Webpack
Vite and Webpack are both frontend build tools, but their development architectures differ.

A simplified comparison:

Webpack development
    ↓
Bundle-oriented development

Vite development
    ↓
Native ESM + on-demand transformation

Vite was designed around modern browser capabilities and fast development startup.

Webpack has a mature ecosystem and is highly configurable.

Both can be used to build modern frontend applications.

⚡ Vite vs Create React App
Create React App was historically a popular way to create React applications.

Vite provides a different development and build architecture.

For example:

Create React App
    ↓
React tooling based on its own build setup

Vite
    ↓
Modern development server
    ↓
Fast module handling
    ↓
Production build

Vite is now widely used for new frontend projects.

🧱 Vite is not a framework
This distinction is important.

Vite provides:

development server
build system
plugins
asset handling
configuration

It does not automatically provide:

application components
routing
state management
database
backend
authentication

For example:

React
+
Vite
+
React Router
+
Axios
+
Redux

can form a complete frontend stack.

Each tool has a different responsibility.

🧩 Vite + React + TypeScript
A common stack is:

Vite
    ↓
Development + build

React
    ↓
UI

TypeScript
    ↓
Static typing

React Router
    ↓
Routing

Axios
    ↓
HTTP requests

This combination is common for modern frontend applications.

📡 Vite and API requests
Vite does not provide an HTTP client.

For API requests, an application can use:

fetch
Axios
another HTTP library

For example:

const response =
  await fetch(
    "/api/users"
  );

const users =
  await response.json();

Or with Axios:

import axios from "axios";

const response =
  await axios.get(
    "/api/users"
  );

const users =
  response.data;

Vite's responsibility is to provide the development/build environment, not to make API requests itself.

🧠 Vite mental model
A useful way to think about Vite is:

Vite
 ↓
Frontend development infrastructure

During development:

Source code
    ↓
Vite dev server
    ↓
Browser
    ↓
HMR

During production:

Source code
    ↓
Vite build
    ↓
Optimized files
    ↓
dist/
    ↓
Hosting

🛠️ Typical Vite workflow
A normal workflow looks like:

1. Create project
       ↓
2. npm install
       ↓
3. npm run dev
       ↓
4. Write code
       ↓
5. Vite updates browser
       ↓
6. npm run build
       ↓
7. Deploy dist/

📋 Important Vite commands
The most common commands are:

npm create vite@latest

Create a new Vite project.

npm install

Install dependencies.

npm run dev

Start the development server.

npm run build

Create a production build.

npm run preview

Preview the production build locally.

🧠 Important Vite files
A typical project contains:

index.html
    ↓
HTML entry point

src/main.tsx
    ↓
Application entry point

src/App.tsx
    ↓
Main application component

vite.config.ts
    ↓
Vite configuration

package.json
    ↓
Dependencies and scripts

tsconfig.json
    ↓
TypeScript configuration

.env
    ↓
Environment variables

🔥 HMR mental model
Remember:

Edit component
      ↓
Vite detects file change
      ↓
Module is transformed
      ↓
HMR update
      ↓
Browser receives update
      ↓
UI updates

This is one of the main reasons Vite provides a fast development experience.

🏭 Production mental model
Remember:

Development:

Source
  ↓
Vite Dev Server
  ↓
Browser


Production:

Source
  ↓
Vite Build
  ↓
Optimized Assets
  ↓
dist/
  ↓
Hosting
  ↓
Browser

⚠️ Common Vite mistakes
❌ Putting secrets in VITE_ variables
Bad:

VITE_DATABASE_PASSWORD=secret

Why?

VITE_*
    ↓
Can be exposed to client code

Never treat client-side environment variables as secret storage.

❌ Forgetting the API proxy
Suppose:

Frontend:
localhost:5173

Backend:
localhost:5000

Calling:

axios.get(
  "http://localhost:5000/users"
);

may create cross-origin development issues depending on backend configuration.

A Vite proxy can instead allow:

axios.get(
  "/api/users"
);

with:

/api
 ↓
Vite proxy
 ↓
Backend

❌ Assuming Vite performs TypeScript type checking
Vite can transform TypeScript quickly, but type checking should be handled separately when needed.

For example:

tsc --noEmit

can perform type checking.

❌ Confusing public assets with imported assets
This:

public/logo.png

is referenced as:

/logo.png

while:

src/assets/logo.png

is commonly imported:

import logo from
  "./assets/logo.png";

They follow different asset handling models.

🧠 Vite and TypeScript configuration
A TypeScript Vite project can have several configuration files.

For example:

tsconfig.json
tsconfig.app.json
tsconfig.node.json

The exact structure depends on the template and TypeScript/Vite versions.

The general idea is:

TypeScript application
    ↓
tsconfig.app.json

Vite configuration
    ↓
tsconfig.node.json

This separation can allow different compiler settings for browser application code and Node-based configuration files.

🔧 vite.config.ts and Node
The Vite configuration itself runs in a Node.js environment.

For example:

import {
  defineConfig,
} from "vite";

import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "./src"
      ),
    },
  },
});

This is different from application code that runs in the browser.

🌐 Client vs server
A useful distinction:

vite.config.ts
    ↓
Node.js environment

src/
    ↓
Browser application

Therefore, Node APIs available in:

vite.config.ts

are not automatically available inside:

src/App.tsx

📦 Dependencies vs devDependencies
A Vite project may contain:

{
  "dependencies": {
    "react": "...",
    "react-dom": "..."
  },

  "devDependencies": {
    "vite": "...",
    "@vitejs/plugin-react": "..."
  }
}

The exact classification depends on how packages are used by the project.

A common pattern is:

Runtime application dependencies
    ↓
dependencies

Development/build tooling
    ↓
devDependencies

🔄 npm scripts
Scripts are defined in:

package.json

For example:

{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}

Then:

npm run dev

runs:

vite

and:

npm run build

runs:

tsc -b && vite build

🧹 Vite cache
Vite stores optimized dependency information in its cache directory.

A common directory is:

node_modules/.vite/

If dependency optimization behaves unexpectedly, developers may sometimes need to clear or force re-optimization.

For example:

vite --force

can force dependency optimization.

🔍 Debugging Vite
Useful things to inspect when debugging:

Browser console
    ↓
Runtime errors

Network tab
    ↓
Requests and assets

Terminal
    ↓
Vite errors

vite.config.ts
    ↓
Configuration

.env files
    ↓
Environment variables

A typical debugging flow:

Problem
  ↓
Browser console
  ↓
Network
  ↓
Terminal
  ↓
Vite configuration
  ↓
Environment variables

🧠 The most important Vite concepts
The most important concepts are:

Vite
 ↓
Frontend build tool

Dev server
 ↓
Runs application locally

HMR
 ↓
Updates modules during development

Build
 ↓
Creates production files

Plugins
 ↓
Extend Vite

vite.config.ts
 ↓
Configure Vite

public/
 ↓
Static assets

src/assets/
 ↓
Imported assets

.env
 ↓
Environment variables

VITE_*
 ↓
Client-exposed environment variables

server.proxy
 ↓
Development API proxy

base
 ↓
Application base path

dist/
 ↓
Production output

🧠 Vite mental model
The complete mental model can be summarized as:

                 VITE
                  │
        ┌─────────┴─────────┐
        │                   │
   DEVELOPMENT          PRODUCTION
        │                   │
        ↓                   ↓
   Dev Server             Build
        │                   │
        ↓                   ↓
      HMR              Optimization
        │                   │
        ↓                   ↓
     Browser              dist/
                            │
                            ↓
                         Hosting

🎯 Final Vite example
A simple React + TypeScript Vite configuration:

import {
  defineConfig,
} from "vite";

import react from
  "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],

  server: {
    port: 3000,

    proxy: {
      "/api": {
        target:
          "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "dist",
  },
});

The application can then use:

import axios from "axios";

async function getUsers() {
  const response =
    await axios.get(
      "/api/users"
    );

  return response.data;
}

The flow becomes:

React
  ↓
Vite
  ↓
Development server
  ↓
/api/users
  ↓
Vite proxy
  ↓
Backend

For production:

React + TypeScript
        ↓
    Vite build
        ↓
       dist/
        ↓
     Hosting
        ↓
      Browser

🧠 Vite — Quick Summary
Vite
 ↓
Modern frontend build tool

npm run dev
 ↓
Development server

HMR
 ↓
Fast module updates

vite.config.ts
 ↓
Vite configuration

plugins
 ↓
Extend Vite

npm run build
 ↓
Production build

dist/
 ↓
Production files

public/
 ↓
Static assets

src/assets/
 ↓
Imported assets

.env
 ↓
Environment configuration

VITE_*
 ↓
Client-exposed environment variables

server.proxy
 ↓
Development API proxy

base
 ↓
Base URL/path

Vite + React
 ↓
Frontend application

Vite + TypeScript
 ↓
Typed frontend development

The main idea:

Vite
  ↓
Fast development
  +
Modern module handling
  +
HMR
  +
Plugins
  +
Production builds
  +
Asset processing
  +
Environment configuration
  ↓
Modern frontend application