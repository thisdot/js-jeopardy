# Vue questions

Q1. How can you create a new vue instance?<br>
A1. with the funtion new `Vue ({ })`

Q2. What is the difference between `v-bind` and `v-model`?<br>
A2. v-bind is used for one way data binding and v-model is for two way binding.

Q3. How can you custom a filter in vue.js?<br>
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

Q5. Can you use `v-else` without or before the `v-if` or `v-else-if`?<br>
A5. No. Following a logical process, `v-else` need to immediately follow a `v-if` or a `v-else if`, or it wouldn't be recognized.

Q6. True or false: the double mustaches interprets the data as HTML.<br>
A6. False. It interprets data as plain text.

Q7. Which directive can we use to output HTML?<br>
A7. the `v-html` directive.

Q8. True or false: there is a way to create a component without given it a name.<br>
A8. False. All ways of creating a component demands a name.

Q9. What does it means that a component is global registered?<br>
A9. It means the can be used in the template of any root Vue instance

Q10. What are the 2 types of declaring a prop?<br>
A10. Props can be listed as an array of strings and as an object.

Q11. How would the Vue lifecycle continue if there's no `el` option created?<br>
A11. Vue would execute `vm.$mount(el)`.

Q12. What happens with the UI part of an app if it only has one way data binding?<br>
A12. It means the View (UI) does not update automatically when data model is change.

Q13. What does this sign `|` means it Vue?<br>
A13. The `|` sign denotes a filter.

Q14. What does it mean that `v-ref` is a literal directive?<br>
A14. It means that is a directive that doesn't create data binding, it only take the attribute value as a literal string.

Q15. When multiple dependencies change, how many times will be an expression that depends on it updated?<br>
A15. Thanks to async batch updates, an expression will only be updated once every event loop, even when multiple dependencies change.

Q16. How many statements can be put in inline expressions?<br>
A16. Only one statement can be put in inline expressions.

Q17. `v-transition` is the only literal directive that has a special feature to make it reactive. What is the syntax of that feature?<br>
A17. v-transition can be made reactive by using double mustache.

Q18. Why is `v-pre` an empty directive?<br>
A18. Because it doesn't expect an attribute value.

Q19. Inline expressions should only be used for simple booleans or string concatenations. What should you use for more complicated logic?<br>
A19. computed properties.

Q20. How can you register a custom directive?<br>
A20. By using `Vue.directive(id, definition)` method.

Q21. The definition object inside a custom directive can provide several hook functions of 3 types: bind, update and unbind. Which type is optional?<br>
A22. They are all optional.

Q22. Once a custom directive is created, what is the syntax to use it in Vue templates?<br>
A22. To use a custom directive in a template, you need to add the Vue.js prefix to its name, like this:

```typescript
v-my-directive= "someValue"
```

Q23. True or false: to create constants in vue.js, you should use the syntax `const`.<br>
A23. True.

Q24. What is `vue-resource` for?<br>
A24. `vue-resource` is a HTTP request library, to handle web requests and responses using a XMLHttpRequest or JSONP.

Q25. What is the directive for repeating a template element?<br>
A25. `v-repeat`

Q26. After injecting a router in a component, how can we access it?<br>
A26. By using `this.\$router`

Q27. How do you specify the target location for a `router-link`?<br>
A27. With the to prop inside the `<router-link>` tag.

Q28. True or false: Using `<router-link>` is the same as using the hard-coded `<a href="something">`<br>
A28. False, is not the same. `<router-link>` is prefered because it works the same way in both HTML5 history mode and hash mode, among other reasons.

Q29. What type of props are exact, append and replace?<br>
A29. They are all boolean props of `<router-link>`

Q30. What is automatically created when a `<router-link>` gets its target route activated?<br>
A30. An active CSS class in the form of `.router-link-active`.