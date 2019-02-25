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
A6. By using the command: `node my-app.js`.

Q7. get, post, put and delete are…<br>
A7. HTTP methods.

Q8. By default, is Node.js asynchronous or synchronous?<br>
Q8. Is asynchronous.

Q9. What is the default scope in Node.js application. <br>
A9. By default, Node.js has a local scope.

Q10. Simple or complex functionality organized in JavaScript files which can be reused throughout your Node.js application is called...<br>
A10. A module.

Q11. Where does Node execute Javascript?<br>
A11. In the server.

Q12. Why is Node.js Single-threaded?<br>
A12. For async processing, which results in more performance and scalability.

Q13. When is a callback function called?<br>
A13. When a task is completed.

Q15. What is a "callback hell"?<br>
A15. Is the result of heavily nested callback that make the code unreadable and hard to mantain.

Q16. What REPL stands for?<br>
A16. Read, evaluate, print and loop.

Q17. What is REPL used for?<br>
A17. REPL is used to execute ad-hoc JavaScript statements and it allows for the easy creation of CLI (Command Line Interface) applications.

Q18. What does modularization consist in?<br>
A18. Breaking out callbacks into independent functions so they can be called with some parameters.

Q19. Modularizing is used to fix what?<br>
A19. Modularizing fixes callback hell.

Q20. Which method should we use to resolved unhandled exceptions?<br>
A20. We should  attach a handler for `uncaughtException` event at the Process level

Q21. What is tipically the first argument passed to a callback handler?<br>
A21. An optional error object.

Q22. True or false: In Node.js, declaring a variable outside of a function's scope makes it global so it binds it to the window object.<br>
A22. False. Declaring a variable outside of a function’s scope binds it only to the module’s own scope.

Q23. What are net modules for?<br>
A23. They are used to creat TCP servers and TCP clients.

Q24. Which function is used to call the modules?<br>
A24. The function require

Q25. http, fs, querystrying and url are all...<br>
A25. Core modules

Q26. Node is an _______ based system.<br>
A26. Event. 

Q27. If a module name has the prefix `./.`, what does it mean?<br>
A27. It means the module is a local file.

Q28. How do you make elements available outside its module?<br>
A28. With the keyword `exports` .

Q29. What will happen if you assign something directly to exports?<br>
A29. It will lose the shortcut to `module.exports`.

Q30. True or false:  The core module url includes methods for URL resolution and parsing, and methods for files paths.<br>
A30. False. It doesn't include methods for files paths, that is in the path module.