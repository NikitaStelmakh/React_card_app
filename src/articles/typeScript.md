TypeScript — Main Concepts
TypeScript is a strongly typed programming language built on top of JavaScript.

It adds a static type system to JavaScript.

TypeScript allows developers to describe what kind of values variables, function parameters, function return values, objects, arrays, and other parts of a program should contain.

For example:

let username: string = "Nikita";
let age: number = 25;
let isActive: boolean = true;

The main idea is:

JavaScript
    ↓
JavaScript + Types
    ↓
TypeScript

TypeScript code is usually compiled into JavaScript before it runs in the browser or Node.js.

Why TypeScript exists
JavaScript is dynamically typed.

For example:

let value = "Hello";

value = 100;

value = true;

JavaScript allows the variable to contain different types of values during runtime.

This flexibility can be useful, but in large applications it can also make some errors harder to detect.

TypeScript adds static type checking.

For example:

let age: number = 25;

age = "25";

TypeScript reports an error because:

age
 ↓
number

"25"
 ↓
string

The value does not match the declared type.

TypeScript is a superset of JavaScript
TypeScript is designed to be compatible with JavaScript.

This means that valid JavaScript code can generally be used in a TypeScript project.

For example:

const name = "John";

console.log(name);

TypeScript adds features such as:

type annotations
interfaces
generics
type aliases
utility types
type narrowing
enums
access modifiers

The code is then transformed into JavaScript.

TypeScript compilation
The general process looks like this:

TypeScript
    ↓
Type checking
    ↓
Compilation
    ↓
JavaScript
    ↓
Browser / Node.js

For example:

const age: number = 25;

can become JavaScript similar to:

const age = 25;

The type annotation:

: number

is removed from the JavaScript output.

TypeScript does not run types at runtime
TypeScript types primarily exist during development and compilation.

For example:

const age: number = 25;

The browser does not receive information that age is a number in the same way TypeScript understands it.

The browser ultimately executes JavaScript:

const age = 25;

Therefore TypeScript is not a runtime validation system.

This is especially important when working with external data such as API responses.

Type annotations
A type annotation explicitly specifies the type of a value.

The basic syntax is:

const variableName: type = value;

For example:

const name: string = "John";
const age: number = 25;
const isStudent: boolean = true;

Here:

name
    ↓
string

age
    ↓
number

isStudent
    ↓
boolean

string
string represents text.

For example:

const name: string = "John";
const city: string = "Warsaw";

Strings can use:

"Hello"
'Hello'
`Hello`

All three represent string values.

Template literals can also contain expressions:

const name = "John";

const message = `Hello, ${name}`;

number
number represents numeric values.

For example:

const age: number = 25;
const price: number = 19.99;
const temperature: number = -5;

JavaScript uses the number type for both integers and floating-point numbers.

There is no separate int type in TypeScript.

Both are:

number

For example:

const count: number = 10;
const price: number = 10.5;

boolean
boolean represents:

true
false

For example:

const isLoggedIn: boolean = true;
const isLoading: boolean = false;

Booleans are commonly used to represent application state.

For example:

if (isLoggedIn) {
  console.log("Welcome");
}

bigint
bigint is used for integers that are larger than the safe range of JavaScript's number type.

For example:

const bigNumber: bigint = 9007199254740991n;

The n suffix creates a BigInt value.

BigInts are useful when working with very large integer values.

symbol
symbol represents unique identifiers.

For example:

const id: symbol = Symbol("id");

Every symbol is unique:

const a = Symbol("id");
const b = Symbol("id");

console.log(a === b);

The result is:

false

null
null represents an intentional absence of a value.

For example:

let user: User | null = null;

The variable can contain:

User
OR
null

undefined
undefined usually represents a value that has not been assigned or does not exist.

For example:

let username: string | undefined;

The value can be:

string
OR
undefined

Type inference
TypeScript does not always require explicit type annotations.

It can often determine the type automatically.

For example:

const name = "John";
const age = 25;
const isActive = true;

TypeScript infers:

name
 ↓
string

age
 ↓
number

isActive
 ↓
boolean

This is called type inference.

Type annotation vs type inference
Type annotation:

const age: number = 25;

Type inference:

const age = 25;

The difference is:

Annotation
    ↓
Developer explicitly specifies the type

Inference
    ↓
TypeScript determines the type automatically

Type inference reduces unnecessary type annotations.

Variables
TypeScript supports normal JavaScript variables.

For example:

let age = 25;

age = 30;

Because age was inferred as a number:

age = "30";

produces a type error.

With const:

const name = "John";

the variable cannot be reassigned.

Arrays
An array contains multiple values.

A string array can be declared as:

const names: string[] = [
  "John",
  "Anna",
  "Peter",
];

A number array:

const numbers: number[] = [
  1,
  2,
  3,
];

A boolean array:

const values: boolean[] = [
  true,
  false,
  true,
];

Array<T>
Another syntax for arrays is:

const names: Array<string> = [
  "John",
  "Anna",
];

For numbers:

const numbers: Array<number> = [
  1,
  2,
  3,
];

These are equivalent:

string[]

and:

Array<string>

The first form is usually shorter.

Multidimensional arrays
Arrays can contain other arrays.

For example:

const matrix: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

This means:

array
    ↓
contains arrays
    ↓
each inner array contains numbers

Objects
TypeScript can describe the structure of an object.

For example:

const user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "John",
  age: 25,
  isAdmin: false,
};

The object must follow the specified structure.

Object properties
Each property can have its own type.

For example:

type User = {
  id: number;
  name: string;
  email: string;
};

This means:

id
 ↓
number

name
 ↓
string

email
 ↓
string

Type aliases
A type allows us to give a reusable name to a type definition.

For example:

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

Now:

const user: User = {
  name: "John",
  age: 25,
  isAdmin: false,
};

Another object can use the same type:

const anotherUser: User = {
  name: "Anna",
  age: 30,
  isAdmin: true,
};

The type describes the structure.

The values contain the actual data.

type User
    ↓
describes structure

user
    ↓
contains actual values

Interfaces
An interface can also describe the structure of an object.

For example:

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

Then:

const user: User = {
  name: "John",
  age: 25,
  isAdmin: false,
};

For many basic object definitions, type and interface can look very similar.

Type aliases vs interfaces
Type:

type User = {
  name: string;
  age: number;
};

Interface:

interface User {
  name: string;
  age: number;
}

Both can describe an object.

However, type can represent more kinds of type expressions.

For example:

type Status =
  | "loading"
  | "success"
  | "error";

Interfaces are particularly useful for object contracts and can be extended and declaration-merged.

Optional properties
A property can be optional.

The ? symbol means the property does not have to exist.

For example:

type User = {
  name: string;
  age: number;
  email?: string;
};

Both objects are valid:

const user: User = {
  name: "John",
  age: 25,
};

and:

const user: User = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

readonly
readonly prevents a property from being reassigned through that type.

For example:

type User = {
  readonly id: number;
  name: string;
};

We can create:

const user: User = {
  id: 1,
  name: "John",
};

We can change:

user.name = "Anna";

But:

user.id = 2;

produces a TypeScript error.

Function parameters
TypeScript allows us to specify function parameter types.

For example:

function add(
  a: number,
  b: number
) {
  return a + b;
}

The function expects:

a → number
b → number

Therefore:

add(10, 20);

is valid.

But:

add("10", 20);

produces a type error.

Function return types
We can specify what a function returns.

For example:

function add(
  a: number,
  b: number
): number {
  return a + b;
}

The structure is:

function name(parameters): returnType {
  ...
}

Another example:

function greet(
  name: string
): string {
  return `Hello, ${name}`;
}

void
void is commonly used for functions that do not return a meaningful value.

For example:

function logMessage(
  message: string
): void {
  console.log(message);
}

The function performs an action but does not return a value.

Function types
A function itself can have a type.

For example:

let add: (
  a: number,
  b: number
) => number;

This means:

add
 ↓
function
 ↓
takes two numbers
 ↓
returns a number

We can assign:

add = (a, b) => {
  return a + b;
};

Arrow functions
Arrow functions can use TypeScript types.

For example:

const add = (
  a: number,
  b: number
): number => {
  return a + b;
};

The parameter types are:

a: number
b: number

The return type is:

): number

Optional function parameters
Function parameters can be optional.

For example:

function greet(
  name?: string
) {
  console.log(
    `Hello ${name ?? "Guest"}`
  );
}

Both are valid:

greet();
greet("John");

Default parameters
A parameter can have a default value.

For example:

function greet(
  name: string = "Guest"
) {
  return `Hello, ${name}`;
}

Now:

greet();

uses:

"Guest"

while:

greet("John");

uses:

"John"

Rest parameters
Rest parameters can also be typed.

For example:

function sum(
  ...numbers: number[]
): number {
  return numbers.reduce(
    (total, number) =>
      total + number,
    0
  );
}

We can call:

sum(1, 2);
sum(1, 2, 3, 4);

Union types
A union type allows a value to have more than one possible type.

The | symbol means "or".

For example:

let id: string | number;

This means:

id can be
    ↓
string
OR
number

Therefore:

id = 10;
id = "10";

are both valid.

But:

id = true;

is invalid.

Union types in functions
Function parameters can use unions.

For example:

function printId(
  id: string | number
) {
  console.log(id);
}

Both are valid:

printId(10);
printId("10");

Literal types
A literal type represents a specific value.

For example:

let direction:
  "left" | "right";

The variable can contain only:

"left"
"right"

Therefore:

direction = "left";
direction = "right";

are valid.

But:

direction = "up";

is invalid.

Literal type aliases
We can create a reusable literal union:

type Status =
  | "loading"
  | "success"
  | "error";

Then:

let status: Status;

status = "loading";
status = "success";
status = "error";

But:

status = "finished";

is invalid.

Intersection types
An intersection combines multiple types.

The & symbol means that a value must satisfy all combined types.

For example:

type Person = {
  name: string;
};

type Employee = {
  company: string;
};

type EmployeePerson =
  Person & Employee;

Now:

const user: EmployeePerson = {
  name: "John",
  company: "Example",
};

The object must satisfy both types.

Person
   +
Employee
   ↓
EmployeePerson

any
any disables most type checking for a value.

For example:

let value: any = "hello";

value = 10;
value = true;
value = {};

All of these are allowed.

any effectively tells TypeScript:

Do not check this value strictly.

Because this removes many benefits of TypeScript, any should generally be avoided when a more precise type is possible.

unknown
unknown is safer than any.

For example:

let value: unknown = "hello";

value = 10;
value = true;

The value can contain different types.

However, TypeScript does not allow us to use it as a specific type until we check it.

For example:

