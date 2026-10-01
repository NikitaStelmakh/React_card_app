# React Router — Main Methods

React Router is a library used to add routing and navigation to React applications.

Routing allows an application to display different components depending on the current URL.

For example:

```text
/                  → Home page
/about             → About page
/articles          → Articles page
/articles/15       → Article with ID 15
```

React Router allows navigation between these pages without a full browser reload.

---

## BrowserRouter

`BrowserRouter` is a component that provides routing functionality to a React application.

It uses the browser's History API to keep the application's UI synchronized with the current URL.

Usually, `BrowserRouter` is placed near the root of the application.

```javascript
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Main;
```

Components such as `Routes`, `Route`, `Link`, `useNavigate()`, and `useParams()` need to be inside `BrowserRouter` in order to access the router context.

A simplified structure looks like this:

```text
BrowserRouter
      ↓
     App
      ↓
   Routes
      ↓
    Route
```

---

## Routes

`Routes` is a component that contains the application's routes.

Each route describes which component should be rendered for a particular URL.

```javascript
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

If the current URL is:

```text
/
```

React Router renders:

```javascript
<Home />
```

If the current URL is:

```text
/about
```

React Router renders:

```javascript
<About />
```

---

## Route

`Route` defines a relationship between a URL and a React component.

A basic route looks like this:

```javascript
<Route
  path="/about"
  element={<About />}
/>
```

The `path` property defines the URL.

The `element` property defines the React element that should be rendered.

For example:

```javascript
<Route
  path="/articles"
  element={<Articles />}
/>
```

means:

> When the URL matches `/articles`, render the `<Articles />` component.

---

## path

The `path` property specifies which URL should match a route.

For example:

```javascript
<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />
```

These routes correspond to:

```text
/
 /about
 /contact
```

The path can also contain dynamic parameters.

```javascript
<Route
  path="/articles/:id"
  element={<Article />}
/>
```

Here, `:id` is a dynamic parameter.

---

## Dynamic route parameters

A dynamic parameter allows part of the URL to change.

For example:

```javascript
<Route
  path="/articles/:id"
  element={<Article />}
/>
```

This route can match:

```text
/articles/1
/articles/2
/articles/15
/articles/100
```

The `:id` part is not a fixed value.

It is a placeholder for a value that comes from the URL.

For example:

```text
/articles/15
```

contains:

```text
id = 15
```

The parameter can then be accessed using `useParams()`.

---

## useParams()

`useParams()` is a React Router hook used to read dynamic parameters from the current URL.

Suppose we have:

```javascript
<Route
  path="/articles/:id"
  element={<Article />}
/>
```

And the current URL is:

```text
/articles/15
```

Inside the `Article` component:

```javascript
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();

  return <h1>Article ID: {id}</h1>;
}
```

The result is:

```text
Article ID: 15
```

The value returned by `useParams()` is a string.

For example:

```javascript
const { id } = useParams();

console.log(id);
```

will produce:

```text
"15"
```

not:

```text
15
```

If the ID needs to be used as a number, it can be converted:

```javascript
const numberId = Number(id);
```

---

## How useParams() gets the ID

Consider this route:

```javascript
<Route
  path="/video/:id"
  element={<VideoPage />}
/>
```

Suppose the user opens:

```text
/video/23
```

React Router sees:

```text
:id = 23
```

Then:

```javascript
const { id } = useParams();
```

gives:

```javascript
id === "23"
```

The value comes from the URL.

The component does not receive the ID directly as a prop.

---

## Link

`Link` is used to navigate between routes.

```javascript
import { Link } from "react-router-dom";

<Link to="/about">
  About
</Link>
```

When the user clicks the link, React Router changes the URL
