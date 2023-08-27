# Components, Composition, and Reusability

## Components Categories

| Stateless                                                           | Stateful              | Structural                                      |
| ------------------------------------------------------------------- | --------------------- | ----------------------------------------------- |
| No State                                                            | Have state            | "Pages", "layouts", or "screens" of the app     |
| Can recieve props and simply present received data or other content | Can still be reusable | Result of composition                           |
| Usually small and reusable                                          |                       | Can be huge and non-reusable(but don't have to) |

## Component Composition

Combining different components using the children prop( or explicity defined props)
Uses:

1. Create highly reusable and flexible components.
2. Fix prop drilling(great for layouts).

- Possible because components don't need to know their children in advance.
