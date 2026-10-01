const element = (
  <p>
    Result: {10 + 20}
  </p>
);

Or function calls:

function getName() {
  return "John";
}

const element = (
  <h1>
    Hello, {getName()}!
  </h1>
);

Variables in JSX
Variables can be rendered directly:

const name = "Anna";
const age = 30;

function App() {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}

The values are inserted into the JSX.

Strings in JSX
Strings can be written directly:

<h1>Hello</h1>

Or through JavaScript expressions:

const message = "Hello";

<h1>{message}</h1>

Both produce text in the UI.

Template literals in JSX
Template literals can also be used inside expressions:

const name = "John";

const element = (
  <h1>
    {`Hello, ${name}!`}
  </h1>
);

However, simple expressions are often easier to read:

<h1>Hello, {name}!</h1>

JSX attributes
JSX elements can have attributes.

For example:

<img
  src="image.jpg"
  alt="Example"
/>

Attributes provide information to the element.

Another example:

<button
  type="button"
>
  Click
</button>

JavaScript expressions as attributes
Attributes can receive JavaScript expressions using {}.

For example:

const imageUrl = "/images/user.png";

<img
  src={imageUrl}
  alt="User"
/>

Another example:

const disabled = true;

<button disabled={disabled}>
  Submit
</button>

className
In JSX, the HTML class attribute is usually written as:

className

For example:

<div className="container">
  Hello
</div>

This is because class is a JavaScript keyword.

HTML:

<div class="container">

JSX:

<div className="container">

htmlFor
The HTML for attribute is written as:

htmlFor

For example:

<label htmlFor="email">
  Email
</label>

<input id="email" />

This is another example of JSX using JavaScript-compatible attribute names.

Boolean attributes
JSX supports boolean attributes.

For example:

<button disabled>
  Submit
</button>

This is equivalent to:

<button disabled={true}>
  Submit
</button>

To make the value false:

<button disabled={false}>
  Submit
</button>

JSX comments
JavaScript comments can be used inside JSX expressions.

The syntax is:

{/* This is a JSX comment */}

For example:

function App() {
  return (
    <div>
      {/* Header */}
      <h1>Hello</h1>
    </div>
  );
}

A normal JavaScript comment cannot be placed directly between JSX elements:

// This is not valid here
<h1>Hello</h1>

Instead use:

{/* This is valid */}
<h1>Hello</h1>

JSX must have one parent
A component must return one JSX tree.

For example:

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}

The <div> is the parent element.

This would not work as a single return value:

return (
  <h1>Hello</h1>
  <p>Welcome</p>
);

There are two separate root elements.

React Fragment
A Fragment allows multiple JSX elements without adding an extra DOM element.

The shorthand syntax is:

<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>

The Fragment does not create an additional HTML element.

The resulting DOM is approximately:

<h1>Hello</h1>
<p>Welcome</p>

Fragment component
Fragments can also be written explicitly:

<React.Fragment>
  <h1>Hello</h1>
  <p>Welcome</p>
</React.Fragment>

The shorthand:

<>
  ...
</>

is more commonly used.

JSX elements
JSX elements can be nested.

For example:

<div>
  <h1>Hello</h1>

  <p>
    Welcome to the application.
  </p>
</div>

The structure resembles HTML.

Each JSX element can contain:

children
attributes
other JSX elements
JavaScript expressions

Self-closing elements
JSX elements without children must be self-closing.

For example:

<img src="image.jpg" />

Instead of:

<img src="image.jpg">

Another example:

<input type="text" />

JSX requires the / for self-closing elements.

Nested elements
JSX can contain deeply nested structures:

<div className="card">
  <div className="header">
    <h2>User</h2>
  </div>

  <div className="content">
    <p>Hello!</p>
  </div>
</div>

The JSX structure represents the UI hierarchy.

JSX children
Everything between an opening and closing JSX tag is considered children.

For example:

<div>
  Hello
</div>

The text:

Hello

is a child.

Another example:

<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>

The <h1> and <p> elements are children of <div>.

Components in JSX
React components can be used as JSX elements.

For example:

function Welcome() {
  return <h1>Hello!</h1>;
}

