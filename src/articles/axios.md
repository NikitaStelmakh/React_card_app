Axios — Main Concepts
Axios is a JavaScript library used to make HTTP requests.

It allows applications to communicate with servers and APIs over HTTP.

For example, an application can use Axios to:

GET    → receive data
POST   → create data
PUT    → replace data
PATCH  → update data
DELETE → remove data

A typical application can communicate with a backend like this:

Frontend
    ↓
Axios
    ↓
HTTP request
    ↓
Backend API
    ↓
HTTP response
    ↓
Axios
    ↓
Frontend

For example:

const response = await axios.get(
  "https://api.example.com/users"
);

The browser sends an HTTP request to the server.

The server processes the request and returns a response.

Axios makes it easier to work with this process from JavaScript or TypeScript.

What is Axios?
Axios is a promise-based HTTP client for JavaScript.

It can be used in:

Browser applications
Node.js applications
React applications
Vue applications
Next.js applications
TypeScript applications

The main purpose of Axios is to make HTTP communication easier.

For example:

const response = await axios.get(
  "/api/users"
);

Instead of manually working with lower-level HTTP APIs, Axios provides a convenient interface for:

requests
responses
headers
query parameters
request bodies
errors
timeouts
interceptors
authentication
request configuration

Why use Axios?
JavaScript already provides the fetch() API.

For example:

const response = await fetch(
  "/api/users"
);

const data = await response.json();

Axios provides a different API:

const response = await axios.get(
  "/api/users"
);

const data = response.data;

Axios automatically handles JSON response transformation in common cases.

It also provides features such as:

request configuration
response configuration
interceptors
timeouts
automatic request/response transformations
convenient error handling
request cancellation
custom Axios instances

The main idea is:

HTTP communication
        ↓
      Axios
        ↓
simpler application code

Installing Axios
Axios can be installed with npm:

npm install axios

With Yarn:

yarn add axios

With pnpm:

pnpm add axios

After installation, it can be imported:

import axios from "axios";

Now the application can use Axios methods.

Importing Axios
The most common import is:

import axios from "axios";

Then:

axios.get("/api/users");

or:

axios.post("/api/users");

Axios exposes methods for different HTTP operations.

The most common ones are:

axios.get()
axios.post()
axios.put()
axios.patch()
axios.delete()

HTTP methods
Axios works with standard HTTP methods.

The most commonly used methods are:

GET
POST
PUT
PATCH
DELETE

Their general meaning is:

GET
 ↓
retrieve data

POST
 ↓
create data

PUT
 ↓
replace existing data

PATCH
 ↓
partially update data

DELETE
 ↓
remove data

For example:

axios.get("/users");

retrieves users.

axios.post("/users");

creates a user.

axios.put("/users/1");

replaces a user.

axios.patch("/users/1");

partially updates a user.

axios.delete("/users/1");

deletes a user.

GET request
A GET request is used to retrieve data.

For example:

const response = await axios.get(
  "/api/users"
);

The request looks approximately like:

GET /api/users

The server returns a response.

Axios stores the response in:

response

The actual response data is usually available through:

response.data

For example:

const response = await axios.get(
  "/api/users"
);

console.log(response.data);

GET request with data
Suppose the API returns:

[
  {
    "id": 1,
    "name": "John"
  },
  {
    "id": 2,
    "name": "Anna"
  }
]

We can access it through:

const response = await axios.get(
  "/api/users"
);

console.log(response.data);

The flow is:

HTTP response
      ↓
Axios response object
      ↓
response.data
      ↓
actual API data

POST request
POST is commonly used to create a resource.

For example:

const response = await axios.post(
  "/api/users",
  {
    name: "John",
    email: "john@example.com",
  }
);

The first argument is the URL:

/api/users

The second argument is the request body:

{
  name: "John",
  email: "john@example.com"
}

The flow is:

JavaScript object
      ↓
Axios
      ↓
HTTP request body
      ↓
API

PUT request
PUT is commonly used to replace an existing resource.

For example:

const response = await axios.put(
  "/api/users/1",
  {
    name: "John",
    email: "john@example.com",
  }
);

The request contains:

URL
 ↓
/api/users/1

Method
 ↓
PUT

Body
 ↓
user data

PUT semantics depend on the API.

A backend may interpret PUT as replacing the entire resource.

PATCH request
PATCH is commonly used for a partial update.

For example:

const response = await axios.patch(
  "/api/users/1",
  {
    name: "Anna",
  }
);

Only the provided property is being changed:

name
 ↓
updated

email
 ↓
not included in request

PATCH is useful when we do not want to send the complete resource.

DELETE request
DELETE is used to remove a resource.

For example:

const response = await axios.delete(
  "/api/users/1"
);

The request is approximately:

DELETE /api/users/1

The server decides what deleting the resource means.

Axios response
When Axios receives a response, it returns an object containing information about the HTTP response.

For example:

const response = await axios.get(
  "/api/users"
);

The response contains properties such as:

data
status
statusText
headers
config
request

The most commonly used property is:

response.data

response.data
response.data contains the data returned by the server.

For example, if the API returns:

{
  "id": 1,
  "name": "John"
}

then:

const response = await axios.get(
  "/api/user/1"
);

console.log(response.data);

produces the API data:

{
  id: 1,
  name: "John"
}

The mental model is:

Axios response
      ↓
response.data
      ↓
server data

response.status
response.status contains the HTTP status code.

For example:

const response = await axios.get(
  "/api/users"
);

console.log(response.status);

A successful response might have:

200

Common HTTP status codes include:

200 → OK
201 → Created
204 → No Content
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Internal Server Error

Axios normally resolves the promise for successful HTTP status codes and rejects it for statuses outside its configured success range.

response.statusText
Axios also exposes:

response.statusText

For example:

console.log(
  response.statusText
);

A successful response may contain:

OK

The exact value can depend on the environment and server.

Applications usually rely more heavily on:

response.status

than on statusText.

response.headers
Response headers are available through:

response.headers

For example:

const response = await axios.get(
  "/api/users"
);

console.log(response.headers);

Headers contain metadata about the HTTP response.

Examples include:

content-type
cache-control
etag
authorization-related metadata

The exact headers depend on the server.

Request headers
Headers can also be sent with a request.

For example:

const response = await axios.get(
  "/api/users",
  {
    headers: {
      Authorization:
        "Bearer token",
    },
  }
);

The configuration object contains:

{
  headers: {
    Authorization: "Bearer token"
  }
}

The server receives the header as part of the HTTP request.

Content-Type
The Content-Type header describes the format of the request body.

For JSON:

Content-Type: application/json

For example:

await axios.post(
  "/api/users",
  {
    name: "John",
  },
  {
    headers: {
      "Content-Type":
        "application/json",
    },
  }
);

Axios commonly handles JSON request data automatically.

Therefore, manually specifying this header is often unnecessary when sending a normal JavaScript object.

Request configuration
Axios methods can receive a configuration object.

For example:

axios.get(
  "/api/users",
  {
    timeout: 5000,
    headers: {
      Authorization:
        "Bearer token",
    },
  }
);

The configuration controls how the request should be performed.

Common options include:

baseURL
headers
params
data
timeout
withCredentials
responseType
signal

URL
The first argument usually specifies the request URL.

For example:

axios.get(
  "/api/users"
);

Or:

axios.get(
  "https://api.example.com/users"
);

The URL can be:

relative
absolute

A relative URL:

/api/users

An absolute URL:

https://api.example.com/users

baseURL
Axios can define a base URL.

For example:

const api = axios.create({
  baseURL:
    "https://api.example.com",
});

Now we can write:

api.get("/users");

instead of:

axios.get(
  "https://api.example.com/users"
);

The resulting URL is based on:

baseURL
 +
request URL

This is useful when many requests use the same API server.

Axios instance
An Axios instance is a configured Axios client.

For example:

const api = axios.create({
  baseURL: "/api",
});

Now:

api.get("/users");

uses:

/api/users

The instance can contain shared configuration.

For example:

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type":
      "application/json",
  },
});

The mental model is:

axios
  ↓
general HTTP client

api
  ↓
configured Axios instance

Why use Axios instances?
Instances are useful when an application has a common API configuration.

For example:

const api = axios.create({
  baseURL: "https://api.example.com",
});

Then all requests can use:

api.get("/users");
api.get("/posts");
api.post("/users");
api.delete("/users/1");

Instead of repeatedly specifying:

https://api.example.com

This makes API code more consistent.

Query parameters
Query parameters are values added to the URL.

For example:

/users?page=2

The query parameter is:

page=2

Axios allows us to specify query parameters through params.

For example:

axios.get(
  "/users",
  {
    params: {
      page: 2,
    },
  }
);

Axios constructs a URL similar to:

/users?page=2

Multiple query parameters
For example:

axios.get(
  "/users",
  {
    params: {
      page: 2,
      limit: 20,
      search: "john",
    },
  }
);

The resulting URL is conceptually:

/users
  ?page=2
  &limit=20
  &search=john

The exact serialization can depend on Axios configuration.

Query parameters vs request body
Query parameters:

axios.get(
  "/users",
  {
    params: {
      page: 2,
    },
  }
);

are part of the URL.

Request body:

axios.post(
  "/users",
  {
    name: "John",
  }
);

is part of the HTTP request body.

The difference is:

params
 ↓
URL

data/body
 ↓
request body

params
The params option is used for URL query parameters.

For example:

const response =
  await axios.get("/products", {
    params: {
      category: "books",
      page: 2,
    },
  });

This produces a request conceptually similar to:

GET /products?category=books&page=2

data
The data option represents the request body.

For example:

await axios.post(
  "/users",
  {
    name: "John",
  }
);

is conceptually equivalent to providing:

await axios.post(
  "/users",
  {
    data: {
      name: "John",
    },
  }
);

when using the configuration form.

The request body is commonly used with:

POST
PUT
PATCH

POST with configuration object
Axios also supports a configuration-based form.

For example:

axios.post(
  "/users",
  {
    name: "John",
  },
  {
    headers: {
      Authorization:
        "Bearer token",
    },
  }
);

The arguments are:

1. URL
2. request body
3. configuration

This is a common Axios pattern.

GET with configuration
GET requests generally do not use a request body.

Instead, configuration can be passed as the second argument:

axios.get(
  "/users",
  {
    params: {
      page: 2,
    },
    headers: {
      Authorization:
        "Bearer token",
    },
  }
);

The structure is:

URL
 ↓
/users

configuration
 ↓
params
headers

Async and await
Axios methods return promises.

For example:

const promise =
  axios.get("/users");

Because it returns a promise, we can use:

await

inside an async function.

For example:

async function getUsers() {
  const response =
    await axios.get("/users");

  return response.data;
}

The flow is:

axios.get()
    ↓
Promise
    ↓
await
    ↓
AxiosResponse
    ↓
response.data

Promise syntax
Axios can also be used with .then().

For example:

axios.get("/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

This is equivalent in concept to using:

async/await

The two common styles are:

async / await

or

then / catch

Modern application code often uses async/await because it can make asynchronous flows easier to read.

Error handling
Axios rejects the promise when a request fails according to its configured validation rules.

A common pattern is:

try {
  const response =
    await axios.get("/users");

  console.log(response.data);
} catch (error) {
  console.error(error);
}

The flow is:

request
   ↓
success ──→ response
   ↓
failure
   ↓
catch

AxiosError
Axios provides an error type called:

AxiosError

It can be imported:

import axios, {
  AxiosError,
} from "axios";

Then:

try {
  await axios.get("/users");
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(
      error.message
    );
  }
}

axios.isAxiosError() helps determine whether an unknown value is an Axios error.

error.response
When the server responds with an HTTP error status, Axios errors can contain:

error.response

For example:

try {
  await axios.get("/users");
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(
      error.response?.status
    );
  }
}

This can be useful for handling:

401
403
404
422
500

and other HTTP responses.

error.response.data
The server may also send error information in the response body.

For example:

try {
  await axios.post("/users", {
    name: "",
  });
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(
      error.response?.data
    );
  }
}

The API might return:

{
  "message": "Name is required"
}

Then:

error.response?.data

contains that data.

error.request
An Axios error can also contain:

error.request

This can indicate that the request was made but no response was received.

For example:

try {
  await axios.get("/users");
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (error.request) {
      console.log(
        "No response received"
      );
    }
  }
}

This can occur because of network-related problems.

error.message
Axios errors also contain a message:

error.message

For example:

catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(
      error.message
    );
  }
}

The message can provide additional information about what went wrong.

Error handling mental model
A useful model is:

Request
   ↓
Did the request succeed?
   ↓
YES ──→ response
          ↓
       response.data

NO
 ↓
AxiosError
 ↓
 ├── error.response
 │
 ├── error.request
 │
 └── error.message

This helps separate different failure situations.

HTTP errors vs network errors
There is an important distinction between:

HTTP error

and:

network error

For example:

404

means the server responded with an HTTP status.

The request reached a server.

A network problem may mean:

no response

For example:

server unavailable
connection problem
request blocked
timeout

Axios error handling can distinguish these situations through properties such as:

error.response
error.request
error.message

Timeout
Axios can be configured with a timeout.

For example:

const api = axios.create({
  timeout: 5000,
});