let value: unknown = "hello";

value.toUpperCase();

This produces an error.

We need to narrow it:

if (typeof value === "string") {
  console.log(
    value.toUpperCase()
  );
}

The important difference is:

any
 ↓
TypeScript largely stops checking

unknown
 ↓
TypeScript requires type checking

never
never represents a value that never successfully occurs.

A common example is a function that always throws:

function throwError(
  message: string
): never {
  throw new Error(message);
}

The function never successfully returns.

never is also useful for exhaustive checks.

Type narrowing
Type narrowing means reducing a broad type into a more specific type.

For example:

function printId(
  id: string | number
) {
  if (typeof id === "string") {
    console.log(
      id.toUpperCase()
    );
  } else {
    console.log(
      id.toFixed(2)
    );
  }
}

The flow is:

string | number
       ↓
typeof check
       ↓
string OR number
       ↓
specific operations become available

typeof type guard
typeof can narrow primitive types.

For example:

function printValue(
  value: string | number
) {
  if (typeof value === "string") {
    console.log(
      value.toUpperCase()
    );
  }

  if (typeof value === "number") {
    console.log(
      value.toFixed(2)
    );
  }
}

instanceof
instanceof can narrow class instances.

For example:

class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(
  animal: Dog | Cat
) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

TypeScript understands which class the value belongs to.

in operator
The in operator can narrow object types.

For example:

type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

function makeSound(
  animal: Dog | Cat
) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

The presence of the property helps TypeScript determine the type.

Discriminated unions
A discriminated union uses a common property to distinguish object types.

For example:

type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: string;
};

type ErrorState = {
  status: "error";
  message: string;
};

type State =
  | LoadingState
  | SuccessState
  | ErrorState;

Now:

function renderState(
  state: State
) {
  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "success") {
    return state.data;
  }

  return state.message;
}

The status property is the discriminator.

Generics
Generics allow us to write reusable code that works with different types while preserving type information.

For example:

function identity<T>(
  value: T
): T {
  return value;
}

Here:

T
 ↓
type parameter

If we call:

identity<string>("Hello");

then:

T = string

If we call:

identity<number>(10);

then:

T = number

Generic type inference
TypeScript can often infer the generic type automatically.

For example:

const result =
  identity("Hello");

TypeScript infers:

T = string

We do not need to write:

identity<string>("Hello");

Generic arrays
Generics are commonly used with arrays.

For example:

function getFirst<T>(
  items: T[]
): T {
  return items[0];
}

For strings:

const first = getFirst([
  "a",
  "b",
  "c",
]);

TypeScript infers:

T = string

For numbers:

const first = getFirst([
  1,
  2,
  3,
]);

TypeScript infers:

T = number

Generic type aliases
Type aliases can be generic.

For example:

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

Now:

type UserResponse =
  ApiResponse<User>;

means:

data
 ↓
User

success
 ↓
boolean

Another example:

type ProductResponse =
  ApiResponse<Product>;

The same structure can be reused with another data type.

Generic constraints
A generic can be restricted using extends.

For example:

function getLength<
  T extends {
    length: number;
  }
>(value: T): number {
  return value.length;
}

This means T must have:

length: number

Therefore:

getLength("Hello");

works because strings have a length.

And:

getLength([1, 2, 3]);

works because arrays have a length.

keyof
keyof creates a union of property names from a type.

For example:

type User = {
  name: string;
  age: number;
  email: string;
};

Then:

type UserKey =
  keyof User;

is approximately:

"name" | "age" | "email"

Therefore:

let key: UserKey;

key = "name";
key = "age";
key = "email";

But:

key = "address";

is invalid.

keyof with generics
Generics can be combined with keyof.

For example:

function getProperty<
  T,
  K extends keyof T
>(
  object: T,
  key: K
): T[K] {
  return object[key];
}

Suppose:

const user = {
  name: "John",
  age: 25,
};

Then:

const name =
  getProperty(user, "name");

TypeScript knows:

name → string

And:

const age =
  getProperty(user, "age");

gives:

age → number

typeof in type positions
typeof can also be used to derive a type from an existing value.

For example:

const user = {
  name: "John",
  age: 25,
};

We can write:

type User =
  typeof user;

The resulting type is approximately:

{
  name: string;
  age: number;
}

as const
as const tells TypeScript to infer more specific readonly types.

For example:

const status =
  "success" as const;

Instead of:

string

the type is:

"success"

For an object:

const config = {
  mode: "dark",
} as const;

The values become literal types and properties become readonly.

Type assertions
A type assertion tells TypeScript how a value should be treated.

For example:

const value =
  someValue as string;

Another syntax is:

const value =
  <string>someValue;

The as syntax is generally preferred in modern TypeScript code.

Important:

as string

does not convert a value into a string.

It only changes TypeScript's understanding of the value.

Non-null assertion operator
The ! operator tells TypeScript that a value is not null or undefined.

For example:

const element =
  document.getElementById("root")!;

The developer is telling TypeScript:

I know this value exists.

The operator does not perform a runtime check.

Therefore it should only be used when that assumption is known to be correct.

Optional chaining
Optional chaining uses ?. to safely access values that may be missing.

For example:

const user = {
  profile: {
    name: "John",
  },
};

We can write:

user.profile?.name;

If profile is null or undefined, the result is:

undefined

instead of throwing an error.

Optional chaining is especially useful when working with API data.

Optional function calls
Optional chaining can also call an optional function.