We can use the component:

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

Component names start with an uppercase letter.

HTML elements vs React components
Lowercase JSX tags are treated as HTML elements.

For example:

<div />
<button />
<input />

Uppercase names are treated as components.

For example:

<UserCard />
<Header />
<Button />

The difference is:

lowercase
    ↓
HTML / DOM element

Uppercase
    ↓
React component

JSX component props
Props can be passed to components using JSX attributes.

For example:

function User({
  name,
}) {
  return <h1>{name}</h1>;
}

We can pass a prop:

<User name="John" />

The component receives:

name
 ↓
"John"

Multiple props
A component can receive multiple props:

function User({
  name,
  age,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}

Usage:

<User
  name="John"
  age={25}
/>

String props
String props can be passed directly:

<User name="John" />

This is equivalent to:

<User name={"John"} />

The first syntax is shorter.

Number props
Numbers should normally be passed using {}:

<User age={25} />

Without braces:

<User age="25" />

the value is a string.

So:

age={25}

means:

number

while:

age="25"

means:

string

Boolean props
Boolean values can be passed using:

<Button disabled={true} />

Or shorthand:

<Button disabled />

The shorthand means:

disabled={true}

For false:

<Button disabled={false} />

Object props
Objects can be passed using {}:

const user = {
  name: "John",
  age: 25,
};

<User user={user} />

The expression:

{user}

passes the actual JavaScript object.

Array props
Arrays can also be passed:

const users = [
  "John",
  "Anna",
  "Peter",
];

<UserList users={users} />

The component receives the array as a prop.

Function props
Functions can be passed to components:

function App() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <Button
      onClick={handleClick}
    />
  );
}

The component can then call the function when an event occurs.

Event handlers
JSX supports event handlers.

For example:

<button
  onClick={() => {
    console.log("Clicked");
  }}
>
  Click
</button>

The event handler is a JavaScript function.

Passing an event handler
A function can be defined separately:

function App() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}

Notice that we pass:

onClick={handleClick}

not:

onClick={handleClick()}

The first passes the function.

The second calls the function immediately during rendering.

Event handler with parameters
If a function needs parameters, use an arrow function:

function App() {
  function deleteUser(id) {
    console.log(id);
  }

  return (
    <button
      onClick={() =>
        deleteUser(10)
      }
    >
      Delete
    </button>
  );
}

The arrow function waits until the click occurs.

Conditional rendering
JavaScript conditions can be used to decide what JSX should be rendered.

For example:

const isLoggedIn = true;

function App() {
  return (
    <div>
      {isLoggedIn && (
        <h1>
          Welcome!
        </h1>
      )}
    </div>
  );
}

If:

isLoggedIn = true

the <h1> is rendered.

If:

isLoggedIn = false

nothing is rendered by that expression.

Ternary operator
The ternary operator is commonly used in JSX.

For example:

const isLoggedIn = true;

function App() {
  return (
    <div>
      {isLoggedIn ? (
        <h1>
          Welcome!
        </h1>
      ) : (
        <h1>
          Please log in.
        </h1>
      )}
    </div>
  );
}

The structure is:

condition
    ?
value if true
    :
value if false

Conditional rendering with variables
Complex conditions can be calculated before returning JSX.

For example:

function App() {
  const isLoggedIn = true;

  let content;

  if (isLoggedIn) {
    content = <h1>Welcome!</h1>;
  } else {
    content = <h1>Please log in.</h1>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

This can make complex JSX easier to read.

Rendering nothing
A component can return:

null

For example:

function UserMessage({
  visible,
}) {
  if (!visible) {
    return null;
  }

  return (
    <p>
      Hello!
    </p>
  );
}

Returning null means that the component renders nothing.

Rendering arrays
Arrays of JSX elements can be rendered.

For example:

const items = [
  <li key="1">Apple</li>,
  <li key="2">Banana</li>,
  <li key="3">Orange</li>,
];

function App() {
  return (
    <ul>
      {items}
    </ul>
  );
}

More commonly, arrays are transformed using map().

map() in JSX
A common pattern is:

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Anna",
  },
];

function App() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

The map() method creates one JSX element for each item.

The flow is:

array
  ↓
map()
  ↓
JSX element for each item
  ↓
rendered list

Keys
When rendering lists, React needs a key.

For example:

users.map((user) => (
  <li key={user.id}>
    {user.name}
  </li>
))

The key helps React identify individual elements between renders.

A key should usually be:

unique
stable
associated with the item

An ID from the data is often a good choice.

Avoiding array index as a key
It is possible to use the index:

items.map((item, index) => (
  <li key={index}>
    {item}
  </li>
))

But this can cause problems when the list can be reordered, inserted into, or deleted from.

If an item has a stable ID, prefer:

key={item.id}

JSX with logical AND
The && operator can conditionally render JSX:

{isAdmin && (
  <button>
    Delete
  </button>
)}

If isAdmin is truthy, the button is rendered.

If it is falsy, the expression does not render the button.

Potential issue with &&
Be careful with numeric values:

{count && (
  <p>Count exists</p>
)}

If:

count = 0

React may render:

0

instead of rendering nothing.

A more explicit condition can be:

{count > 0 && (
  <p>Count exists</p>
)}

JSX and null
React does not render:

null

For example:

<div>
  {null}
</div>

produces no visible content for that expression.

The same applies to:

undefined

and:

false

in typical JSX rendering contexts.

JSX and numbers
Numbers can be rendered directly:

const count = 10;

return (
  <p>
    Count: {count}
  </p>
);

This renders:

Count: 10

JSX and objects
Objects cannot normally be rendered directly as children.

For example:

const user = {
  name: "John",
};

return (
  <div>
    {user}
  </div>
);

This causes an error because React cannot render a plain object as a child.

Instead, access a property:

<div>
  {user.name}
</div>

Or convert the object into a string:

<pre>
  {JSON.stringify(user)}
</pre>

JSX and arrays
Arrays can be rendered when their contents are renderable.

For example:

const names = [
  "John",
  "Anna",
  "Peter",
];

return (
  <div>
    {names}
  </div>
);

React can render the string values.

More commonly, arrays are mapped to JSX elements:

<ul>
  {names.map((name) => (
    <li key={name}>
      {name}
    </li>
  ))}
</ul>

JSX spread props
Props can be spread from an object.

For example:

const props = {
  name: "John",
  age: 25,
};

<User {...props} />

This is approximately equivalent to:

<User
  name="John"
  age={25}
/>

Spread syntax is useful when passing many related props.

Props overriding with spread
The order of props matters.

For example:

<User
  {...props}
  name="Anna"
/>

The explicit:

name="Anna"

comes after the spread and overrides props.name.

The reverse:

<User
  name="Anna"
  {...props}
/>

allows props.name to override the previous value.

JSX fragments with keys
The shorthand Fragment syntax cannot receive a key:

<>
  ...
</>

When rendering fragments in a list, use the explicit form:

items.map((item) => (
  <React.Fragment key={item.id}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </React.Fragment>
))

This allows the Fragment itself to have a key.

JSX with forms
JSX is commonly used to create forms.

For example:

function Form() {
  return (
    <form>
      <label htmlFor="email">
        Email
      </label>

      <input
        id="email"
        type="email"
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

The JSX describes the form structure.

Controlled inputs
A controlled input gets its value from React state.

For example:

function Form() {
  const [value, setValue] =
    useState("");

  return (
    <input
      value={value}
      onChange={(event) =>
        setValue(event.target.value)
      }
    />
  );
}

The flow is:

User types
    ↓
onChange
    ↓
setValue()
    ↓
state changes
    ↓
component renders again
    ↓
value updates

JSX style attribute
Inline styles in JSX use an object.

For example:

<div
  style={{
    color: "red",
    fontSize: "20px",
  }}
>
  Hello
</div>

The style value is a JavaScript object.

CSS property names use camelCase.

CSS:

font-size: 20px;

JSX:

fontSize: "20px"

Dynamic styles
Styles can use JavaScript values.

For example:

const color = "blue";

<div
  style={{
    color: color,
  }}
>
  Hello
</div>

The shorthand syntax is:

<div
  style={{
    color,
  }}
>
  Hello
</div>

Dynamic className
Classes can also be created dynamically.

For example:

const isActive = true;

<div
  className={
    isActive
      ? "active"
      : "inactive"
  }
>
  Item
</div>

The class depends on the value of isActive.

Multiple classes
Template literals can be used for multiple classes:

const isActive = true;

<div
  className={`button ${
    isActive ? "active" : ""
  }`}
>
  Click
</div>

Another common approach is to build the class string with JavaScript logic.

JSX and components
JSX allows components to compose other components.

For example:

function Header() {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <p>Content</p>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

The structure is:

App
 ├── Header
 └── Main

Component composition
Components can receive other components or JSX as children.

For example:

function Card({
  children,
}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

Usage:

<Card>
  <h2>Hello</h2>
  <p>Welcome!</p>
</Card>

The JSX inside <Card> becomes:

children

JSX children as props
The following:

<Card>
  <h1>Hello</h1>
</Card>

is conceptually similar to passing:

<Card
  children={
    <h1>Hello</h1>
  }
/>

The children prop contains the nested JSX.

Conditional component rendering
Components can also be rendered conditionally:

function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </>
  );
}

This allows the UI to change based on application state.

JSX and functions
JSX can call functions inside expressions:

function getGreeting(
  name
) {
  return `Hello, ${name}`;
}

function App() {
  return (
    <h1>
      {getGreeting("John")}
    </h1>
  );
}

The function is executed while the component renders.

JSX and object destructuring
Props are often destructured directly in function parameters.

Instead of:

function User(props) {
  return (
    <h1>
      {props.name}
    </h1>
  );
}

we can write:

function User({
  name,
}) {
  return (
    <h1>
      {name}
    </h1>
  );
}

This is standard JavaScript destructuring.

JSX and default values
Props can have default values using destructuring:

function Button({
  text = "Click",
}) {
  return (
    <button>
      {text}
    </button>
  );
}

If no text prop is provided:

<Button />

the component uses:

"Click"

JSX and TypeScript
JSX can be used with TypeScript.

React TypeScript files commonly use:

.tsx

instead of:

.ts

For example:

type UserProps = {
  name: string;
  age: number;
};

function User({
  name,
  age,
}: UserProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}

The .tsx extension allows TypeScript files to contain JSX.

JSX vs TSX
A JavaScript file containing JSX commonly uses:

.jsx

A TypeScript file containing JSX commonly uses:

.tsx

For example:

App.jsx

or:

App.tsx

JSX transformation
JSX is transformed into JavaScript.

For example:

const element = (
  <h1>
    Hello
  </h1>
);

Modern React tooling can transform this into JavaScript using the JSX transform.

Conceptually, JSX describes:

element type
+
props
+
children

and React uses that information to create the corresponding element representation.

JSX and createElement
Historically, JSX was commonly transformed into:

React.createElement(
  "h1",
  null,
  "Hello"
);

For example:

<h1>Hello</h1>

could be transformed conceptually into:

React.createElement(
  "h1",
  null,
  "Hello"
);

Modern React projects often use the automatic JSX runtime, so importing React solely for JSX is generally not necessary.

JSX expressions must return values
Inside JSX braces, JavaScript expressions are used.

For example:

<p>
  {name}
</p>

or:

<p>
  {10 + 20}
</p>

A statement such as a traditional if cannot be placed directly inside {}:

{
  if (isLoggedIn) {
    return "Hello";
  }
}

Instead, use:

{
  isLoggedIn
    ? "Hello"
    : "Please log in"
}

or calculate the value before returning JSX.

JSX and if statements
For complex conditions, regular JavaScript can be used before the return:

function App() {
  let content;

  if (isLoggedIn) {
    content = (
      <Dashboard />
    );
  } else {
    content = (
      <Login />
    );
  }

  return (
    <main>
      {content}
    </main>
  );
}

This is often easier to read than deeply nested ternaries.

Nested ternaries
JSX allows nested ternaries:

{
  status === "loading"
    ? <Loading />
    : status === "error"
      ? <Error />
      : <Content />
}

This works, but deeply nested ternaries can become difficult to read.

For complex UI states, separate variables or regular if statements can be clearer.

JSX and switch
A switch statement can be used before returning JSX.

For example:

function Status({
  status,
}) {
  let content;

  switch (status) {
    case "loading":
      content = <Loading />;
      break;

    case "success":
      content = <Success />;
      break;

    case "error":
      content = <Error />;
      break;

    default:
      content = null;
  }

  return (
    <div>
      {content}
    </div>
  );
}

JSX naming conventions
React components usually use PascalCase:

function UserCard() {
  return <div>User</div>;
}

Then:

<UserCard />

HTML elements use lowercase:

<div />
<span />
<button />

This convention allows React and JSX tooling to distinguish components from native elements.

JSX and custom components
Custom components can accept any props defined by the component.

For example:

function Button({
  variant,
  children,
}) {
  return (
    <button
      className={`button ${variant}`}
    >
      {children}
    </button>
  );
}

Usage:

<Button variant="primary">
  Save
</Button>

The JSX attributes become component props.

JSX and data rendering
A common React pattern is:

Data
 ↓
JavaScript
 ↓
JSX
 ↓
UI

For example:

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Anna",
  },
];

