#Title
Information Security with HelmetJS - Disable DNS Prefetching with helmet.dnsPrefetchControl()


#Learning Objective

Developers will identify the primary use case for helmet.dnsPrefetchControl().

Developers will apply the helmet.dnsPrefetchControl() in the provided boilerplate. 


#Key Terms

*Domain Name System (DNS)*- The Domain Name System is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network.



#Direct Instruction

To improve performance, most browsers prefetch DNS records for the links in a page. In that way the destination ip is already known when the user clicks on a link. This may lead to over-use of the DNS service (if you own a big website, visited by millions people…), privacy issues (one eavesdropper could infer that you are on a certain page), or page statistics alteration (some links may appear visited even if they are not). If you have high security needs you can disable DNS prefetching, at the cost of a performance penalty.


#Student Practice

helmet.dnsPrefetchControl() middleware should be mounted correctly

#Demonstration of Learning

Module 6 project


#Examples

    // Sets "X-DNS-Prefetch-Control: off"
    app.use(
    helmet.dnsPrefetchControl({
     allow: false,
     })
    );

    // Sets "X-DNS-Prefetch-Control: on"
    app.use(
     helmet.dnsPrefetchControl({
      allow: true,
     })
    );