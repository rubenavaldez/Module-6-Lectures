#Title
Information Security with HelmetJS - Configure Helmet Using the ‘parent’ helmet() Middleware

#Learning Objective
Developers will identify the primary use case for app.use(helmet()).

#Key Terms
None

#Direct Instruction
app.use(helmet()) will automatically include all the middleware introduced above, except noCache(), and contentSecurityPolicy(), but these can be enabled if necessary. You can also disable or configure any other middleware individually, using a configuration object.

We introduced each middleware separately for teaching purposes and for ease of testing. Using the ‘parent’ helmet() middleware is easy to implement in a real project.

#Student Practice
Discussion

#Demonstration of Learning
Module 6 project

#Example
    app.use(helmet({
    frameguard: { // configure
     action: 'deny'
    },
    contentSecurityPolicy: { // enable and configure
      directives: {
        defaultSrc: ["self"],
        styleSrc: ['style.com'],
      }
     },
     dnsPrefetchControl: false // disable
    }))