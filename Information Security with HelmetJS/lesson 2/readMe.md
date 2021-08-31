#Information Security with HelmetJS - Hide Potentially Dangerous Information Using helmet.hidePoweredBy()

Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express. X-Powered-By: Express is sent in every request coming from Express by default. The helmet.hidePoweredBy() middleware will remove the X-Powered-By header. You can also explicitly set the header to something else, to throw people off. e.g.

    app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
