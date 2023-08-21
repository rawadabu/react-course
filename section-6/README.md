# State, Events and Forms: Interactive Components

- Handling events.
- State to update the UI.
- Building forms the "React way".
- Controlled elements.

# What is State?

State is the most important concept in React.

## What is state and why do we need it?

State is a data that a component _can hold over time_, necessary for information that it needs to _remember_ throughout the app's lifecycle.
We can use it as a _memory_, to hold this data over time.
Updating component state triggers React to re-render the component.

- State is a _tool_. Mastering state will unlock the power of React development

## STATE VS. PROPS

_State_

- is an internal data, owned by component
- Updating state causes component to re-render.
- Used to make components interactive.

_Props_

- is an external data, owned by parent component, and its similar to function parameters
- Read-only
- Recieving new props causes component to re-render.
  Usually when the parent's state has been updated.

* Whenever a piece of state is passed as a prop, when that state updates, both components will re-render and updated.
