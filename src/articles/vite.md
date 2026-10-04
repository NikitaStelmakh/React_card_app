Manual Installation
In your project, you can install the vite CLI using:

`npm install -D vite`
And create an index.html file like this:


`<p>Hello Vite!</p>`
Then run the appropriate CLI command in your terminal:


npx vite
The index.html will be served on `http://localhost:5173.`

index.html and Project Root
One thing you may have noticed is that in a Vite project, index.html is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.

Vite treats index.html as source code and part of the module graph. It resolves `<script type="module" src="...">` that references your JavaScript source code. Even inline `<script type="module">` and CSS referenced via <link href> also enjoy Vite-specific features. In addition, URLs inside index.html are automatically rebased so there's no need for special `%PUBLIC_URL%` placeholders.

Similar to static http servers, Vite has the concept of a "root directory" which your files are served from. You will see it referenced as `<root>` throughout the rest of the docs. Absolute URLs in your source code will be resolved using the project root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.

Vite also supports multi-page apps with multiple .html entry points.

Specifying Alternative Root
Running vite starts the dev server using the current working directory as root. You can specify an alternative root with vite serve some/sub/dir. Note that Vite will also resolve its config file (i.e. vite.config.js) inside the project root, so you'll need to move it if the root is changed.

Command Line Interface
In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with npx vite. Here are the default npm scripts in a scaffolded Vite project:

package.json
```javascript
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```
You can specify additional CLI options like --port or --open. For a full list of CLI options, run npx vite --help in your project.

Learn more about the Command Line Interface.

Using Unreleased Commits
If you can't wait for a new release to test the latest features, you can install a specific commit of Vite with https://pkg.pr.new:


`npm install -D https://pkg.pr.new/vite@SHA`
Replace SHA with any of Vite's commit SHAs. Note that only commits within the last month will work, as older commit releases are purged.

Alternatively, you can also clone the vite repo to your local machine and then build and link it yourself (pnpm is required):

```javascript
git clone https://github.com/vitejs/vite.git
cd vite
pnpm install
cd packages/vite
pnpm run build
pnpm link # use your preferred package manager for this step
```
Then go to your Vite based project and run pnpm link vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!