For example:

type Config = {
  onSuccess?: () => void;
};

We can write:

config.onSuccess?.();

If the function exists, it runs.

If it does not exist, nothing happens.

Nullish coalescing
The ?? operator provides a fallback when a value is null or undefined.

For example:

const username =
  user.name ?? "Guest";

If user.name is:

null

or:

undefined

the result is:

"Guest"

Unlike ||, ?? does not treat values such as:

0
false
""

as missing.

Tuples
A tuple is an array with a fixed structure.

For example:

let user: [
  string,
  number
];

user = [
  "John",
  25,
];

The first element must be:

string

The second must be:

number

This differs from:

string[]

because string[] allows any number of strings.

Readonly arrays
An array can be marked as readonly.

For example:

const numbers:
  readonly number[] = [
    1,
    2,
    3,
  ];

This prevents mutation through that readonly reference:

numbers.push(4);

TypeScript reports an error.

Another syntax is:

const numbers:
  ReadonlyArray<number> = [
    1,
    2,
    3,
  ];

Index signatures
An index signature describes objects whose property names are not known in advance.

For example:

type Scores = {
  [player: string]: number;
};

Now:

const scores: Scores = {
  John: 100,
  Anna: 95,
  Peter: 87,
};

The keys are strings.

The values are numbers.

Classes
TypeScript supports JavaScript classes with additional type information.

For example:

class User {
  name: string;
  age: number;

  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

Creating an instance:

const user =
  new User("John", 25);

Access modifiers
TypeScript supports:

public
private
protected

For example:

class User {
  public name: string;
  private password: string;

  constructor(
    name: string,
    password: string
  ) {
    this.name = name;
    this.password = password;
  }
}

public members can be accessed from outside.

private members are intended to be accessible only within the class.

protected members are accessible within the class and its subclasses.

Parameter properties
TypeScript provides shorthand syntax for declaring and initializing class properties.

Instead of:

class User {
  name: string;
  age: number;

  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }
}

we can write:

class User {
  constructor(
    public name: string,
    public age: number
  ) {}
}

The constructor parameters automatically become properties.

extends
extends is used for class inheritance.

For example:

class Animal {
  move(): void {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof");
  }
}

Now Dog has:

move()
bark()

implements
A class can implement an interface.

For example:

interface User {
  name: string;
  greet(): void;
}

Then:

class Admin
  implements User {

  name: string;

  constructor(
    name: string
  ) {
    this.name = name;
  }

  greet(): void {
    console.log(
      `Hello, ${this.name}`
    );
  }
}

implements tells TypeScript that the class must satisfy the interface.

Abstract classes
An abstract class is designed to be inherited from rather than instantiated directly.

For example:

abstract class Animal {
  abstract makeSound(): void;
}

A subclass must implement the abstract method:

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

Enums
An enum defines a set of named constants.

For example:

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

We can use:

const direction:
  Direction =
  Direction.Up;

Enums are a TypeScript-specific feature.

In many modern TypeScript applications, union types are also commonly used:

type Direction =
  | "up"
  | "down"
  | "left"
  | "right";

Utility types
TypeScript provides built-in utility types for transforming existing types.

Common utility types include:

Partial
Required
Readonly
Pick
Omit
Record
ReturnType
Parameters
Exclude
Extract
NonNullable

These are useful when working with existing type definitions.

Partial
Partial<T> makes all properties optional.

For example:

type User = {
  name: string;
  age: number;
  email: string;
};

Then:

type PartialUser =
  Partial<User>;

Now:

const user: PartialUser = {
  name: "John",
};

All properties are optional.

Required
Required<T> makes all optional properties required.

For example:

type User = {
  name: string;
  email?: string;
};

Then:

type RequiredUser =
  Required<User>;

Now both properties are required:

const user: RequiredUser = {
  name: "John",
  email: "john@example.com",
};

Readonly utility type
Readonly<T> makes properties readonly.

For example:

type User = {
  name: string;
  age: number;
};

Then:

type ReadonlyUser =
  Readonly<User>;

Now:

const user: ReadonlyUser = {
  name: "John",
  age: 25,
};

This is not allowed:

user.name = "Anna";

Pick
Pick<T, K> creates a type containing only selected properties.

For example:

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

We can select:

type UserPreview =
  Pick<User, "id" | "name">;

The result is approximately:

{
  id: number;
  name: string;
}

Omit
Omit<T, K> creates a type without selected properties.

For example:

type User = {
  id: number;
  name: string;
  email: string;
};

We can remove id:

type NewUser =
  Omit<User, "id">;

The resulting type is:

{
  name: string;
  email: string;
}

This is useful when an ID is generated by a backend.

Record
Record<K, T> creates an object type with specific key and value types.

For example:

type UserRoles =
  Record<string, string>;

Now:

const roles: UserRoles = {
  John: "admin",
  Anna: "user",
};

Keys:

string

Values:

string

Another example:

type UserStatus =
  Record<
    string,
    "active" | "inactive"
  >;

ReturnType
ReturnType<T> extracts a function's return type.

For example:

function getUser() {
  return {
    name: "John",
    age: 25,
  };
}

Then:

type User =
  ReturnType<typeof getUser>;

The type is based on the function's return value.

Parameters
Parameters<T> extracts function parameter types as a tuple.

For example:

function createUser(
  name: string,
  age: number
) {
  // ...
}

Then:

