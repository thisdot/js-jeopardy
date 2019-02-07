# React questions

Q1. Is React.js a framework or a library? Why?<br>
A1. It’s a library, is not a framework because it doesn’t come with limitations on how to design an entire system, it only provides a set of methods that act as a skeleton for the component based development. It doesn’t make subjective affirmations on how you should build your entire app. 

Q2. What is the main benefit of a component?<br>
A2. That is re-usable.

Q3. What is the conceptual difference between states and props?<br>
A3. Props are immutable and you can use it to pass data to a child component. States can be changed, should be use to store data and should not be accessed from child components. 

Q4. JSX syntax is similar to which language? Why we use it when coding with React?<br>
A4. JSX uses XML syntax so is pretty similar to HTML. It’s a preprocessor used to make the code easier and more intuitive to read. 

Q5. Is the same to use .bind(this) and an arrow function when passing a function to a child component?<br>
A5. No. .bind(this) will create a new function while an arrow function won’t. So adding a function to a child component using arrow functions will be 1 less step.  

Q6. True or false: components name should be in all lowercase letters.<br>
A6. False. First letter should be capital.

Q7. The command react -v would return…<br>
A7. The react version that is installed.

Q8. How can you write JavaScript in JSX?<br>
A8. You can use any JavaScript expression in JSX by putting them inside curly brackets {}.

Q9. The event method onclick( ) is often wrong spelled in vanilla JavaScript as onClick, which can lead to problems because HTML will render it but it will fail validation. Is this the case in React too?<br>
A9. No, is the opposite. In React it should be always written as onClick because all attributes in React are write with the camelCase format.

Q10. Is this right if we want to assign a class in React? Why? <br>
class = “a”<br>
A10. Is wrong. To create a class in React you should use className instead of class.