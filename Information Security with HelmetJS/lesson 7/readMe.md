#Title

Information Security with HelmetJS - Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()



#Learning Objective

Developers will identify the primary use case for helmet.hsts().

Developers will apply the helmet.hsts() in the provided boilerplate. 

#Key Terms

*HTTPS (Hypertext Transfer Protocol Secure)* – HTTP but within an encrypted layer of security.

*SSL (Secure Sockets Layer)* – Technology protocol that creates encrypted communication links between servers and browsers.

*SSL Certificate* – Data files that encrypt digital information and activate secure connections when installed on web servers.


#Direct Instruction

HTTP Strict Transport Security (HSTS) is a web security policy which helps to protect websites against protocol downgrade attacks and cookie hijacking. If your website can be accessed via HTTPS you can ask user’s browsers to avoid using insecure HTTP. By setting the header Strict-Transport-Security, you tell the browsers to use HTTPS for the future requests in a specified amount of time. This will work for the requests coming after the initial request.

helmet.hsts sets the Strict-Transport-Security header which tells browsers to prefer HTTPS over insecure HTTP. 

options.maxAge is the number of seconds browsers should remember to prefer HTTPS. If passed a non-integer, the value is rounded down. It defaults to 15,552,000, which is 180 days.

options.includeSubDomains is a boolean which dictates whether to include the includeSubDomains directive, which makes this policy extend to subdomains. It defaults to true.

options.preload is a boolean. If true, it adds the preload directive, expressing intent to add your HSTS policy to browsers. See the "Preloading Strict Transport Security" section on MDN for more. It defaults to false.

#Student Practice

Configure helmet.hsts() to use HTTPS for the next 90 days. Pass the config object {maxAge: timeInMilliseconds, force: true}. 

Note: Configuring HTTPS on a custom website requires the acquisition of a domain, and a SSL/TSL Certificate.



#Demonstration of Learning

Module 6 project




#Examples 

    // Sets "Strict-Transport-Security: max-age=123456; includeSubDomains"
    app.use(
     helmet.hsts({
       maxAge: 123456,
     })
    );

    // Sets "Strict-Transport-Security: max-age=123456"
    app.use(
     helmet.hsts({
      maxAge: 123456,
      includeSubDomains: false,
     })
    );

    // Sets "Strict-Transport-Security: max-age=123456; includeSubDomains; preload"
    app.use(
    helmet.hsts({
     maxAge: 63072000,
      preload: true,
     })
    );

    