type CreateUserParams =
  Parameters<typeof createUser>;

The result is approximately:

[string, number]

Exclude
Exclude<T, U> removes types from a union.

For example:

type Status =
  | "loading"
  | "success"
  | "error";

We can remove "loading":

type FinishedStatus =
  Exclude<
    Status,
    "loading"
  >;

The result is:

"success" | "error"

Extract
Extract<T, U> keeps only types that are assignable to another type.

For example:

type Status =
  | "loading"
  | "success"
  | "error";

We can extract:

type SuccessStatus =
  Extract<
    Status,
    "success"
  >;

The result is:

"success"

NonNullable
NonNullable<T> removes:

null
undefined

from a type.

For example:

type Value =
  string | null | undefined;

Then:

type RequiredValue =
  NonNullable<Value>;

The result is:

string

Mapped types
Mapped types allow us to create a new type by iterating over the keys of another type.

For example:

type User = {
  name: string;
  age: number;
};

We can create:

type OptionalUser = {
  [K in keyof User]?:
    User[K];
};

This produces approximately:

{
  name?: string;
  age?: number;
}

Partial<T> is based on this kind of type transformation.

Conditional types
Conditional types behave similarly to conditions.

The basic syntax is:

T extends U
  ? X
  : Y

For example:

type IsString<T> =
  T extends string
    ? true
    : false;

Then:

type A =
  IsString<string>;

results in:

true

And:

type B =
  IsString<number>;

results in:

false

satisfies
The satisfies operator checks that a value conforms to a type while preserving useful information about the value.

For example:

type Config = {
  mode: "light" | "dark";
};

const config = {
  mode: "dark",
} satisfies Config;

TypeScript checks the structure without unnecessarily widening the value.

Type-safe object mapping
Record can be combined with literal unions.

For example:

type Status =
  | "loading"
  | "success"
  | "error";

const messages:
  Record<Status, string> = {
    loading: "Loading...",
    success: "Done!",
    error: "Something went wrong",
  };

TypeScript ensures that all required keys are present.

Type guards
A type guard is a condition that helps TypeScript determine a more specific type.

For example:

function printValue(
  value: string | number
) {
  if (typeof value === "string") {
    console.log(
      value.toUpperCase()
    );
  }

  if (typeof value === "number") {
    console.log(
      value.toFixed(2)
    );
  }
}

The checks narrow the type.

Custom type guards
We can create our own type guard functions.

For example:

type User = {
  name: string;
};

function isUser(
  value: unknown
): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value
  );
}

The return type:

value is User

tells TypeScript that when the function returns true, the value can be treated as a User.

Type assertions vs type guards
A type assertion says:

I know this value has this type.

For example:

const user =
  value as User;

A type guard checks the value:

Let's determine whether this value has this type.

For example:

if (isUser(value)) {
  console.log(value.name);
}

Type guards are generally safer when dealing with unknown external data.

API data and TypeScript
Suppose an API returns:

{
  "id": 1,
  "name": "John",
  "email": "john@example.com"
}

We can describe the expected structure:

type User = {
  id: number;
  name: string;
  email: string;
};

Then our application can use:

function renderUser(
  user: User
) {
  return user.name;
}

However, the type does not prove that the server actually returned valid data.

It only describes what our application expects.

Runtime validation
TypeScript performs static checking.

It does not automatically validate external data.

For example:

type User = {
  id: number;
  name: string;
};

This does not automatically validate:

const data =
  await response.json();

The actual runtime data could be:

{
  "id": "wrong",
  "name": 123
}

even though the application expects:

User

Runtime validation requires explicit checks or a validation library.

TypeScript with async functions
An async function returns a Promise.

For example:

async function getUser():
  Promise<User> {

  const response =
    await fetch("/api/user");

  const user =
    await response.json();

  return user;
}

The return type is:

Promise<User>

This means:

function
    ↓
returns Promise
    ↓
Promise resolves to User

Promise
Promise<T> represents a future value of type T.

For example:

const promise:
  Promise<string> =
  Promise.resolve("Hello");

The promise eventually produces:

string

Another example:

const promise:
  Promise<number> =
  Promise.resolve(100);

TypeScript with fetch
TypeScript can describe data returned from a fetch request.

For example:

type User = {
  id: number;
  name: string;
};

async function getUser():
  Promise<User> {

  const response =
    await fetch("/api/user");

  const data =
    await response.json();

  return data;
}

The important point is that:

response.json()

does not automatically prove that the server returned a valid User.

The User type describes what the application expects.

TypeScript with React
TypeScript is commonly used with React.

For example:

type ButtonProps = {
  title: string;
  disabled?: boolean;
};

Then:

function Button({
  title,
  disabled,
}: ButtonProps) {
  return (
    <button disabled={disabled}>
      {title}
    </button>
  );
}

Usage:

<Button
  title="Login"
  disabled={false}
/>

TypeScript checks the component props.

React children
A component can receive children.

For example:

type CardProps = {
  children: React.ReactNode;
};

Then:

function Card({
  children,
}: CardProps) {
  return (
    <div>
      {children}
    </div>
  );
}

Usage:

<Card>
  <h1>Hello</h1>
</Card>

React.ReactNode is commonly used when a component can accept different kinds of React content.

React event types
TypeScript can describe React events.

For example:

function handleChange(
  event:
    React.ChangeEvent<HTMLInputElement>
) {
  console.log(
    event.target.value
  );
}

