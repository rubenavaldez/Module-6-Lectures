var express = require("express");
var app = express();

//Lesson 1

//Helmet helps you secure your Express apps by setting various HTTP headers.
//Install the Helmet package, then require it.

//lesson 1

//Lesson 2

//Hide Potentially Dangerous Information Using helmet.hidePoweredBy()

//Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express. X-Powered-By: Express is sent in every request coming from Express by default. The helmet.hidePoweredBy() middleware will remove the X-Powered-By header. You can also explicitly set the header to something else, to throw people off. e.g. app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

//Lesson 2
