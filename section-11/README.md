# How React Works Behind the Scenes 💥

## Component VS. Instances VS. Element

1. Components are what we write in order to describe a piece of the user interface, and the component is just a regular JavaScript function, but it's a function that returns React elements.
2. Component Instance: Instances are created when we "use" components <Tab/>, it has its own state and props and has a lifecycle(can be "born", "live", and "die"). -> Returns React Element.
3. React Element: JSX in converted to React.createElement() function calls, a React element is the result of these function calls. -> Inserted to DOM.
4. -> To User Interace on the screen.

## How components are displayed on the screen?

1. Render is triggered(By updating state somewhere).
2. Render Phase(React calls component functions and figures out how DOM should be updated).
3. Commit Phase(React actually writes to the DOM, updating, inserting, and deleting elements).
4. Browser Paint(Browser will notify that the DOM changed, and produces the visual change that users see on their screens).

- In React, rendering is NOT updating the DOM or displaying elements on the screen, Rendering only happens internally inside React, it does not produce visual changes.

- Renders are not triggered immediately, but scheduled for when the JS engine has some "free time"

## How Rendering Woks

### The Render Phase

- What is the RECONCILIATION and why do we need it?
  Why do we need the virtual DOM, a reconciler and those Fiber trees? why not update the entire DOM whenever state changes somewhere in the app? BECAUSE that would be inefficient and wasterful:

  1. Writing to the DOM is (relatively) slow.
  2. Usually only a small part of the DOM needs to be updated.
     Now imagine we are adding a feedback to some course in Udemy, in React, only the feedBack element will be updated, and the rest of the DOM should just stay the same.

- How does React actually do that? How does it know what changed from one render to another?
  Reconciliation(Fiber): Deciding which DOM elements actually need to be inserted, deleted, or updated, in order to reflect the latest state changes.
- Fiber tree(UNIT OF WORK): internal tree that has a "fiber" for each component instance and DOM element, and fibers are NOT re-created on every render.
- Work can be done asynchronously: Rendering process can be split into chunks, tasks can be prioritized, and work can be paused, reused, or thrown away.

`EVERYTHING HAPPENS BEHIND THE SCENES`

### The Commit Phase and Browswe Paint

- React writes to the DOM: insertions, deletions, and updates(list of DOM updates are "flushed" to the DOM).
- Committing is synchronous: DOM is updated in one go, it can't be interrupted. This is necessary so that the DOM never shows partial results, ensuring a consistent UI(in sync with state at all times).
- After the commit phase completes, the workInProgress fiber tree becomes the current tree for the net render cycle.

> React does not touch the DOM. React only renders. It doesn't know where the render result will go

1. TRIGGER 💥
2. RENDER PHASE 🔄 Updated React Elements → New Virtual DOM → Reconciliation + Diffing → Updated Fiber Tree → List of DOM Updates.
3. COMMIT PHASE 🚀 Updated DOM
4. BROWSER PAINT 🖼️

## How Diffing Works

Diffing uses 2 fundamental assumptions(rules):

1. Two elements of different types will produce different trees.
2. Elements with a stable key prop stay the same across renders.

> Thiss allows React to go from 1,000,000,000 [O(n^3)] to 1000 [O(n)] operation per 1000 elements!!!!

## The Key Prop

👉 Special prop that we use to tell the diffing algorithm that an element is UNIQUE.

👉 Allows React to distinguish between multiple instances of the same component type.

👉 When a key _stays the same across renders_, the element will be kept in the DOM(even if the position in the tree changes).

👉 When a key _changes between renders_, the element will be destroyed and a new one will be created(even if the position in the tree is the same as before).

## Rules for Render Login: Pure Components

The two types of logic:

1. Render Logic: The code that is executed as soon as the component rendered.

   1. Code that lives at the top level of the component function.
   2. Participates in descriping how the component view looks like(the return scope of the function).

2. Event handler functions:
   1. Executed as a consequence of the event that the handler is listening for(onChange for example).
   2. Code that actually does thing: update state, perform an HTTP request, read an input field, navigate to another page, etc.

> Components must be pure when it comes to render logic: given the same props(input), a component instance should always return the same JSX(output).

Render login must produce no side effect: no interaction with the "outisde world" is allowed. So in render logic:

👉 Do NOT perform network requests(API calls).

👉 Do NOT start times.

👉 Do NOT directly use the DOM API.

👉 Do NOT mutate objects or variables outside of the function scope.

👉 Do NOT update state (or refs): this will create an infinite loop!

## Refresher: Functional Programming Principles

- Side effect: dependency on or modification of any data outside the function scope. "Interaction with the outside world". Examples: mutating external variables, HTTP request, writing to DOM.

- Pure function: a function that has no side effect.
  1. Does not change any variables outside its scope.
  2. Given the same input, a pure function always returns the same output.

> Side effects are not bad! A program can only be useful if it has some iteraction with the outside world.

## State Update Batching

### How State Updates Are Batched

Lecture 135.
Imaging having 3 states in one event handler function, and all these states updated, so would the component updated 3 times? NO!

👉 All the states will get into just one state update for the entire event handler _THEY ARE BATCHED_.

👉 Updating state in React is ASYNCHRONOUS, so updated state variables are NOT immediately available after setState call, but only after the RE-RENDER(This also applies when only one state variable updated).
