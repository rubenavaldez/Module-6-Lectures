#Title

Information Security with HelmetJS - Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()


Cross-site scripting (XSS) is a frequent type of attack where malicious scripts are injected into vulnerable pages, with the purpose of stealing sensitive data like session cookies, or passwords.

The basic rule to lower the risk of an XSS attack is simple: “Never trust user’s input”. As a developer you should always sanitize all the input coming from the outside. This includes data coming from forms, GET query urls, and even from POST bodies. Sanitizing means that you should find and encode the characters that may be dangerous e.g. <, >.

Modern browsers can help mitigating the risk by adopting better software strategies. Often these are configurable via http headers.

The X-XSS-Protection HTTP header is a basic protection. The browser detects a potential injected script using a heuristic filter. If the header is enabled, the browser changes the script code, neutralizing it.



*Heuristic filtering*-  refers to the use of various algorithms and resources to examine text or content in specific ways. The word heuristic describes a type of analysis that relies on experience or specific intuitive criteria, rather than simple technical metrics. The use of high-level algorithms allows for heuristic analysis of content, where humans can program computers to think in certain ways rather than just applying a purely quantitative analysis.












app.use(helmet.xssFilter());