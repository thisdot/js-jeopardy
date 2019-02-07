# Webpack questions

Q1. Can we use typescript in webpack?<br>
A1. Yes, you only need to install typescript and then write your configuration in webpack.config.ts

Q2. One way of disambiguate your development and production builds is to export a function from your webpack config instead of exporting an object. This function will have which parameters?<br>
A2. The function will have 2 parameters, first an environment and second an options map.

Q3. What happens with devServer if we use webpack dev-server with a Node.js API?<br>
A3. Everything inside devServer will be ignored.

Q4. In a Rule, the property issuer is matched with the issuer, while the properties test, include, exclude and resource are matched with..?<br>
A4. The resource.

Q5. How can you prevent webpack from parsing some specific files that match a given espression?<br>
A5. With noParse: xxx inside module.

Q6. Rule.exclude is a shortcut of...<br>
A6. Rule.resource.exclude

Q7. An object with { root, amd, commonjs, ... } is only allowed for which library target?<br>
A7. libraryTarget: 'umd'

Q8. By default, the hints property of performance is set to...<br>
A8. "warning".

Q9. True or false: The "minimal" value of stats tells webpack to only output when errors happen.<br>
A9. False. When error or new compilation happens.

Q10.  With Webpack, you can optimized image loading using which utility?<br>
A10. url-loader.