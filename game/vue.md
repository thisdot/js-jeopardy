# Vue questions 

Q1. How can you create a new vue instance?<br>
A1. with the funtion new Vue ({ })

Q2. What is the difference between v-bind and v-model?<br>
A2. v-bind is used for one way data binding and v-model is for two way binding.

Q3. How can you custom a filter in vue.js<br>
A3. By using the method vue.filter(a, function(b))

Q4. Is it possible to register a component inside another component? How?<br>
A4. yes, you can do it by writing:
export default {
 el: '#your-element'
 components: {
     'your-component'
 }
}

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