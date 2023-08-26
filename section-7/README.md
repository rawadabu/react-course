# Thinking in React: State Management

Thinking in react is a core skill, how and when to use react tools.

- Break the desired UI into components and establish the component tree.
- Build a static version in React(without state).
- Think about state: when, types and where to place each piece of state.
- Establish data flow: one-way data flow, child-to-parent communication and accessing global state.

## What is _State Management_?

We can use _useState_ in order to track data that changes over the life cycle of an application.

| Local State                                                                                               | Global State                                                                |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| State needed only by one or few component                                                                 | State that many component might use                                         |
| Defined in a component and only that component and child component have access to it by passing via props | Share state that is accessible to every component in the entire application |

## When and where to use?

Please refer to lect. 79.
