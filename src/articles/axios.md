Your First Request
Axios provides methods for the common HTTP verbs:
```ts
axios.get(url)
axios.post(url, data)
axios.put(url, data) / axios.patch(url, data)
axios.delete(url)
Also, calling axios(url) defaults to a GET request.
```
Key notes:

Axios returns a promise
The response body is in response.data
Errors often include server details in error.response
import axios from "axios";
```ts
const url = "https://api.example.com/users";

const fetchData = async () => {
  try {
    // axios(url) defaults to GET
    const response = await axios(url);

    console.log("Full response:", response);
    console.log("Data only:", response.data);
  } catch (error) {
    console.log("Error response:", error.response);
  }
};

fetchData();
```
GET with Headers
Axios accepts a config object as the second argument in `get():`
```ts
const fetchDadJoke = async () => {
  const url = "https://icanhazdadjoke.com/";

  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });

    console.log("Joke:", data.joke);
  } catch (error) {
    console.log(error.response);
  }
};
```
`fetchDadJoke();`
Why this matters: some APIs return HTML by default unless you explicitly ask for JSON.

POST Request (Sending Data)
To send data to the server, use axios.post(url, data).

Second argument is your payload
Third argument is config (headers, auth, etc.)
import axios from "axios";

`const url = "https://api.example.com/posts";`
```ts
const createPost = async () => {
  try {
    const payload = { title: "Hello Axios", body: "This is a post." };
    const resp = await axios.post(url, payload);

    console.log("Created:", resp.data);
  } catch (error) {
    console.log("Server error:", error.response?.data);
  }
};

createPost();
```
Global Defaults (Convenient, But Use Carefully)
Axios lets you set defaults once, so you don’t repeat config everywhere.

`import axios from "axios";`

`axios.defaults.baseURL = "https://api.example.com";`
`axios.defaults.headers["Accept"] = "application/json";`

// Example: attach a token (if you have one)
```ts
const AUTH_TOKEN = "YOUR_TOKEN_HERE";
axios.defaults.headers["Authorization"] = `Bearer ${AUTH_TOKEN}`;

// Example: set default content-type for POST requests
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
Note: In newer Axios versions, axios.defaults.headers.common may not behave like older tutorials. Setting headers via axios.defaults.headers[...] is a safer pattern.
```
Create a Custom Axios Instance (Recommended)
Instead of modifying global defaults, you can create an Axios instance for a specific API.
```ts
import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});

// Usage

const getProducts = async () => {
  const { data } = await authFetch.get("/react-store-products");
  console.log(data);
};

getProducts();
```
This keeps your codebase cleaner—especially when you have multiple APIs or different auth rules.

Interceptors (Power Feature)
Interceptors let you run logic before a request is sent and after a response is received.

Typical uses:

Automatically attach auth tokens
Log requests
Handle global errors like 401/404
```ts
authFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";

    console.log("Request sent:", request.method?.toUpperCase(), request.url);
    return request; // must return the request
  },
  (error) => Promise.reject(error), // Keep the promise in a rejected state so the caller's catch/try-catch still runs.
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);
    return response;
  },

// Error handler for the response interceptor.
// This runs when Axios gets a non-2xx response (like 404/401/500) or a network failure.
// `error.response` (when it exists) contains the server response details: status, headers, data, etc.
```ts
  (error) => {
    console.log("Response error:", error.response);
```

  // Example: handle "Not Found" globally in one place.
  // Useful for showing a toast, redirecting to a 404 page, or tracking broken links.

  if (error.response?.status === 404) {
    console.log('NOT FOUND');
    // you could redirect, show toast, etc.
  }

  // Example: if it's 401 (Unauthorized), you usually log the user out / clear the token.
  // if (error.response?.status === 401) logoutUser();

  // IMPORTANT:
  // `Promise.reject(error)` re-throws the error as a rejected promise.
  // That means the calling code still sees this request as "failed" and its `.catch(...)`
  // (or try/catch around `await`) will run. Without rejecting, Axios would treat it like a success.
  return Promise.reject(error);
  }
);
```