#Information Security with HelmetJS - Avoid Inferring the Response MIME Type with helmet.noSniff()

Browsers can use content or MIME sniffing to adapt to different datatypes coming from a response. They override the Content-Type headers to guess and process the data. While this can be convenient in some scenarios, it can also lead to some dangerous attacks. This middleware sets the X-Content-Type-Options header to nosniff. This instructs the browser to not bypass the provided Content-Type.


*Multipurpose Internet Mail Extension (MIME)*- is an internet standard that extends the format of email messages to support text in character sets other than ASCII, as well as attachnments of audio, video, images, and application programs.

*American Standard Code for Information Interchange (ASCII)*- is a character encoding standard for electronic communication.
















    app.use(helmet.noSniff());





