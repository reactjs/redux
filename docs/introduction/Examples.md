---
id: examples
title: Examples
description: 'Introduction > Examples: Redux interactive example apps'
hide_title: true
---

# Examples

Redux is distributed with a few examples in its [source code](https://github.com/reduxjs/redux/tree/master/examples). Most of these examples are also on [CodeSandbox](https://codesandbox.io), an online editor that lets you play with the examples online.

## Counter Vanilla

Run the [Counter Vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter-vanilla
open index.html
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter-vanilla"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

## Counter

Run the [Counter](https://github.com/reduxjs/redux/tree/master/examples/counter) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most basic example of using Redux together with React and it's also a `create-react-app` template.
So it's the same code you'd get running `npx create-react-app my-app --template redux`

This example includes tests.

## Todos

Run the [Todos](https://github.com/reduxjs/redux/tree/master/examples/todos) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use [React Redux](https://github.com/reduxjs/react-redux) to generate container components from your presentational components.

This example includes tests.

## Todos with Undo

Run the [Todos with Undo](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos-with-undo
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos-with-undo"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is a variation on the previous example. It is almost identical, but additionally shows how wrapping your reducer with [Redux Undo](https://github.com/omnidan/redux-undo) lets you add a Undo/Redo functionality to your app with a few lines of code.

## Shopping Cart

Run the [Shopping Cart](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/shopping-cart
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with [Redux Logger](https://github.com/fcomb/redux-logger) and conditional dispatching of actions with [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware.

## Tree View

Run the [Tree View](https://github.com/reduxjs/redux/tree/master/examples/tree-view) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/tree-view
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/tree-view"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example demonstrates rendering a deeply nested tree view and representing its state in a normalized form so it is easy to update from reducers. Good rendering performance is achieved by the container components granularly subscribing only to the tree nodes that they render.

This example includes tests.

## Redux essentials

The example app from the ["Redux Essentials" tutorial](../tutorials/essentials/part-1-overview-concepts.md) is a larger "real world"-type app that shows:

- Use of Redux Toolkit and the React Redux hooks API
- A "feature folder" structure with single-file "slices" for Redux logic
- Async logic, data fetching, and loading state
- CRUD operations
- Normalized state

Run the [Redux Essentials](https://github.com/reduxjs/redux-essentials-example-app) example:

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/master"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Redux fundamentals

Run the [Redux fundamentals](https://github.com/reduxjs/redux-fundamentals-example-app) example:

```sh
git clone https://github.com/reduxjs/redux-fundamentals-example-app.git

cd redux-fundamentals-example-app
npm install
npm start
```

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/master"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Universal

Run the [Universal](https://github.com/reduxjs/redux/tree/master/examples/universal) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/universal
npm install
npm start
```

This is a basic demonstration of [server rendering](../recipes/ServerRendering.md) with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state.

## Real World

Run the [Real World](https://github.com/reduxjs/redux/tree/master/examples/real-world) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/real-world
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world):

<iframe class="codesandbox" src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/real-world" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools.

## More Examples

You can find more examples in the [Redux Apps and Examples](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)
page of the [Redux Addons Catalog](https://github.com/markerikson/redux-ecosystem-links).
