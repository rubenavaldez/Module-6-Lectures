#Title
Information Security with HelmetJS - Set a Content Security Policy with helmet.contentSecurityPolicy()


#Time Allocation
40 Minutes


#Instructional  Outcomes
Developers will identify the primary use case for helmet.contentSecurityPolicy()

Developers will apply the helmet.contentSecurityPolicy() in the provided boilerplate. 


#Key Terms
Whitelist- Whitelisting is the practice of explicitly allowing some identified entities access to a particular privilege, service, mobility, access or recognition.

#CS Relationships
Cybersecurity
JavaScript Libraries

#Direct Instruction
This challenge highlights one promising new defense that can significantly reduce the risk and impact of many type of attacks in modern browsers. By setting and configuring a Content Security Policy you can prevent the injection of anything unintended into your page. This will protect your app from XSS vulnerabilities, undesired tracking, malicious frames, and much more. CSP works by defining a whitelist of content sources which are trusted. You can configure them for each kind of resource a web page may need (scripts, stylesheets, fonts, frames, media, and so on…). There are multiple directives available, so a website owner can have a granular control. Unfortunately CSP is unsupported by older browser.

By default, directives are wide open, so it’s important to set the defaultSrc directive as a fallback. Helmet supports both defaultSrc and default-src naming styles. The fallback applies for most of the unspecified directives.



#Experiential Learning: Student Practice
In this exercise, use helmet.contentSecurityPolicy(), and configure it setting the defaultSrc directive to ["self"] (the list of allowed sources must be in an array), in order to trust only your website address by default. Set also the scriptSrc directive so that you will allow scripts to be downloaded from your website, and from the domain 'trusted-cdn.com'.

Hint: in the self keyword, the single quotes are part of the keyword itself, so it needs to be enclosed in double quotes to be working.


#Interactive Instruction
Discussion and Cooperative learning approach. 

#Demonstration of Learning
Group discussion prompt(formative)
Boilerplate submission(summative)

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


#Reflection 
Instructional outcomes were met by 100% of students as evidence by assessment results. Engagement was high during group discussion. 