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

* React does not touch the DOM. React only renders. It doesn't know where the render result will go \*\*

1. TRIGGER 💥
2. RENDER PHASE 🔄 Updated React Elements → New Virtual DOM → Reconciliation + Diffing → Updated Fiber Tree → List of DOM Updates.
3. COMMIT PHASE 🚀 Updated DOM
4. BROWSER PAINT 🖼️