For a button:

function handleClick(
  event:
    React.MouseEvent<HTMLButtonElement>
) {
  console.log("Clicked");
}

The event types provide information about the event and its target.

useState with TypeScript
TypeScript can often infer the type of useState.

For example:

const [count, setCount] =
  useState(0);

TypeScript infers:

count
 ↓
number

Therefore:

setCount(10);

is valid.

But:

setCount("10");

is invalid.

Explicit useState type
Sometimes the initial value does not contain enough information.

For example:

const [user, setUser] =
  useState<User | null>(null);

The state can contain:

User
OR
null

Initially:

user = null

Later:

setUser({
  id: 1,
  name: "John",
  email: "john@example.com",
});

useRef with TypeScript
A DOM ref can specify the element type.

For example:

const inputRef =
  useRef<HTMLInputElement>(null);

TypeScript knows that the ref can point to:

HTMLInputElement

For a button:

const buttonRef =
  useRef<HTMLButtonElement>(null);

Generic React components
React components can use generics.

For example:

type ListProps<T> = {
  items: T[];
  renderItem: (
    item: T
  ) => React.ReactNode;
};

A generic component:

function List<T>({
  items,
  renderItem,
}: ListProps<T>) {
  return (
    <div>
      {items.map(
        (item, index) => (
          <div key={index}>
            {renderItem(item)}
          </div>
        )
      )}
    </div>
  );
}

The component can work with different types.

React component props
A common pattern is to define props with a type alias.

For example:

type UserCardProps = {
  user: User;
  onSelect: (
    user: User
  ) => void;
};

Then:

function UserCard({
  user,
  onSelect,
}: UserCardProps) {
  return (
    <button
      onClick={() =>
        onSelect(user)
      }
    >
      {user.name}
    </button>
  );
}

This creates a type-safe relationship between:

component
    ↓
props
    ↓
User
    ↓
callback

Modules
TypeScript supports JavaScript modules.

For example:

export type User = {
  name: string;
  age: number;
};

Another file can import the type:

import type {
  User
} from "./types";

Runtime values can be imported normally:

import {
  getUser
} from "./api";

Type-only imports
A type can be imported explicitly with:

import type {
  User
} from "./types";

This indicates that the import is used only for type checking.

For example:

import type {
  User
} from "./types";

function printUser(
  user: User
) {
  console.log(user.name);
}

Type-only exports
We can also export types:

export type User = {
  name: string;
};

Then:

import type {
  User
} from "./types";

This makes the distinction between runtime values and compile-time types clearer.

Declaration files
TypeScript uses .d.ts files for type declarations.

For example:

library.d.ts

A declaration file can describe JavaScript code so that TypeScript understands its types.

Many JavaScript libraries provide their own type declarations.

tsconfig.json
A TypeScript project commonly contains:

tsconfig.json

This file controls TypeScript compiler behavior.

For example:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true
  }
}

Common options include:

target
module
strict
jsx
esModuleInterop
moduleResolution
noImplicitAny
strictNullChecks

target
The target option determines the JavaScript version that TypeScript outputs.

For example:

{
  "compilerOptions": {
    "target": "ES2020"
  }
}

This tells TypeScript to generate JavaScript compatible with the specified language target.

module
The module option controls how modules are emitted.

For example:

{
  "compilerOptions": {
    "module": "ESNext"
  }
}

Modern applications often use ES modules.

strict mode
The strict option enables a collection of stronger type-checking rules.

For example:

{
  "compilerOptions": {
    "strict": true
  }
}

Strict mode helps catch more potential problems.

It includes checks related to:

null and undefined
implicit any
function parameters
class properties
type compatibility

strictNullChecks
strictNullChecks makes TypeScript distinguish between regular values and:

null
undefined

For example:

let name: string = null;

With strict null checking enabled, this is invalid.

Instead:

let name: string | null = null;

explicitly states that null is allowed.

noImplicitAny
noImplicitAny prevents TypeScript from silently assigning any when it cannot determine a type.

For example:

function greet(name) {
  return `Hello ${name}`;
}

With strict settings, TypeScript can report that name does not have an explicit type.

We can write:

function greet(
  name: string
) {
  return `Hello ${name}`;
}

Structural typing
TypeScript primarily uses structural typing.

This means compatibility is based on the structure of a value.

For example:

type User = {
  name: string;
};

And:

const person = {
  name: "John",
  age: 25,
};

We can assign:

const user: User = person;

This works because person contains the required property:

name: string

The important idea is:

Shape matters
    ↓
Required properties must be compatible

Excess property checking
TypeScript performs additional checks when assigning an object literal directly.

For example:

type User = {
  name: string;
};

This is valid:

const user: User = {
  name: "John",
};

But this can produce an error:

const user: User = {
  name: "John",
  age: 25,
};

because the object literal contains an additional property.

However:

const person = {
  name: "John",
  age: 25,
};

const user: User = person;

can be valid because person has the required structure.

TypeScript errors
TypeScript can detect incompatible values before runtime.

For example:

const age: number = "25";

TypeScript reports an error similar to:

Type 'string' is not assignable
to type 'number'.

The purpose is to catch type-related problems during development.

TypeScript does not guarantee that an application has no runtime errors.

Static typing vs runtime validation
The difference is important:

TypeScript
    ↓
compile-time type checking

Runtime validation
    ↓
checks actual data while the application runs

For example:

type User = {
  name: string;
};

