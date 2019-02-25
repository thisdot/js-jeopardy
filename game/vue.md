# Vue questions

Q1. How can you create a new vue instance?<br>
A1. with the funtion new `Vue ({ })`

Q2. What is the difference between v-bind and v-model?<br>
A2. v-bind is used for one way data binding and v-model is for two way binding.

Q3. How can you custom a filter in vue.js<br>
A3. By using the method `vue.filter(a, function(b))`

Q4. Is it possible to register a component inside another component? How?<br>
A4. yes, you can do it by writing:

```Typescript
export default {
 el: '#your-element'
 components: {
     'your-component'
 }
}
```

Q5. Can you use v-else without or before the v-if or v-else-if?<br>
A5. No. Following a logical process, v-else need to immediately follow a v-if or a v-else if, or it wouldn't be recognized.

Q6. True or false: the double mustaches interprets the data as HTML.<br>
A6. False. It interprets data as plain text.

Q7. Which directive can we use to output HTML?<br>
A7. the v-html directive

Q8. True or false: there is a way to create a component without given it a name.<br>
A8. False. All ways of creating a component demands a name.

Q9. What does it means that a component is global registered?<br>
A9. It means the can be used in the template of any root Vue instance

Q10. What are the 2 types of declaring a prop?<br>
A10. Props can be listed as an array of strings and as an object.

Q11. How would the Vue lifecycle continue if there's no "el" option created?
A11. Vue would execute `vm.$mount(el)`.

Q12. What happens with the UI part of an app if it only has one way data binding?
A12. It means the View (UI) does not update automatically when data model is change.

Q13. What does this sign | means it Vue?
A13. The | sign denotes a filter.

Q14. What does it mean that v-ref is a literal directive?
A14. It means that is a directive that doesn't create data binding, it only take the attribute value as a literal string.

Q15. When multiple dependencies change, how many times will be an expression that depends on it updated?
A15. Thanks to async batch updates, an expression will only be updated once every event loop, even when multiple dependencies change.

Q16. How many statements can be put in inline expressions?
A16. Only one statement can be put in inline expressions.

Q17. v-transition is the only literal directive that has a special feature to make it reactive. What is the syntax of that feature?
A17. v-transition can be made reactive by using double mustache.

Q18. Why is v-pre an empty directive?
A18. Because it doesn't expect an attribute value.

Q19. Inline expressions should only be used for simple booleans or string concatenations. What should you use for more complicated logic?
A19. computed properties.

Q20. How can you register a custom directive?
A20. By using Vue.directive(id, definition) method.

Q21. The definition object inside a custom directive can provide several hook functions of 3 types: bind, update and unbind. Which type is optional?
A22. They are all optional.

Q22. Once a custom directive is created, what is the syntax to use it in Vue templates?
A22. To use a custom directive in a template, you need to add the Vue.js prefix to its name, like this:

```
v-my-directive= "someValue"
```

Q23. True or false: to create contastants in vue.js, you should use the syntax "const".
A23. True.

Q24. What is vue-resource for?
A24. vue-resource is a HTTP request library, to handle web requests and responses using a XMLHttpRequest or JSONP

Q25. What is the directive for repeating a template element?
A25. v-repeat

Q26. After injecting a router in a component, how can we access it?
A26. By using this.\$router

Q27. How do you specify the target location for a router-link ?
A27. With the to prop inside the `<router-link>` tag.

Q28. True or false: Using `<router-link>` is the same as using the hard-coded `<a href="something">`
A28. False, is not the same. `<router-link>` is prefered because it works the same way in both HTML5 history mode and hash mode, among other reasons.

Q29. What type of props are exact, append and replace?
A29. They are all boolean props of `<router-link>`

Q30. What is automatically created when a `<router-link>` gets its target route activated?
A30. an active CSS class in the form of `.router-link-active`

React

Q11. What is a virtual DOM?
A11. A virtual DOM is a representation of the DOM, like a lightweight copy. It has all the same objets with the same properties, bit it doesn't have the power to change the view like the real DOM.

Q12. How do we comment in JSX?
A12. By using `{ / * */ }`

Q13. What would happen if we use XML syntax to make a comment in our React code?
A13. The complier wiould read it as a DOM Node.

Q14. How can you pass a JavaScript expression inside an HTML tag?
A14. By surrounding the JS expression with brackets { }

Q15. True or false: arbitraty inputs of components are called Elements.
A15. False. They are called props.

Q16. Which method in a React Component is called after the component is rendered for the first time?
A16. componentDidMount

Q17. What happen if you call setState( ) into a render( ) method?
A17. setState( ) invokes render, so it would create an infinite loop.

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

Node

Q11. Where does Node execute Javascript?
A11. In the server.

Q12. Why is Node.js Single-threaded?
A12. For async processing, which results in more performance and scalability.

Q13. When is a callback function called?
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
A20. We should attach a handler for uncaughtException event at the Process level
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

Q26. Node is an **\_\_\_** based system.
A26. Event.

Q27. If a module name has the prefix . / ., what does it mean?
A27. It means the module is a local file.

Q28. How do you make elements available outside its module?
A28. With the keyword "exports" .

Q29. What will happen if you assign something directly to exports?
A29. It will lose the shortcut to module.exports.

Q30. True or false: The core module url includes methods for URL resolution and parsing, and methods for files paths.
A30. False. It doesn't include methods for files paths, that is in the path module.

Webpack

Q11. True or false: You must use Webpack even if your app is small and many static assets because you still need to build one JavaScript file to serve to the cliente.
A11. False

Q12. What is a bundle?
A12. Bundle is the output file generated by webpack. It contains all of the modules which are used in application.

Q13. Bundles generations process is regulated by which file?
A13. Is regulated by webpack config file.

Q14. Does webpack look into a defined path for files that match your configuration like Gulp or Grunt?
A14. No, webpack analyzes the whole project, it looks through all the dependecies.

Q15. Where does wbpack looks to start bulding the bundle?
A15. At the entry point.

Q16. True or false: the application start executing at the entry objetc.
A16. True.

Q17. What is thename of the JavaScript object that are used to customize webpack's build process?
A17. They are plugins.

Q18. Which part of a plugin does webpack compiler call?
A18. The apply compiler inside the plugin.

Q19. True or false: Loaders can work both sync or async.
A19. True.

Q20. Why is server-side compression not recommended?
A20. Because it addes load on CPU and increases response time.

Q21. What does CommonsChunkPlugin do?
A21. It creates a separate file of common modules shared between multiple entry points.

Q22. Which plugin allows you to create global constants that can be configured at compile time?
A22. DefinePlugin.

Q23. True or false: Webpack lets you use require() on local static assets.
A23. True.

Q24. Is require() executed in Node.js or in the browser?
A24. None, require() is never executed in the browser or Node, Webpack builds a new JS file to replace it and that's what the browser or Node executes.

Q25. What does HTMLWebpackPlugin does?
A25. It simplifies the creation of HTML files.

Q26. True or false: loaders work at bundle or chunk level.
A26. False. Loaders work at the individual file level.

Q27. Which plugin can you use to extract text from a bundle into a separate file?
A27. ExtractTextWebpackPlugin

Q28. How is the process of removing unsued code called in Webpack?
Q28. It's called tree-shaking

Q29. Which feature of Webpack can you use if you want to fetch things on demand as the code paths require them instead of downloading the entire codebase from the start?
A20. Code splitting and lazy loading.

Q30. True or false: spliting your CSS from your JavaScript when bundling for production is a bad practice.
A30. False, is a good practice.