Then:

<ul>
  {users.map((user) => (
    <li key={user.id}>
      {user.name}
    </li>
  ))}
</ul>

The data is transformed into JSX.

JSX and API data
JSX is often used to display data received from an API.

For example:

function UserCard({
  user,
}) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </article>
  );
}

The API data:

User
 ↓
component props
 ↓
JSX
 ↓
UI

JSX and loading states
JSX is commonly used to represent loading states.

For example:

function UserPage({
  loading,
  user,
}) {
  if (loading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <h1>
      {user.name}
    </h1>
  );
}

The component renders different JSX depending on the state.

JSX and error states
A similar pattern can be used for errors:

function UserPage({
  loading,
  error,
  user,
}) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Something went wrong.
      </p>
    );
  }

  return (
    <h1>
      {user.name}
    </h1>
  );
}

The flow is:

loading
   ↓
Loading UI

error
   ↓
Error UI

success
   ↓
Data UI

JSX and fragments in layouts
Fragments are useful when a component needs to return several elements:

function Header() {
  return (
    <>
      <header>
        <h1>My App</h1>
      </header>

      <nav>
        <a href="/">Home</a>
      </nav>
    </>
  );
}

No unnecessary wrapper element is added to the DOM.

JSX and accessibility
JSX can be used to create accessible interfaces.

For example:

<label htmlFor="email">
  Email
</label>

<input
  id="email"
  type="email"
/>

Buttons should use semantic elements:

<button
  type="button"
  onClick={handleClick}
>
  Save
</button>

Using semantic HTML elements helps browsers, assistive technologies, and users understand the interface.

JSX and semantic HTML
Prefer semantic elements when appropriate:

<header>
  ...
</header>

<nav>
  ...
</nav>

<main>
  ...
</main>

<section>
  ...
</section>

<article>
  ...
</article>

<footer>
  ...
</footer>

Instead of using:

<div>

for every part of the interface.

JSX does not prevent the use of normal semantic HTML.

JSX and dangerouslySetInnerHTML
React normally escapes text inserted into JSX.

For example:

const text =
  "<strong>Hello</strong>";

return (
  <div>
    {text}
  </div>
);

The HTML is treated as text.

It is not interpreted as HTML.

React provides:

dangerouslySetInnerHTML

when raw HTML must be inserted.

For example:

<div
  dangerouslySetInnerHTML={{
    __html: html,
  }}
/>

This should be used carefully because inserting untrusted HTML can create security vulnerabilities such as XSS.

JSX and conditional attributes
Attributes can also be conditional.

For example:

<button
  disabled={!isValid}
>
  Submit
</button>

The value of disabled depends on JavaScript state.

Another example:

<input
  readOnly={isReadOnly}
/>

JSX and dynamic URLs
URLs can be stored in variables:

const profileUrl =
  "/users/123";

<a href={profileUrl}>
  Profile
</a>

This allows the URL to be dynamically generated.

JSX and dynamic text
Text can be constructed dynamically:

const firstName = "John";
const lastName = "Smith";

<h1>
  {firstName} {lastName}
</h1>

The result is:

John Smith

JSX and expressions
An expression can contain normal JavaScript operations:

<p>
  {price * quantity}
</p>

Another example:

<p>
  {user.age >= 18
    ? "Adult"
    : "Minor"}
</p>

JSX itself does not replace JavaScript.

It allows JavaScript expressions to be embedded into UI markup.

JSX mental model
A useful way to think about JSX is:

JSX
 ↓
describes UI structure

JavaScript expressions
 ↓
provide dynamic values

Props
 ↓
provide data to components

Children
 ↓
provide nested content

Conditions
 ↓
control what is rendered

map()
 ↓
creates lists of JSX

Components
 ↓
reusable UI pieces

Common JSX mistakes
Forgetting the closing tag
Incorrect:

<div>
  <span>
</div>

Correct:

<div>
  <span />
</div>

Using class instead of className
Incorrect:

<div className="box">

Correct:

<div className="box">

Forgetting braces for JavaScript values
Incorrect:

<User age="25" />

if the component expects a number.

Correct:

<User age={25} />

Calling an event handler immediately
Incorrect:

<button
  onClick={handleClick()}
>
  Click
</button>

Correct:

<button
  onClick={handleClick}
>
  Click
</button>

With parameters:

<button
  onClick={() =>
    handleClick(10)
  }
>
  Click
</button>

Forgetting keys in lists
Incorrect:

users.map((user) => (
  <li>
    {user.name}
  </li>
))

Correct:

users.map((user) => (
  <li key={user.id}>
    {user.name}
  </li>
))

Complete JSX example
Here is a small example combining several JSX concepts:

function UserList({
  users,
  isLoading,
}) {
  if (isLoading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <section>
      <h1>
        Users
      </h1>

      {users.length === 0 ? (
        <p>
          No users found.
        </p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>
                {user.name}
              </h2>

              <p>
                {user.email}
              </p>

              {user.isAdmin && (
                <span>
                  Admin
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

This example contains:

JSX
 ↓
component
 ↓
props
 ↓
conditional rendering
 ↓
ternary operator
 ↓
array.map()
 ↓
keys
 ↓
JavaScript expressions
 ↓
dynamic values
 ↓
conditional JSX

JSX with TypeScript example
A React component using TypeScript and JSX can look like this:

type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

type UserListProps = {
  users: User[];
};

function UserList({
  users,
}: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h2>
            {user.name}
          </h2>

          <p>
            {user.email}
          </p>

          {user.isAdmin && (
            <strong>
              Admin
            </strong>
          )}
        </li>
      ))}
    </ul>
  );
}

Here:

TypeScript
    ↓
defines User and UserListProps

JSX
    ↓
defines the UI

JavaScript
    ↓
provides the logic

The main JSX concepts
The main JSX concepts can be summarized as:

JSX
    ↓
JavaScript syntax for describing UI

Expressions
    ↓
{value}

Attributes
    ↓
className
id
src
disabled
onClick

Components
    ↓
<MyComponent />

Props
    ↓
<MyComponent
  name="John"
/>

Children
    ↓
<MyComponent>
  Content
</MyComponent>

Fragments
    ↓
<>
  ...
</>

Conditions
    ↓
condition && JSX
condition ? JSX : JSX

Lists
    ↓
array.map()

Keys
    ↓
key={item.id}

Events
    ↓
onClick
onChange
onSubmit

Dynamic styles
    ↓
style={{ ... }}

Dynamic classes
    ↓
className={...}

TypeScript
    ↓
.tsx

JSX mental model
A useful final mental model is:

JavaScript
      +
JSX syntax
      ↓
Component
      ↓
Props + State + Data
      ↓
JavaScript expressions
      ↓
JSX tree
      ↓
React
      ↓
UI

JSX is not a separate programming language.

It is a syntax extension that allows developers to describe UI using a combination of JavaScript and XML-like syntax.

The most important idea is:

JSX
 ↓
describes what the UI should look like

JavaScript
 ↓
provides the logic and data

React
 ↓
uses the JSX description to build and update the UI

Once JSX is understood, the next important React concepts are components, props, state, events, hooks, conditional rendering, lists, forms, and component composition.