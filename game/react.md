# React questions

Q1. Is React.js a framework or a library? Why?<br>
A1. It’s a library, is not a framework because it doesn’t come with limitations on how to design an entire system, it only provides a set of methods that act as a skeleton for the component based development. It doesn’t make subjective affirmations on how you should build your entire app. 

Q2. What is the main benefit of a component?<br>
A2. That is re-usable.

Q3. What is the conceptual difference between states and props?<br>
A3. Props are immutable and you can use it to pass data to a child component. States can be changed, should be use to store data and should not be accessed from child components. 

Q4. JSX syntax is similar to which language? Why we use it when coding with React?<br>
A4. JSX uses XML syntax so is pretty similar to HTML. It’s a preprocessor used to make the code easier and more intuitive to read. 

Q5. Is the same to use `.bind(this)` and an arrow function when passing a function to a child component?<br>
A5. No. `.bind(this)` will create a new function while an arrow function won’t. So adding a function to a child component using arrow functions will be 1 less step.  

Q6. True or false: components name should be in all lowercase letters.<br>
A6. False. First letter should be capital.

Q7. The command `react -v` would return…<br>
A7. The react version that is installed.

Q8. How can you write JavaScript in JSX?<br>
A8. You can use any JavaScript expression in JSX by putting them inside curly brackets {}.

Q9. The event method `onclick( )` is often wrong spelled in vanilla JavaScript as onClick, which can lead to problems because HTML will render it but it will fail validation. Is this the case in React too?<br>
A9. No, is the opposite. In React it should be always written as onClick because all attributes in React are write with the camelCase format.

Q10. Is this right if we want to assign a class in React? Why? <br>

```Typescript
class = “a”
```
A10. Is wrong. To create a class in React you should use className instead of class.

Q11. What is a virtual DOM?
A11. A virtual DOM is a representation of the DOM, like a lightweight copy. It has all the same objets with the same properties, bit it doesn't have the power to change the view like the real DOM.

Q12. How do we comment in JSX?
A12. By using `{ / * */  }`

Q13. What would happen if we use XML syntax to make a comment in our React code?
A13. The complier wiould read it as a DOM Node.

Q14. How can you pass a JavaScript expression inside an HTML tag?
A14. By surrounding the JS expression with `{ }`

Q15. True or false: arbitraty inputs of components are called Elements.
A15. False. They are called props.

Q16. Which method in a React Component is called after the component is rendered for the first time?
A16. `componentDidMount()`

Q17. What happen if you call `setState( )` into a `render( )` method?
A17.  `setState( )` invokes render, so it would create an infinite loop.

Q18. True or false: React merges the object you provide into the current state using `State( )`
A18. False. The correct is `setState ( )`

Q19. What is the name of functions that doen't change its results for the same set of inputs?
A19. They are called Pure functions.

Q20. React keeps track of items changed from a list using....
a20. Keys.

Q21. How can we prevent default behavio in React?
A21. By using `preventDefault()`

Q22. True or false: React supports ES6 syntax.
A22. True.

Q23. To be able to use componentWillUpdate, render andcomponentDidUpdate, what needs to happen to shouldComponentUpdate?
A23. It should be set to true.

Q24. How can we provoke an update without using shouldComponentUpdate?
A24. With forceUpdate

Q25. The method findDOMNode gives you what?
A25. It returns the DOM element where a component was mounted.

Q26. What is the ReactDOM method for unmounting a component?
A26. unmountComponentAtNode

Q27. React 16 depends on the collection of which types?
A27. Map and Set

Q28. When does a class component become an error boundary?
A28. When it defines at least one (it also can be both) of these lifecycle methods: static getDerivedStateFromError and/or componentDidCatch()

Q29. This snippet would be ok in ES5. How should it be in ES6?
```Typescript
var React = require('react');
```
A29. require is obsolete, we should use import:
```Typescript
import React from 'react'
```
Q30. If an element updates, what does the virtual DOM do?
A30. it updates the JSX.
