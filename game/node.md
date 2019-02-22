# Node questions 

Q1. What does npm stand for and what is the most common way of installing it?<br>
A1. npm means node package manager and it’s included when you install Node.js so it’s usually install just by downloading Node.js

Q2. One of the main advantages of Node is that is based on Javascript. From a frontender perspective, why is that a benefit?<br>
A2. Because you can use the same language, JavaScript, in back and front-end, and most frontenders already know JavaScript.

Q3. Which part of this sentence is wrong? <br>
“You can expose a module using module.exports and you can import it using module.import”<br>
A3. The first method is correct, but to import a module you should use require( ) function.

Q4. Node was built based on which browser’s Javascript engine?<br>
A4. V8 Chrome.

Q5. How can you know which Node version is installed in a computer?<br>
A5. By writing in the console this command: node --version

Q6. How would you execute the app my-app.js in node.js? <br>
A6. By using the command: node my-app.js

Q7. get, post, put and delete are…<br>
A7. HTTP methods.

Q8. By default, is Node.js asynchronous or synchronous?<br>
Q8. Is asynchronous.

Q9. What is the default scope in Node.js application. <br>
A9. By default, Node.js has a local scope.

Q10. Simple or complex functionality organized in JavaScript files which can be reused throughout your Node.js application is called...<br>
A10. A module.

Q11. What is a virtual DOM?
A11. A virtual DOM is a representation of the DOM, like a lightweight copy. It has all the same objets with the same properties, bit it doesn't have the power to change the view like the real DOM.

Q12. How do we comment in JSX?
A12. By using { / * */  }

Q13. What would happen if we use XML syntax to make a comment in our React code?
A13. The complier wiould read it as a DOM Node.

Q14. How can you pass a JavaScript expression inside an HTML tag?
A14. By surrounding the JS expression with brackets { }

Q15. True or false: arbitraty inputs of components are called Elements.
A15. False. They are called props.

Q16. Which method in a React Component is called after the component is rendered for the first time?
A16. componentDidMount

Q17. What happen if you call setState( ) into a render( ) method?
A17.  setState( ) invokes render, so it would create an infinite loop.

Q18. True or false: React merges the object you provide into the current state using State ( )
A18. False. The correct is setState ( )

Q19. What is the name of functions that doen't change its results for the same set of inputs?
A19. They are called Pure functions.

Q20. React keeps track of items changed from a list using....
a20. Keys.

Q21. How can we prevent default behavio in React?
A21. By using preventDefault()

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

var React = require('react');

A29. require is obsolete, we should use import:

import React from 'react'

Q30. If an element updates, what does the virtual DOM do?
A30. it updates the JSX.

Q11. Where does Node execute Javascript?
A11. In the server.

Q12. Why is Node.js Single-threaded?
A12. For async processing, which results in more performance and scalability.

Q13.  When is a callback function called?
A13. When a task is completed.

Q15. What is a "callback hell"?
A15. Is the result of heavily nested callback that make the code unreadable and hard to mantain.
Q16. What REPL stands for?
A16. Read, evaluate, print and loop.

Q17. What is REPL used for?
A17. REPL is used to execute ad-hoc JavaScript statements and it allows for the easy creation of CLI (Command Line Interface) applications.

Q18. What does modularization consist in?
A18. Breaking out callbacks into independent functions so they can be called with some parameters.

Q19. Modularizing is used to fix what?
A19. Modularizing fixes callback hell.

Q20. Which method should we use to resolved unhandled exceptions?
A20. We should  attach a handler for uncaughtException event at the Process level
Q21. What is tipically the first argument passed to a callback handler?
A21. An optional error object.

Q22. True or false: In Node.js, declaring a variable outside of a function's scope makes it global so it binds it to the window object.
A22. False. Declaring a variable outside of a function’s scope binds it only to the module’s own scope.

Q23. Whatare net modules for?
A23. They are used to creat TCP servers and TCP clients.

Q24. Which function is used to call the modules?
A24. The function require

Q25. http, fs, querystrying and url are all...
A25. Core modules

Q26. Node is an _______ based system.
A26. Event. 

Q27. If a module name has the prefix . / ., what does it mean?
A27. It means the module is a local file.

Q28. How do you make elements available outside its module?
A28. With the keyword "exports" .

Q29. What will happen if you assign something directly to exports?
A29. It will lose the shortcut to module.exports.

Q30. True or false:  The core module url includes methods for URL resolution and parsing, and methods for files paths.
A30. False. It doesn't include methods for files paths, that is in the path module.