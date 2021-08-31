#Information Security with HelmetJS - Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()



Some web applications will serve untrusted HTML for download. Some versions of Internet Explorer by default open those HTML files in the context of your site. This means that an untrusted HTML page could start doing bad things in the context of your pages. This middleware sets the X-Download-Options header to noopen. This will prevent IE users from executing downloads in the trusted site’s context.




// Sets "X-Download-Options: noopen"
    app.use(helmet.ieNoOpen());














app.use(helmet.ieNoOpen());