does not automatically validate JSON received from a server.

The external data must be checked separately when runtime validation is required.

TypeScript with API responses
Suppose an API returns:

{
  "id": 1,
  "name": "John"
}

We can define:

type User = {
  id: number;
  name: string;
};

Then:

function renderUser(
  user: User
) {
  return user.name;
}

TypeScript knows that:

user
 ↓
User
 ↓
id
name

But the type does not validate the actual server response.

TypeScript with Axios
TypeScript works particularly well with HTTP clients such as Axios.

For example:

import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser(): Promise<User> {
  const response =
    await axios.get<User>(
      "/api/user"
    );

  return response.data;
}

The generic:

axios.get<User>()

describes the expected response data.

The flow is:

HTTP request
    ↓
Axios
    ↓
AxiosResponse<User>
    ↓
response.data
    ↓
User

This allows TypeScript to provide information about the response throughout the application.

Generic API responses
Suppose an API uses a common response structure:

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

We can use it with Axios:

const response =
  await axios.get<
    ApiResponse<User>
  >("/api/user");

Now:

response.data
    ↓
ApiResponse<User>

response.data.data
    ↓
User

This pattern is common in applications with standardized API responses.

Axios request types
TypeScript can also describe request data.

For example:

type CreateUserRequest = {
  name: string;
  email: string;
};

Then:

const data:
  CreateUserRequest = {
  name: "John",
  email: "john@example.com",
};

The request object is now checked by TypeScript.

TypeScript with Redux
TypeScript can describe Redux state and actions.

For example:

type User = {
  id: number;
  name: string;
};

type UserState = {
  user: User | null;
  loading: boolean;
};

The state has a predictable structure:

user
 ↓
User | null

loading
 ↓
boolean

This helps prevent incompatible state updates.

TypeScript with Jest
TypeScript can also be used to type tests.

For example:

function add(
  a: number,
  b: number
): number {
  return a + b;
}

A test:

expect(
  add(2, 3)
).toBe(5);

TypeScript ensures that the function receives compatible arguments.

TypeScript with forms
TypeScript is useful for form data.

For example:

type LoginForm = {
  email: string;
  password: string;
};

A function can accept:

function login(
  data: LoginForm
) {
  console.log(data.email);
}

Now the structure of the form data is explicit.

Type-safe configuration
Types can describe application configuration.

For example:

type Config = {
  apiUrl: string;
  timeout: number;
  debug: boolean;
};

Then:

const config: Config = {
  apiUrl: "/api",
  timeout: 5000,
  debug: true,
};

Incorrect configuration values are detected during development.

Type-safe environment variables
Environment variables are often strings at runtime.

A project can define the expected structure separately.

For example:

type Environment = {
  API_URL: string;
  NODE_ENV:
    | "development"
    | "production";
};

This describes how the application expects configuration to look.

Runtime validation may still be required because environment variables originate outside the TypeScript type system.

TypeScript and DOM
TypeScript includes DOM types.

For example:

const input =
  document.querySelector(
    "input"
  );

Depending on the API and compiler settings, TypeScript may infer a nullable element type.

We can use a more specific type when necessary:

const input =
  document.querySelector(
    "input"
  ) as HTMLInputElement;

Or perform a runtime check:

const input =
  document.querySelector(
    "input"
  );

if (input instanceof HTMLInputElement) {
  console.log(input.value);
}

TypeScript and events
DOM events can also be typed.

For example:

function handleClick(
  event: MouseEvent
) {
  console.log(
    event.clientX
  );
}

For keyboard events:

function handleKeyDown(
  event: KeyboardEvent
) {
  console.log(
    event.key
  );
}

TypeScript mental model
A useful way to think about TypeScript is:

Type
 ↓
describes what a value can be

Type annotation
 ↓
explicitly specifies the type

Type inference
 ↓
TypeScript determines the type automatically

Union
 ↓
value can be one of several types

Intersection
 ↓
value must satisfy multiple types

Generic
 ↓
type can be supplied later

Type narrowing
 ↓
TypeScript determines a more specific type

Utility type
 ↓
creates a new type from an existing type

Type guard
 ↓
checks a value and narrows its type

TypeScript architecture
A typical TypeScript application can use types at multiple levels.

API
 ↓
API response types
 ↓
Domain types
 ↓
Application state
 ↓
Component props
 ↓
Component state
 ↓
Event types
 ↓
UI

For example:

type User = {
  id: number;
  name: string;
  email: string;
};

The same type can be reused by:

API layer
React components
state management
forms
functions
tests

A complete TypeScript example
Here is a small example combining several concepts:

type User = {
  id: number;
  name: string;
  email?: string;
};

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

function getUserName(
  user: User
): string {
  return user.name;
}

function createResponse<T>(
  data: T
): ApiResponse<T> {
  return {
    data,
    success: true,
  };
}

const user: User = {
  id: 1,
  name: "John",
};

const response =
  createResponse(user);

console.log(
  getUserName(response.data)
);

The flow is:

User
 ↓
describes user structure

createResponse<T>()
 ↓
generic function

ApiResponse<T>
 ↓
describes response structure

response.data
 ↓
contains User

getUserName()
 ↓
accepts User

A complete API example
A more realistic example can combine types, generics, Axios, and async functions:

import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

async function getUsers():
  Promise<User[]> {

  const response =
    await axios.get<
      ApiResponse<User[]>
    >("/api/users");

  return response.data.data;
}