This means the request is given a configured amount of time before Axios treats it as timed out.

Another example:

axios.get(
  "/users",
  {
    timeout: 5000,
  }
);

The value is specified in milliseconds.

5000 ms
 ↓
5 seconds

Why use timeouts?
Without an appropriate timeout strategy, an application may wait too long for a response.

A timeout can help the application detect requests that are taking longer than expected.

The conceptual flow is:

Request
   ↓
Waiting for response
   ↓
Response arrives
   OR
Timeout occurs

Timeout values should be chosen according to the application's requirements.

Request cancellation
Axios supports request cancellation through the standard AbortController API.

For example:

const controller =
  new AbortController();

axios.get(
  "/users",
  {
    signal:
      controller.signal,
  }
);

The request can be cancelled:

controller.abort();

The flow is:

AbortController
      ↓
signal
      ↓
Axios request
      ↓
abort()
      ↓
request cancelled

Cancellation in React
Cancellation can be useful when a React component starts a request and the component is later removed.

For example:

useEffect(() => {
  const controller =
    new AbortController();

  axios.get("/users", {
    signal:
      controller.signal,
  });

  return () => {
    controller.abort();
  };
}, []);

The cleanup function can cancel the request.

This can help avoid continuing work for a component that is no longer mounted.

Authentication headers
A common API pattern is token-based authentication.

For example:

const token =
  "example-token";

const response =
  await axios.get("/users", {
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  });

The resulting HTTP header is conceptually:

Authorization: Bearer example-token

The exact authentication mechanism depends on the API.

Bearer token
A common authentication format is:

Authorization: Bearer <token>

For example:

headers: {
  Authorization:
    `Bearer ${token}`,
}

The token can be supplied to the server with every authenticated request.

In real applications, token storage and security require careful consideration.

Default headers
An Axios instance can define headers that apply to its requests.

For example:

const api = axios.create({
  baseURL: "/api",
  headers: {
    Authorization:
      `Bearer ${token}`,
  },
});

Then:

api.get("/users");
api.get("/posts");

can use the shared configuration.

This avoids repeating the same header in every request.

Global Axios defaults
Axios also provides global defaults.

For example:

axios.defaults.baseURL =
  "/api";

Then:

axios.get("/users");

uses the configured base URL.

However, in larger applications, dedicated Axios instances are often easier to manage because configuration can be isolated by API or service.

Axios instances for different APIs
An application may communicate with multiple APIs.

For example:

const usersApi = axios.create({
  baseURL:
    "https://users.example.com",
});

const paymentsApi = axios.create({
  baseURL:
    "https://payments.example.com",
});

Now:

usersApi.get("/users");

uses the users API.

And:

paymentsApi.get("/payments");

uses the payments API.

The mental model is:

Axios
 ├── usersApi
 │      ↓
 │   Users server
 │
 └── paymentsApi
        ↓
     Payments server

Interceptors
Interceptors allow code to run before a request is sent or after a response is received.

There are two main types:

request interceptors
response interceptors

The flow is:

Application
    ↓
Request interceptor
    ↓
Axios request
    ↓
Server
    ↓
Axios response
    ↓
Response interceptor
    ↓
Application

Request interceptor
A request interceptor can modify a request before it is sent.

For example:

api.interceptors.request.use(
  (config) => {
    console.log(
      "Request:",
      config.url
    );

    return config;
  }
);

The interceptor must return the configuration so Axios can continue the request.

Adding an authorization token with an interceptor
A common pattern is:

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

Now the token can be added automatically to requests made through the instance.

The flow becomes:

api.get("/users")
      ↓
request interceptor
      ↓
add Authorization header
      ↓
send request

The exact token storage strategy depends on the application's security architecture.

Response interceptor
A response interceptor runs when a response is received.

For example:

api.interceptors.response.use(
  (response) => {
    return response;
  }
);

It can also handle errors:

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

This creates a centralized place for response processing.

Response interceptor for 401
A common pattern is detecting an unauthorized response.

For example:

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401
    ) {
      console.log(
        "Unauthorized"
      );
    }

    return Promise.reject(error);
  }
);

The application can then perform appropriate authentication-related handling.

Interceptor IDs
When an interceptor is added, Axios returns an identifier.

For example:

const interceptorId =
  api.interceptors.request.use(
    (config) => {
      return config;
    }
  );

The interceptor can later be removed:

api.interceptors.request.eject(
  interceptorId
);

This can be useful when interceptors are dynamically registered.

Transforming request data
Axios can transform request data before sending it.

For example:

axios.post(
  "/users",
  {
    name: "John",
  }
);

Axios handles common serialization cases automatically.

For JSON APIs, the JavaScript object is typically serialized into JSON.

Conceptually:

JavaScript object
      ↓
Axios
      ↓
JSON request body
      ↓
HTTP

Transforming response data
Axios can also transform response data.

For common JSON responses, Axios handles JSON parsing automatically.

For example:

const response =
  await axios.get("/users");

const users =
  response.data;

The application can work with JavaScript values rather than manually calling:

JSON.parse(...)

for normal JSON responses.

responseType
Axios allows the expected response type to be configured.

For example:

const response =
  await axios.get(
    "/file",
    {
      responseType: "blob",
    }
  );

Common response types include:

json
text
blob
arraybuffer
document
stream

The available behavior can depend on the environment.

For browser applications, blob is commonly used when downloading files.

Downloading a file
For example:

const response =
  await axios.get(
    "/report.pdf",
    {
      responseType: "blob",
    }
  );

The response data can then be used as a browser Blob.

For example:

const url =
  URL.createObjectURL(
    response.data
  );

The browser can use the generated URL to download or display the file.

Uploading a file
Axios can send FormData.

For example:

const formData =
  new FormData();

formData.append(
  "file",
  file
);

await axios.post(
  "/upload",
  formData
);

This is commonly used for file uploads.

The flow is:

File
 ↓
FormData
 ↓
Axios
 ↓
multipart/form-data
 ↓
Server

Uploading additional fields
A FormData object can contain multiple fields.

For example:

const formData =
  new FormData();

formData.append(
  "file",
  file
);

formData.append(
  "description",
  "Profile image"
);

await axios.post(
  "/upload",
  formData
);

The server receives the multipart form data.

FormData and Content-Type
When sending FormData in a browser, it is generally preferable to let the browser/Axios handle the multipart Content-Type details rather than manually constructing the boundary.

For example:

await axios.post(
  "/upload",
  formData
);

is usually enough.

The browser can generate the appropriate multipart boundary.

URL encoding
Some APIs expect form data using:

application/x-www-form-urlencoded

Axios can be configured to send data in the required format.

The exact serialization depends on the API contract.

