# Working with Components, Props, and JSX

## What is JSX

- Declarative syntax to describe what components look like and how they work.
- Components must return block of JSX.
- Extension of JS that allows us to embed JS, CSS and React components into HTML.
- Conversion HTML to JS happens using BABEL.

Everything happens without any DOM manipulaton at all, So there are no Query selectors, no add event listeners, no class list, no text content properties anywhere to be seen here

- React is an abstaction away from DOM: we never touch the DOM directly!
- JSX works essentially like HTML, but we can enter "JavaScript mode" by using {}.
- We can place JavaScript expressions inside {}.

## Conditional Rendering With &&

Terniary operator `condition 1` > `condition 2` ? `True Part` : `false part`

## Extracting JSX into a new component and Destructing

## React Fragments

If we don't want to show a sentence for a specific condition.
Basically lets us group some elements without leaving any trace in the HTML tree, so in the DOM.
`<> </>` or `<React.Fragment> </React.Fragment>` its like `<div> </div>`