The type flow is:

axios.get<ApiResponse<User[]>>()
                ↓
        API response
                ↓
        ApiResponse<User[]>
                ↓
        response.data.data
                ↓
             User[]

The basic TypeScript flow
The main idea of TypeScript can be summarized as:

Write JavaScript
      ↓
Add type information
      ↓
TypeScript analyzes the code
      ↓
Type errors are reported
      ↓
TypeScript is compiled
      ↓
JavaScript runs

For example:

function add(
  a: number,
  b: number
): number {
  return a + b;
}

TypeScript knows:

a
 ↓
number

b
 ↓
number

return
 ↓
number

Therefore:

add(10, 20);

is valid.

But:

add("10", 20);

is rejected by the type checker.

The main TypeScript type system
The main concepts can be summarized as:

Primitive types
    ↓
string
number
boolean
bigint
symbol
null
undefined

Complex types
    ↓
object
array
tuple
function

Type composition
    ↓
union
intersection
literal types

Reusable types
    ↓
type
interface
generics

Type narrowing
    ↓
typeof
instanceof
in
type guards
discriminated unions

Type transformations
    ↓
Partial
Required
Readonly
Pick
Omit
Record
ReturnType
Parameters
Exclude
Extract
NonNullable

TypeScript in a React application
A typical React + TypeScript application may use types at several levels.

API data
    ↓
type User

React props
    ↓
type UserProps

React state
    ↓
useState<User | null>()

Events
    ↓
React.ChangeEvent<HTMLInputElement>

Refs
    ↓
useRef<HTMLInputElement>()

Functions
    ↓
parameter and return types

Components
    ↓
typed props and children

For example:

type User = {
  id: number;
  name: string;
};

type UserCardProps = {
  user: User;
};

function UserCard({
  user,
}: UserCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>ID: {user.id}</p>
    </div>
  );
}

The data structure is defined once:

type User = {
  id: number;
  name: string;
};

and can then be reused throughout the application.

TypeScript best practices
Prefer precise types over any.

Instead of:

function process(
  value: any
) {
  // ...
}

prefer:

function process(
  value: unknown
) {
  // validate and narrow
}

Use inference when the type is obvious:

const count = 0;

Instead of unnecessarily writing:

const count: number = 0;

Use explicit types where they improve clarity:

function createUser(
  name: string,
  age: number
): User {
  // ...
}

Use reusable types for shared structures:

type User = {
  id: number;
  name: string;
};

Prefer strict compiler settings:

{
  "compilerOptions": {
    "strict": true
  }
}

Validate external data when runtime correctness matters.

Common TypeScript mistakes
Using any everywhere
Avoid:

const data: any = response;

when a more precise type is available.

Prefer:

const data: User = response;

when the data is already known to be a User.

For unknown external data, consider:

const data: unknown = response;

and validate it.

Using type assertions instead of checking data
Avoid blindly writing:

const user =
  response.data as User;

when the external data has not actually been validated.

A type assertion does not validate the runtime value.

Making everything optional
Avoid unnecessarily broad types such as:

type User = {
  id?: number;
  name?: string;
  email?: string;
};

if these properties are actually required.

Prefer:

type User = {
  id: number;
  name: string;
  email: string;
};

and mark only genuinely optional properties with ?.

Ignoring null and undefined
Instead of assuming:

user.name

always exists, model the actual state:

const user:
  User | null = null;

Then narrow before using it:

if (user) {
  console.log(user.name);
}

TypeScript mental model for everyday development
When writing TypeScript, think in this order:

What data do I have?
        ↓
What shape does it have?
        ↓
What types can it contain?
        ↓
Can it be null or undefined?
        ↓
Can it have multiple possible shapes?
        ↓
Can the type be reused?
        ↓
Can TypeScript infer it?
        ↓
Do I need a generic?
        ↓
Do I need a type guard?

For example, for an API user:

type User = {
  id: number;
  name: string;
  email?: string;
};

Then:

User
 ↓
describes the data

User[]
 ↓
describes a list of users

User | null
 ↓
describes an optional user

ApiResponse<User>
 ↓
describes an API response

ApiResponse<User[]>
 ↓
describes a list response

Final TypeScript summary
TypeScript adds a static type system to JavaScript.

The most important concepts are:

Primitive types
    ↓
string
number
boolean
bigint
symbol

Objects
    ↓
object
array
tuple

Reusable types
    ↓
type
interface

Functions
    ↓
parameter types
return types
function types

Type composition
    ↓
union
intersection
literal types

Type safety
    ↓
unknown
never
type guards
type narrowing

Reusable abstractions
    ↓
generics

Type transformations
    ↓
Partial
Required
Readonly
Pick
Omit
Record
ReturnType
Parameters

Modern TypeScript
    ↓
as const
satisfies
keyof
typeof
conditional types
mapped types

Application development
    ↓
React
Axios
APIs
Redux
forms
tests
configuration

The core idea is:

JavaScript
    ↓
Add types
    ↓
Describe data
    ↓
Describe functions
    ↓
Compose types
    ↓
Narrow types
    ↓
Reuse types with generics
    ↓
Transform types with utility types
    ↓
Catch many mistakes before runtime
    ↓
Compile to JavaScript

TypeScript does not replace JavaScript.

It adds a type system and development-time tooling around JavaScript, helping developers describe the structure of their code and detect many type-related problems before the application runs.