The important distinction is:

application/json
        ↓
JSON body

multipart/form-data
        ↓
files + form fields

application/x-www-form-urlencoded
        ↓
URL-encoded form fields

Cookies
Axios can work with cookies.

For cross-origin requests, the browser's cookie behavior is controlled by the withCredentials option and server-side CORS configuration.

For example:

axios.get(
  "https://api.example.com/user",
  {
    withCredentials: true,
  }
);

This tells Axios/browser to include credentials according to browser rules.

The server must also be configured appropriately.

withCredentials
For example:

const api = axios.create({
  baseURL:
    "https://api.example.com",
  withCredentials: true,
});

This is commonly relevant when authentication uses cookies across origins.

The browser and server must agree on the required CORS and cookie settings.

CORS
CORS stands for:

Cross-Origin Resource Sharing

It is a browser security mechanism.

For example:

Frontend
https://app.example.com

        ↓

API
https://api.example.com

These are different origins.

The API must provide appropriate CORS headers for the browser to allow the frontend to access the response.

Axios does not remove browser CORS restrictions.

The server must be configured correctly.

Axios and CORS
If the browser blocks a request because of CORS, changing Axios syntax usually does not solve the underlying problem.

The flow is:

Browser
   ↓
Axios
   ↓
HTTP request
   ↓
Server
   ↓
CORS headers
   ↓
Browser decides whether access is allowed

CORS is primarily a browser/server configuration issue.

TypeScript with Axios
Axios has TypeScript support.

We can specify the expected response data type.

For example:

type User = {
  id: number;
  name: string;
  email: string;
};

Then:

const response =
  await axios.get<User>(
    "/api/user/1"
  );

Now TypeScript knows that:

response.data

is expected to have type:

User

Axios generic response type
The generic:

axios.get<User>()

describes the expected response data.

For example:

const response =
  await axios.get<User>(
    "/api/user/1"
  );

console.log(
  response.data.name
);

TypeScript knows:

response.data
        ↓
User
        ↓
id
name
email

Axios GET with an array
Suppose the API returns users:

type User = {
  id: number;
  name: string;
};

We can write:

const response =
  await axios.get<User[]>(
    "/api/users"
  );

Now:

response.data

is typed as:

User[]

Therefore:

response.data.map(
  (user) => user.name
);

is type-safe.

Axios POST with TypeScript
Suppose:

type CreateUserRequest = {
  name: string;
  email: string;
};

We can send:

const userData:
  CreateUserRequest = {
    name: "John",
    email: "john@example.com",
  };

const response =
  await axios.post<User>(
    "/api/users",
    userData
  );

Here:

CreateUserRequest
 ↓
request body

User
 ↓
response data

Request type and response type
A useful pattern is to define separate types for requests and responses.

For example:

type CreateUserRequest = {
  name: string;
  email: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

Then:

const response =
  await axios.post<User>(
    "/api/users",
    {
      name: "John",
      email: "john@example.com",
    }
  );

The request and response have different purposes.

CreateUserRequest
        ↓
data sent to server

User
        ↓
data returned by server

API response wrapper
Many APIs return a wrapper around the actual data.

For example:

{
  "data": {
    "id": 1,
    "name": "John"
  },
  "success": true
}

We can represent it with a generic:

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

Then:

const response =
  await axios.get<
    ApiResponse<User>
  >("/api/user/1");

Now:

response.data
        ↓
ApiResponse<User>

response.data.data
        ↓
User

Generic API response
A common pattern is:

type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

Now it can be reused:

type UserResponse =
  ApiResponse<User>;

or:

type UsersResponse =
  ApiResponse<User[]>;

The generic allows the same response structure to work with different data.

AxiosResponse
Axios provides a type called:

AxiosResponse

It represents the response returned by Axios.

For example:

import type {
  AxiosResponse,
} from "axios";

A function can explicitly return an Axios response:

async function getUser():
  Promise<AxiosResponse<User>> {
  return axios.get<User>(
    "/api/user/1"
  );
}

In many cases, however, it is simpler to return only:

response.data

Returning response.data
Instead of:

async function getUser() {
  const response =
    await axios.get<User>(
      "/api/user/1"
    );

  return response;
}

we can write:

async function getUser():
  Promise<User> {
  const response =
    await axios.get<User>(
      "/api/user/1"
    );

  return response.data;
}

Now callers receive the actual user rather than the entire Axios response.

This can simplify service functions.

API service functions
Instead of calling Axios directly throughout React components, we can create API functions.

For example:

type User = {
  id: number;
  name: string;
};

export async function getUsers():
  Promise<User[]> {
  const response =
    await axios.get<User[]>(
      "/api/users"
    );

  return response.data;
}

Then a component can call:

const users =
  await getUsers();

The architecture becomes:

React component
      ↓
API function
      ↓
Axios
      ↓
Backend

This separates UI code from HTTP details.

API service example
For example:

const api = axios.create({
  baseURL: "/api",
});

export async function getUsers():
  Promise<User[]> {
  const response =
    await api.get<User[]>(
      "/users"
    );

  return response.data;
}

export async function getUser(
  id: number
): Promise<User> {
  const response =
    await api.get<User>(
      `/users/${id}`
    );

  return response.data;
}

Now components do not need to know the exact API URL.

Creating a dedicated API client
A common project structure is:

src/
  api/
    client.ts
    users.ts
    posts.ts

For example:

// client.ts

import axios from "axios";

export const api =
  axios.create({
    baseURL: "/api",
    timeout: 5000,
  });

Then:

// users.ts

import { api } from "./client";

export async function getUsers() {
  const response =
    await api.get("/users");

  return response.data;
}

The shared client contains common configuration.

Axios in React
Axios is frequently used inside React applications.

For example:

import { useEffect } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    async function loadUsers() {
      const response =
        await axios.get(
          "/api/users"
        );

      console.log(
        response.data
      );
    }

    loadUsers();
  }, []);

  return <div>Users</div>;
}

The component starts the request when it mounts.

Axios with useState
A common React pattern is:

const [users, setUsers] =
  useState<User[]>([]);

useEffect(() => {
  async function loadUsers() {
    const response =
      await axios.get<User[]>(
        "/api/users"
      );

    setUsers(response.data);
  }

  loadUsers();
}, []);

The flow is:

Component mounts
      ↓
useEffect
      ↓
Axios request
      ↓
API response
      ↓
response.data
      ↓
setUsers()
      ↓
React re-render

Loading state
An API request usually needs a loading state.

For example:

const [users, setUsers] =
  useState<User[]>([]);

const [loading, setLoading] =
  useState(false);

Then:

useEffect(() => {
  async function loadUsers() {
    setLoading(true);

    try {
      const response =
        await axios.get<User[]>(
          "/api/users"
        );

      setUsers(response.data);
    } finally {
      setLoading(false);
    }
  }

  loadUsers();
}, []);

The state represents:

loading = true
    ↓
request in progress

loading = false
    ↓
request finished

Error state in React
A component can also store an error.

For example:

const [error, setError] =
  useState<string | null>(null);

Then:

try {
  const response =
    await axios.get<User[]>(
      "/api/users"
    );

  setUsers(response.data);
} catch (error) {
  setError(
    "Failed to load users"
  );
}

The state can be:

string
OR
null

Complete React request example
For example:

type User = {
  id: number;
  name: string;
};

function Users() {
  const [users, setUsers] =
    useState<User[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      setError(null);

      try {
        const response =
          await axios.get<User[]>(
            "/api/users"
          );

        setUsers(response.data);
      } catch {
        setError(
          "Failed to load users"
        );
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

The complete flow is:

React component
      ↓
useEffect
      ↓
Axios
      ↓
API
      ↓
response
      ↓
setUsers()
      ↓
render data

Axios request with a dynamic URL
An API often uses IDs in URLs.

For example:

const userId = 10;

const response =
  await axios.get<User>(
    `/api/users/${userId}`
  );

The resulting URL is:

/api/users/10

This pattern is commonly used for:

/users/:id
/posts/:id
/products/:id
/orders/:id

Creating a user
For example:

type CreateUserRequest = {
  name: string;
  email: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

async function createUser(
  data: CreateUserRequest
): Promise<User> {
  const response =
    await axios.post<User>(
      "/api/users",
      data
    );

  return response.data;
}

Then:

const user =
  await createUser({
    name: "John",
    email: "john@example.com",
  });

Updating a user
For example:

type UpdateUserRequest = {
  name?: string;
  email?: string;
};

async function updateUser(
  id: number,
  data: UpdateUserRequest
): Promise<User> {
  const response =
    await axios.patch<User>(
      `/api/users/${id}`,
      data
    );

  return response.data;
}

Usage:

await updateUser(1, {
  name: "Anna",
});

Deleting a user
For example:

async function deleteUser(
  id: number
): Promise<void> {
  await axios.delete(
    `/api/users/${id}`
  );
}

Usage:

await deleteUser(1);

The API decides what response is returned after deletion.

CRUD with Axios
CRUD stands for:

Create
Read
Update
Delete

A typical Axios API looks like:

CREATE
 ↓
POST

READ
 ↓
GET

UPDATE
 ↓
PUT / PATCH

DELETE
 ↓
DELETE

For users:

axios.post("/users");

axios.get("/users");

axios.patch("/users/1");

axios.delete("/users/1");

This forms the foundation of many REST-style APIs.

REST API
Axios is commonly used with REST APIs.

For example:

GET    /users
GET    /users/1

POST   /users

PUT    /users/1
PATCH  /users/1

DELETE /users/1

The HTTP method and URL together describe the requested operation.

Axios is responsible for making the HTTP request.

The backend is responsible for implementing the API behavior.

REST API with TypeScript
For example:

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers():
  Promise<User[]> {
  const response =
    await axios.get<User[]>(
      "/users"
    );

  return response.data;
}

async function getUser(
  id: number
): Promise<User> {
  const response =
    await axios.get<User>(
      `/users/${id}`
    );

  return response.data;
}

Now the API layer is strongly typed.

Axios configuration object
Axios requests can be expressed using a configuration object.

For example:

axios({
  method: "GET",
  url: "/users",
  params: {
    page: 1,
  },
});

This is another way to make a request.

The configuration contains:

method
url
params
headers
data
timeout

and other options.

Axios shorthand methods
Instead of:

axios({
  method: "GET",
  url: "/users",
});

we can use:

axios.get(
  "/users"
);

Instead of:

axios({
  method: "POST",
  url: "/users",
  data: {
    name: "John",
  },
});

we can use:

axios.post(
  "/users",
  {
    name: "John",
  }
);

The shorthand methods are usually easier to read.

Common Axios method signatures
GET:

axios.get(
  url,
  config
);

POST:

axios.post(
  url,
  data,
  config
);

PUT:

axios.put(
  url,
  data,
  config
);

PATCH:

axios.patch(
  url,
  data,
  config
);

DELETE:

axios.delete(
  url,
  config
);

The exact overloads and available options are provided by Axios's TypeScript definitions.

Request configuration mental model
A request can be viewed as:

axios.get(
  URL,
  {
    params,
    headers,
    timeout,
    signal,
  }
);

Or for a POST:

axios.post(
  URL,
  data,
  {
    params,
    headers,
    timeout,
    signal,
  }
);

The mental model is:

URL
 ↓
Where to send the request

params
 ↓
What goes into the URL

data
 ↓
What goes into the request body

headers
 ↓
Metadata about the request

timeout
 ↓
Maximum waiting time

signal
 ↓
Cancellation

Default configuration
An Axios instance can contain defaults.

For example:

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

Every request through api starts with this configuration.

For example:

api.get("/users");

is based on:

baseURL = /api
timeout = 5000
url = /users

Configuration hierarchy
Axios supports configuration at different levels.

Conceptually:

Global defaults
      ↓
Instance defaults
      ↓
Request configuration

A more specific configuration can override a more general configuration.

For example:

const api = axios.create({
  timeout: 5000,
});

A particular request can specify:

api.get(
  "/users",
  {
    timeout: 10000,
  }
);

The request-specific value can override the instance default.

Custom API client
A common production pattern is:

import axios from "axios";

export const api =
  axios.create({
    baseURL:
      import.meta.env.VITE_API_URL,
    timeout: 10000,
  });

Then:

import { api }
  from "./api";

const response =
  await api.get("/users");

This keeps API configuration in one place.

Environment variables
Applications often store API URLs in environment variables.

For example:

API_URL

or a framework-specific variable.

Conceptually:

Development
    ↓
http://localhost:3000

Production
    ↓
https://api.example.com

The Axios client can use the appropriate URL depending on the environment.

The exact environment variable syntax depends on the framework or build tool.

Axios and TypeScript environment configuration
For example, an application might define:

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL,
});

Then:

api.get("/users");

uses the configured API URL.

The important idea is:

Environment
    ↓
API URL
    ↓
Axios instance
    ↓
API requests

Axios defaults and API design
A useful API client can centralize:

baseURL
timeout
authentication
headers
interceptors
error handling

For example:

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

Then:

components
    ↓
service functions
    ↓
api instance
    ↓
backend

This avoids scattering HTTP configuration throughout the application.

Avoiding Axios directly in every component
Instead of:

function Users() {
  useEffect(() => {
    axios.get("/api/users");
  }, []);

  return <div />;
}

a larger application can use:

async function getUsers() {
  const response =
    await api.get<User[]>(
      "/users"
    );

  return response.data;
}

Then:

function Users() {
  useEffect(() => {
    getUsers();
  }, []);

  return <div />;
}

The component focuses on UI.

The API layer focuses on HTTP communication.

API layer architecture
A useful structure is:

React component
      ↓
Custom hook
      ↓
Service function
      ↓
Axios instance
      ↓
Backend API

For example:

Users.tsx
   ↓
useUsers()
   ↓
getUsers()
   ↓
api.get("/users")
   ↓
Backend

This separation can make larger applications easier to maintain.

Axios with custom hooks
For example:

function useUsers() {
  const [users, setUsers] =
    useState<User[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    users,
    loading,
  };
}

The HTTP logic can stay inside:

getUsers()

while the hook manages React state.

Retry logic
Axios itself provides the HTTP client functionality, but retry behavior is commonly implemented separately or through additional tooling.

Conceptually:

Request
   ↓
Fails
   ↓
Retry?
   ↓
YES
   ↓
Request again

Retries should be designed carefully.

For example, automatically retrying a GET request may be different from automatically retrying a request that creates a resource.

Idempotency
When designing retry behavior, HTTP method semantics matter.

For example:

GET

is generally intended to retrieve data without creating a new resource.

A:

POST

may create a new resource.

Automatically retrying a POST can potentially create duplicate resources unless the API provides an idempotency mechanism.

Therefore:

Retry strategy
    ↓
depends on
    ↓
HTTP method
API behavior
idempotency
business logic

Request logging
A request interceptor can be used for logging.

For example:

api.interceptors.request.use(
  (config) => {
    console.log(
      config.method,
      config.url
    );

    return config;
  }
);

This can help during development.

For production applications, logging should be designed carefully so sensitive information such as tokens or private data is not exposed.

Response logging
A response interceptor can log responses:

api.interceptors.response.use(
  (response) => {
    console.log(
      response.status,
      response.config.url
    );

    return response;
  }
);

This can be useful for debugging API communication.

Centralized error handling
An interceptor can centralize common error behavior.

For example:

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401
    ) {
      console.log(
        "Authentication required"
      );
    }

    return Promise.reject(error);
  }
);

