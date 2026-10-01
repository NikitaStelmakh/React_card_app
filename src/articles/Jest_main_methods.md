# Jest — Main Methods

Jest is a JavaScript testing framework that allows developers to test application logic, functions, modules, and React components. It provides tools for writing tests, making assertions, creating mock functions, and preparing the testing environment.

## describe()

The `describe()` function groups related tests into a test suite. It helps organize tests and makes the test file easier to read.

```javascript
describe("Calculator", () => {
  // tests
});
```

A `describe()` block can contain multiple individual tests.

## it() and test()

`it()` and `test()` are two names for the same Jest function. They define an individual test and describe the behavior that should be verified.

```javascript
it("adds two numbers", () => {
  expect(2 + 3).toBe(5);
});
```

The choice between `it()` and `test()` is mostly a matter of style. Both functions work in the same way.

## beforeEach()

`beforeEach()` runs a function before every test in a test suite. It is commonly used to prepare test data, reset mocks, or create a fresh testing environment.

```javascript
beforeEach(() => {
  // setup before each test
});
```

If a test suite contains five tests, the function inside `beforeEach()` will run five times.

## afterEach()

`afterEach()` runs a function after every test. It is commonly used for cleanup operations, such as clearing mocks or resetting data.

```javascript
afterEach(() => {
  // cleanup after each test
});
```

## beforeAll()

`beforeAll()` runs once before all tests in a test suite.

```javascript
beforeAll(() => {
  // setup once
});
```

It can be useful when several tests need the same initial setup.

## afterAll()

`afterAll()` runs once after all tests in a test suite have finished.

```javascript
afterAll(() => {
  // final cleanup
});
```

## expect()

The `expect()` function is used to create assertions. An assertion checks whether the actual result of the code matches the expected result.

```javascript
expect(2 + 2).toBe(4);
```

Jest provides many matchers that can be used together with `expect()`.

## toBe()

`toBe()` checks whether two values are strictly equal. It is commonly used with primitive values such as strings, numbers, and booleans.

```javascript
expect(10).toBe(10);

expect("React").toBe("React");
```

For objects and arrays, `toEqual()` is usually more appropriate.

## toEqual()

`toEqual()` checks whether two objects or arrays have the same values and structure.

```javascript
expect({ name: "React" }).toEqual({ name: "React" });
```

Unlike `toBe()`, `toEqual()` compares the contents of objects and arrays.

## not

The `not` modifier allows you to check that a condition is not true.

```javascript
expect(10).not.toBe(5);
```

This assertion passes because `10` is not equal to `5`.

## jest.fn()

`jest.fn()` creates a mock function. Mock functions allow developers to track whether a function was called, how many times it was called, and which arguments were passed to it.

```javascript
const mockFunction = jest.fn();

mockFunction("Hello");

expect(mockFunction).toHaveBeenCalled();
```

Mock functions are especially useful when testing functions that are passed as props or used as callbacks.

## jest.mock()

`jest.mock()` replaces a module with a mock implementation during a test.

```javascript
jest.mock("./api");
```

It is commonly used when a component or function depends on an API, database, or another external module that should not be used directly during the test.

## jest.spyOn()

`jest.spyOn()` creates a mock around an existing object method. It allows you to monitor calls to the method and optionally replace its implementation.

```javascript
const spy = jest.spyOn(console, "log");

console.log("Hello");

expect(spy).toHaveBeenCalled();
```

A spy is useful when you want to observe an existing function without completely replacing the object that contains it.

## toHaveBeenCalled()

`toHaveBeenCalled()` checks whether a mock function has been called at least once.

```javascript
const mockFunction = jest.fn();

mockFunction();

expect(mockFunction).toHaveBeenCalled();
```

## toHaveBeenCalledTimes()

`toHaveBeenCalledTimes()` checks how many times a mock function was called.

```javascript
const mockFunction = jest.fn();

mockFunction();

mockFunction();

expect(mockFunction).toHaveBeenCalledTimes(2);
```

## toHaveBeenCalledWith()

`toHaveBeenCalledWith()` checks whether a mock function was called with specific arguments.

```javascript
const mockFunction = jest.fn();

mockFunction("React", 18);

expect(mockFunction).toHaveBeenCalledWith("React", 18);
```

## A simple Jest test

The methods above can be combined to create a complete test:

```javascript
describe("Calculator", () => {
  it("adds two numbers", () => {
    const result = 2 + 3;

    expect(result).toBe(5);
  });
});
```

The test can be read as:

1. `describe()` creates a group of related tests.
2. `it()` defines what behavior is being tested.
3. The application code produces a result.
4. `expect()` creates an assertion.
5. `toBe()` checks whether the result is what we expected.

Together, these methods form the basic foundation of testing with Jest.
