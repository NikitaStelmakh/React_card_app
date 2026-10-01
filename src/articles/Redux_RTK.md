# Redux and Redux Toolkit — Main Methods

Redux is a state management library for JavaScript applications. It provides a predictable way to store, update, and access application state.

Redux is especially useful when many components need to access or modify the same data.

Redux Toolkit (RTK) is the official recommended way to write Redux logic. It provides functions that simplify common Redux tasks and reduce the amount of boilerplate code.

---

## What is Redux?

Redux stores application state in a central store.

Instead of keeping shared data inside individual React components, the data can be stored in the Redux store and accessed by different components.

A simplified Redux flow looks like this:

```text
Component
    ↓
dispatch(action)
    ↓
Reducer
    ↓
Store
    ↓
Updated state
    ↓
Component
```

The component sends an action describing what should happen.

The reducer receives the action and calculates the new state.

The store saves the updated state.

React components can then receive the updated state and render again.

---

## Store

The Redux store is the central place where the application state is stored.

With Redux Toolkit, the store is usually created with `configureStore()`.

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

The `reducer` property tells Redux which reducers are responsible for different parts of the application state.

For example:

```javascript
reducer: {
  counter: counterReducer,
  users: usersReducer,
  products: productsReducer,
}
```

The resulting state can conceptually look like this:

```javascript
{
  counter: {
    value: 5
  },
  users: {
    list: []
  },
  products: {
    list: []
  }
}
```

---

## configureStore()

`configureStore()` is a Redux Toolkit function used to create the Redux store.

It replaces the older Redux `createStore()` approach and provides useful defaults.

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

`configureStore()` also automatically configures commonly used middleware and enables Redux DevTools integration in development environments.

---

## Reducer

A reducer is a function that determines how the state changes in response to an action.

A traditional Redux reducer can look like this:

```javascript
const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
}
```

The reducer receives two important values:

```javascript
state
action
```

The `state` contains the current state.

The `action` describes what happened.

The reducer returns the new state.

---

## Action

An action is an object that describes an event in the application.

A basic Redux action looks like this:

```javascript
{
  type: "counter/increment"
}
```

An action can also contain addi