Then individual API calls can still handle errors when necessary.

Do not swallow errors
Suppose an interceptor catches an error:

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
  }
);

If the interceptor does not reject or otherwise handle the error appropriately, it can change how downstream code observes the failure.

A common pattern is:

return Promise.reject(error);

This preserves the error for the caller.

Error handling service function
For example:

async function getUsers():
  Promise<User[]> {
  try {
    const response =
      await api.get<User[]>(
        "/users"
      );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        error.response?.status
      );
    }

    throw error;
  }
}

The important part is:

throw error;

This allows the caller to handle the error as well.

Type-safe API errors
Suppose the server returns:

{
  "message": "Email already exists"
}

We can describe the error response:

type ApiError = {
  message: string;
};

Then:

catch (error) {
  if (axios.isAxiosError<ApiError>(
    error
  )) {
    console.log(
      error.response?.data.message
    );
  }
}

The generic tells TypeScript about the expected error response structure.

Axios and unknown data
TypeScript types describe what our application expects.

They do not automatically validate external server data.

For example:

type User = {
  id: number;
  name: string;
};

and:

axios.get<User>(
  "/users/1"
);

does not magically prove that the server actually returned a valid User.

The generic provides static typing for application code.

For runtime validation, a separate validation strategy is needed.

The mental model is:

Axios generic
    ↓
compile-time information

Runtime validation
    ↓
checks actual received data

Axios and JSON
A common API response is JSON.

For example:

{
  "id": 1,
  "name": "John"
}

Axios can parse JSON responses automatically in common cases.

Therefore:

const response =
  await axios.get<User>(
    "/users/1"
  );

const user =
  response.data;

can work directly with a JavaScript object.

Sending JSON
A JavaScript object can be sent as request data:

await axios.post(
  "/users",
  {
    name: "John",
    email: "john@example.com",
  }
);

Axios handles the normal JSON serialization process for this common use case.

The server receives the corresponding JSON representation.

URL encoding with params
Suppose:

const search = "John Smith";

We can use:

axios.get(
  "/users",
  {
    params: {
      search,
    },
  }
);

Axios handles the URL parameter serialization.

Conceptually:

search=John%20Smith

The exact encoding is handled by the HTTP client.

Arrays in query parameters
An API may accept multiple values.

For example:

axios.get(
  "/users",
  {
    params: {
      role: [
        "admin",
        "editor",
      ],
    },
  }
);

The exact generated URL format can depend on parameter serialization configuration and the API's expectations.

For example, APIs may expect formats such as:

role=admin&role=editor

or another convention.

When necessary, Axios allows custom parameter serialization.

Custom parameter serialization
If an API expects a specific query string format, the request configuration can define custom serialization behavior.

Conceptually:

axios.get(
  "/users",
  {
    params: {
      role: [
        "admin",
        "editor",
      ],
    },
    paramsSerializer: {
      // custom serialization
    },
  }
);

The exact configuration should match the Axios version and the server's expected query format.

Headers with common API metadata
An API may use headers such as:

Authorization
Content-Type
Accept

For example:

axios.get(
  "/users",
  {
    headers: {
      Authorization:
        `Bearer ${token}`,
      Accept:
        "application/json",
    },
  }
);

Headers are metadata associated with the HTTP request.

Accept header
The Accept header describes the response formats the client can accept.

For example:

headers: {
  Accept:
    "application/json",
}

This can tell the server that the client expects JSON.

The server ultimately determines how it responds according to its API implementation.

Request body vs headers
Consider:

axios.post(
  "/users",
  {
    name: "John",
  },
  {
    headers: {
      Authorization:
        "Bearer token",
    },
  }
);

There are three different parts:

URL
 ↓
/users

body
 ↓
{
  name: "John"
}

headers
 ↓
Authorization

Each serves a different purpose.

Axios instance with interceptors
A common API client can combine:

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

Then:

api.get("/users");

automatically uses the shared configuration and interceptor.

Request lifecycle
A useful way to understand Axios is to visualize the lifecycle:

Application
    ↓
axios.get()
    ↓
Request configuration
    ↓
Request interceptors
    ↓
HTTP request
    ↓
Server
    ↓
HTTP response
    ↓
Response transformation
    ↓
Response interceptors
    ↓
Promise resolves or rejects
    ↓
Application

This is the central Axios mental model.

Axios mental model
Think about Axios as a layer between your application and an HTTP API.

