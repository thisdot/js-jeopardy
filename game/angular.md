# Angular questions

Q1. Is angular a framework? Why? <br>
A1. Yes is a framework. Because it gives you a big structure to order your whole architecture, it gives you a predefined system that demands a certain way of doing things.

Q2. What does “banana in a box” refers to? <br>
A2. It’s a common way to called this sign, which is used for two way data binding: `[( )]`

Q3. True or false?: Angular changes the data we see by directly changing the HTML.<br>
A3. False. Angular changes the view but through the DOM.

Q4. All HTML syntax is valid in Angular, except for one exception. What it is? <br>
A4. The `<script>` tag.

Q5. A template expression is what goes…<br>
A5. inside brackets `{{ }}`.

Q6. Angular and AngularJS are the names of which versions?<br>
A6. AngularJS is the version 1, Angular is the name for versions 2 and higher.

Q7. Angular is based on which language?<br>
A7. Angular is based on TypeScript, a superset of JavaScript that compiles to clean JavaScript output.

Q8. Angular creators purposely skipped a number for a version and jumped to +2 number to avoid a confusion due to the misalignment of the router package’s version, which was already distributed. So the Angular version that doesn’t exist is...<br>
A8. Angular 3.

Q9. How do you get only one-way binding in Angular?<br>
A9. With `[]`.

Q10. Can you use ng-repeat in Angular?<br>
A10. No, `ng-repeat` is used in AngularJS, in Angular is ngFor.

Q11. What are structural directives use for?<br>
A11. To manipulate the DOM

Q12. True or false: To pass data from parent to children you can use output()<br>
A12. False. You should use `@input()`.

Q13. How can you call an HTML tag to use it in a variable?<br>
A13. With # .

Q14. In the next example, what does E do?<br>

```Typescript
.directive('itemWidget', [function() {
	return{
		templateUrl:'saleItem.html',
		restrict:'E'
	}
}]);
```

A14. It restricts the directive to be used as an Element.

Q15. True or false: anything wrote with the asterisk syntax is the final form in the DOM.<br>
A15. False. The asterisk syntax is not actually rendered, it doesn't end up in the DOM.

Q16. NgSwitch is a set of which directives?<br>
A16. `NgSwitch`, `NgSwitchCase`, `NgSwitchDefault`

Q17. Can we combine restrict keys?<br>
A17. Yes we can

Q18. Angular expressions can be written inside something regular JavaScript expressions can't. Where's that?<br>
A18. AngularJS expressions can be written inside HTML.

Q19. What is ng-bind and where we can't use it?<br>
A19. ng-bind is 2 way binding in AngularJS, it doesn't exist in Angular 2 and further.

Q20. What does the restrict key "M" do to a directive?<br>
A20. It specifies that the directive can be use as a HTML comment.

Q21. Would this Angular CLI command create a new component?<br>
ng generate new component my-new-component
A21. No. The correct command to do that is ng generate component my-new-component

Q22. What does AsyncPipe do?<br>
The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted.

Q23. How will Angular read a script tag inside a template?<br>
A23. Angular would read it as unsafe and sanitizes it, which means it would delete the &lt;script> but it will keep the safe part like the text content.

Q24. Which Anguar CLI command is used for running the project?<br>
A24. ng serve

Q25. Double courly brackets is the special syntax used to write what?<br>
A25. An interpolation.

Q26. Event binding consist on data flowing in which direction?<br>
A26. From the DOM to the component.

Q27. Is alterEgo an optional field?<br>
A27. Yes, is optional.

Q28. What information .ng-dirty give us?<br>
A28. It tells that a form has been modified by the user.

Q29. In a dependency injection, which element asks dependencies for external sources?<br>
A29. A class.

Q30. What are decorators for?<br>
A30. To attach metadata to a class, property, method or parameter.
