#Information Security with HelmetJS - Mitigate the Risk of Clickjacking with helmet.frameguard()

Your page could be put in a <frame> or <iframe> without your consent. This can result in clickjacking attacks, among other things. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained executing your page in a malicious context, by means of iframing. In that context a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. This middleware sets the X-Frame-Options header. It restricts who can put your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.

**Clickjacking**, also known as a “UI redress attack”, is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the top level page. Thus, the attacker is “hijacking” clicks meant for their page and routing them to another page, most likely owned by another application, domain, or both.

Let's play: www.amazon.com perseverenow.org mcdonalds.com

We don’t need our app to be framed.

Use helmet.frameguard() passing with the configuration object {action: 'deny'}.

app.use(helmet({
hidePoweredBy: {setTo: 'php 1.8.3'},
frameguard: {action: 'deny'}
}));