React / JavaScript
        ↓
      Axios
        ↓
HTTP request
        ↓
      Server
        ↓
HTTP response
        ↓
      Axios
        ↓
React / JavaScript

Axios handles many HTTP-related details.

Your application mostly works with:

request configuration
response data
errors

Axios request mental model
A request can be thought of as:

Method
  ↓
GET / POST / PUT / PATCH / DELETE

URL
  ↓
/api/users

Params
  ↓
?page=2

Headers
  ↓
Authorization
Content-Type

Body
  ↓
JSON / FormData

Configuration
  ↓
timeout
signal

Together these form an HTTP request.

Axios response mental model
A response can be thought of as:

HTTP response
      ↓
status
      ↓
headers
      ↓
data

In Axios:

response.status
response.headers
response.data

The most important property for application code is usually:

response.data

A complete Axios example
Here is a small TypeScript API client:

import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

type CreateUserRequest = {
  name: string;
  email: string;
};

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

export async function getUsers():
  Promise<User[]> {
  const response =
    await api.get<User[]>(
      "/users"
    );

  return response.data;
}

export async function getUser(
  id: number
): Promise<User> {
  const response =
    await api.get<User>(
      `/users/${id}`
    );

  return response.data;
}

export async function createUser(
  data: CreateUserRequest
): Promise<User> {
  const response =
    await api.post<User>(
      "/users",
      data
    );

  return response.data;
}

export async function deleteUser(
  id: number
): Promise<void> {
  await api.delete(
    `/users/${id}`
  );
}

The structure is:

Axios instance
      ↓
API functions
      ↓
typed request/response
      ↓
React components

A complete request flow
Suppose we call:

const user =
  await getUser(1);

The flow is:

getUser(1)
    ↓
api.get<User>("/users/1")
    ↓
Axios creates HTTP request
    ↓
GET /api/users/1
    ↓
Backend
    ↓
HTTP response
    ↓
Axios parses response
    ↓
response.data
    ↓
User
    ↓
getUser()
    ↓
user

This is the basic pattern used in many applications.

Axios vs fetch
Both Axios and fetch() can make HTTP requests.

Using fetch():

const response =
  await fetch("/users");

const data =
  await response.json();

Using Axios:

const response =
  await axios.get("/users");

const data =
  response.data;

Both approaches are valid.

Axios provides an additional abstraction with features such as:

instances
interceptors
convenient request methods
automatic JSON handling
request configuration
centralized defaults
Axios-specific error information

The choice depends on the project's requirements.

Axios vs fetch error handling
With fetch(), an HTTP 404 or 500 does not automatically reject the promise solely because of the HTTP status.

For example:

const response =
  await fetch("/users");

The developer often checks:

if (!response.ok) {
  // handle HTTP error
}

Axios normally rejects for HTTP statuses outside its configured successful status range.

Therefore:

try {
  await axios.get("/users");
} catch (error) {
  // HTTP error can arrive here
}

This is an important behavioral difference.

When Axios is useful
Axios can be particularly useful when an application needs:

many API requests
shared API configuration
authentication headers
request interceptors
response interceptors
centralized error handling
timeouts
request cancellation
typed API functions
multiple API clients

For a very small application, fetch() may be enough.

For a larger application, Axios can provide a convenient structure for HTTP communication.

Common Axios mistakes
One common mistake is forgetting:

response.data

For example:

const user =
  await axios.get<User>(
    "/users/1"
  );

Here:

user
 ↓
AxiosResponse<User>

not directly:

User

The actual user data is:

user.data

A service function can simplify this:

async function getUser():
  Promise<User> {
  const response =
    await axios.get<User>(
      "/users/1"
    );

  return response.data;
}

Another common mistake: confusing params and data
For GET:

axios.get(
  "/users",
  {
    params: {
      page: 2,
    },
  }
);

For POST:

axios.post(
  "/users",
  {
    name: "John",
  }
);

Remember:

params
 ↓
query string

data
 ↓
request body

Another common mistake: ignoring errors
This:

await axios.get(
  "/users"
);

may reject.

A production application should have an appropriate error-handling strategy.

For example:

try {
  const response =
    await axios.get<User[]>(
      "/users"
    );
} catch (error) {
  // handle error
}

The exact handling depends on the application.

Another common mistake: trusting external data
This:

axios.get<User>(
  "/users/1"
);

provides TypeScript information.

It does not validate the actual server response at runtime.

The server could theoretically return:

{
  "wrongField": true
}

while the application expects:

type User = {
  id: number;
  name: string;
};

Runtime validation is a separate concern.

Another common mistake: putting everything in components
Avoid having large components contain:

Axios configuration
authentication logic
request URLs
response transformations
error handling
UI rendering

A cleaner architecture can separate:

API client
    ↓
service functions
    ↓
custom hooks
    ↓
components

This makes responsibilities clearer.

Another common mistake: duplicating API configuration
Instead of:

axios.get(
  "https://api.example.com/users"
);

axios.get(
  "https://api.example.com/posts"
);

axios.post(
  "https://api.example.com/users"
);

use an instance:

const api = axios.create({
  baseURL:
    "https://api.example.com",
});

Then:

api.get("/users");
api.get("/posts");
api.post("/users");

The shared configuration is centralized.

Axios best practices
A practical Axios architecture can look like:

src/
  api/
    client.ts
    users.ts
    posts.ts
  hooks/
    useUsers.ts
  components/
    Users.tsx

The responsibilities can be:

client.ts
 ↓
Axios configuration

users.ts
 ↓
User API functions

posts.ts
 ↓
Post API functions

useUsers.ts
 ↓
React state and request lifecycle

Users.tsx
 ↓
UI

A recommended Axios client
A basic client might look like:

import axios from "axios";

export const api =
  axios.create({
    baseURL: "/api",
    timeout: 10000,
  });

Then API functions can import:

import { api }
  from "./client";

and use:

api.get("/users");

API functions
For example:

import { api }
  from "./client";

export async function getUsers():
  Promise<User[]> {
  const response =
    await api.get<User[]>(
      "/users"
    );

  return response.data;
}

The API function hides Axios implementation details from the rest of the application.

Service layer mental model
The service layer can provide functions such as:

getUsers()
getUser(id)
createUser(data)
updateUser(id, data)
deleteUser(id)

Instead of components knowing:

axios
HTTP methods
URLs
headers
response.data

the component can simply call:

const users =
  await getUsers();

The service layer handles HTTP communication.

Axios and authentication architecture
A typical authenticated application may look like:

Login
  ↓
API
  ↓
Authentication result
  ↓
Token / session
  ↓
Axios instance
  ↓
Request interceptor
  ↓
Authorization
  ↓
