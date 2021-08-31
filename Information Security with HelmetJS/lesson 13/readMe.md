#Title
Information Security with HelmetJS - Hash and Compare Passwords Asynchronously

#Learning Objective
Developers will be able to define asynchronous hashing

#Key Terms
asyncronous- not simultaneous or concurrent in time

#Direct Instruction
As hashing is designed to be computationally intensive, it is recommended to do so asyncronously on your server as to avoid blocking incoming connections while you hash. All you have to do to hash a password asynchronously is call

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});

#Student Practice
Group Discussion

#Demonstration of Learning
Developers will discuss asynchronous hashing in a group setting.