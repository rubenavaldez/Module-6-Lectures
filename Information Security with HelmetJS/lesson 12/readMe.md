#Title
Information Security with HelmetJS - Understand BCrypt Hashes

#Learning Objective
Developers will identify the primary use case for bcrypt.


#Key Terms
asyncronous- not simultaneous or concurrent in time

synchronous- concurrent in time

#Direct Instruction
BCrypt hashes are very secure. A hash is basically a fingerprint of the original data- always unique. This is accomplished by feeding the original data into a algorithm and having returned a fixed length result. To further complicate this process and make it more secure, you can also salt your hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.

BCrypt hashes look like this.

$2a $13 $ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm 

which does have a structure. The first small bit of data $2a is defining what kind of hash algorithm was used. 

The next portion $13 defines the cost. Cost is about how much power it takes to compute the hash. It is on a logarithmic scale of 2^cost and determines how many times the data is put through the hashing algorithm. 

For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would take multiple days to complete a hash. A cost of 12 is considered very secure at this time.

 The last portion of your hash $ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm, looks like 1 large string of numbers, periods, and letters but it is actually 2 separate pieces of information. The first 22 characters is the salt in plain text, and the rest is the hashed password!

#Student Practice
Group Discussion

#Demonstration of Learning
Developers will articulate the primary use case for bcrypt in a group setting.