Protected API

The exact authentication mechanism depends on the backend.

Axios is only responsible for transporting the HTTP request.

Axios and refresh tokens
Some applications use short-lived access tokens and refresh tokens.

A conceptual flow is:

Request
   ↓
Access token
   ↓
API
   ↓
401
   ↓
Refresh authentication
   ↓
New access token
   ↓
Retry original request

Axios response interceptors are often used to implement centralized handling for this kind of flow.

However, refresh-token logic can become complex and must account for:

concurrent requests
failed refresh
logout
infinite retry loops
token storage
security

It should therefore be designed carefully.

Axios and request cancellation mental model
Cancellation can be represented as:

Request starts
    ↓
AbortController created
    ↓
signal passed to Axios
    ↓
Request in progress
    ↓
controller.abort()
    ↓
Axios stops the request

This is useful for operations such as:

search requests
component cleanup
navigation
long-running requests

Search requests
Suppose a user types:

J
Jo
Joh
John

The application could potentially start multiple requests:

J
 ↓
request 1

Jo
 ↓
request 2

Joh
 ↓
request 3

John
 ↓
request 4

Older requests may become unnecessary.

Request cancellation can help prevent obsolete requests from continuing.

The general pattern is:

new search
    ↓
cancel previous request
    ↓
send new request

Axios request lifecycle in React search
Conceptually:

User types
    ↓
React state changes
    ↓
Effect runs
    ↓
AbortController created
    ↓
Axios request
    ↓
User types again
    ↓
cleanup
    ↓
abort previous request
    ↓
new Axios request

This pattern is useful for search interfaces.

Axios and promises
Axios methods return promises.

For example:

const promise =
  axios.get<User>(
    "/users/1"
  );

The promise eventually becomes:

fulfilled

or:

rejected

With await:

const response =
  await axios.get<User>(
    "/users/1"
  );

the code waits for the promise to settle.

Promise flow
The general flow is:

axios.get()
     ↓
Promise
     ↓
 ┌─────────────┐
 │             │
Success      Failure
 │             │
 ↓             ↓
response      error

With:

try {
  const response =
    await axios.get("/users");
} catch (error) {
  // failure
}

we handle both paths.

Axios with async functions
A service function often looks like:

async function getUser(
  id: number
): Promise<User> {
  const response =
    await api.get<User>(
      `/users/${id}`
    );

  return response.data;
}

The function:

receives
 ↓
id: number

requests
 ↓
GET /users/:id

returns
 ↓
Promise<User>

This is a clean TypeScript API abstraction.

Full CRUD service
A complete service could look like:

type User = {
  id: number;
  name: string;
  email: string;
};

type CreateUserRequest = {
  name: string;
  email: string;
};

type UpdateUserRequest = {
  name?: string;
  email?: string;
};

export async function getUsers():
  Promise<User[]> {
  const response =
    await api.get<User[]>(
      "/users"
    );

  return response.data;
}

export async function getUser(
  id: number
): Promise<User> {
  const response =
    await api.get<User>(
      `/users/${id}`
    );

  return response.data;
}

export async function createUser(
  data: CreateUserRequest
): Promise<User> {
  const response =
    await api.post<User>(
      "/users",
      data
    );

  return response.data;
}

export async function updateUser(
  id: number,
  data: UpdateUserRequest
): Promise<User> {
  const response =
    await api.patch<User>(
      `/users/${id}`,
      data
    );

  return response.data;
}

export async function deleteUser(
  id: number
): Promise<void> {
  await api.delete(
    `/users/${id}`
  );
}

This provides a complete CRUD API layer.

Axios and TypeScript mental model
A useful mental model is:

Axios
  ↓
HTTP client

Axios instance
  ↓
configured HTTP client

Request
  ↓
method + URL + params + headers + body

Response
  ↓
status + headers + data

AxiosError
  ↓
response + request + message

Generic
  ↓
describes expected response data

Interceptor
  ↓
runs before requests or after responses

API service
  ↓
hides HTTP implementation from UI

Axios in a React + TypeScript application
A common architecture looks like:

React
   ↓
Custom hook
   ↓
API service
   ↓
Axios instance
   ↓
Interceptor
   ↓
HTTP request
   ↓
Backend

For example:

Users.tsx
    ↓
useUsers()
    ↓
getUsers()
    ↓
api.get<User[]>("/users")
    ↓
GET /api/users
    ↓
Backend
    ↓
User[]
    ↓
React state
    ↓
UI

This separation keeps the application organized.

The main Axios concepts
The most important Axios concepts can be summarized as:

HTTP client
    ↓
Axios

HTTP methods
    ↓
GET
POST
PUT
PATCH
DELETE

Request configuration
    ↓
URL
params
headers
data
timeout
signal

Response
    ↓
data
status
headers

Error handling
    ↓
AxiosError
response
request
message

Configuration
    ↓
baseURL
defaults
instances

Interceptors
    ↓
request
response

TypeScript
    ↓
generics
AxiosResponse
typed API functions

React
    ↓
useEffect
useState
custom hooks
API services

Axios mental model
The most important idea is:

Your application
      ↓
     Axios
      ↓
HTTP Request
      ↓
    Backend
      ↓
HTTP Response
      ↓
     Axios
      ↓
Your application

A request contains:

method
URL
params
headers
body

A response contains:

status
headers
data

Axios provides a convenient abstraction for working with these HTTP concepts.

Final Axios example
A complete example can combine the main concepts:

import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

type CreateUserRequest = {
  name: string;
  email: string;
};

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export async function getUsers():
  Promise<User[]> {
  const response =
    await api.get<User[]>(
      "/users"
    );

  return response.data;
}

export async function getUser(
  id: number
): Promise<User> {
  const response =
    await api.get<User>(
      `/users/${id}`
    );

  return response.data;
}

export async function createUser(
  data: CreateUserRequest
): Promise<User> {
  const response =
    await api.post<User>(
      "/users",
      data
    );

  return response.data;
}

export async function deleteUser(
  id: number
): Promise<void> {
  await api.delete(
    `/users/${id}`
  );
}

The complete architecture is:

Axios
  ↓
Axios instance
  ↓
baseURL
timeout
interceptors
  ↓
API service functions
  ↓
typed requests
  ↓
typed responses
  ↓
React components

The core idea is:

Axios
    ↓
makes HTTP communication easier

Axios instance
    ↓
stores shared configuration

Request
    ↓
sends data to the server

Response
    ↓
receives data from the server

Interceptors
    ↓
process requests and responses globally

Generics
    ↓
describe expected response types

API services
    ↓
separate HTTP logic from UI

These concepts form the foundation of using Axios in JavaScript, TypeScript, React, and other modern web applications.


