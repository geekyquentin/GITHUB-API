# Initially:

Since Thursday evening, I was thinking what a command line interface could be. Then I found that is related to node.js which is backend part of developemnt.

I then came to know that we can pass arguments in the command line and get the details from github api.

Yesterday, i.e. Friday, I studied how to pass arguments in command line, then I came through the npm documentation, where I first encountered ```argv```.

It is a basic command line argument parser, which I wrote the code to take the arguments and display the details.

# Process:

First, I initialized npm, installed ```yargs``` and ```fetch``` modules.

```
npm init -y

npm install yargs fetch
```

Then I wrote code for the ```commands``` and its ```options``` (or flags).

```command()``` method is used to commands, ```option()``` method are flags that can be accessed by all commands or without any command. ```help()``` this method displays all the commands/options that can be run in the terminal.

I stored the username in a global variable, and there is a function ```run()``` that takes the value of the ```options``` and pass it to that function. In the function, I wrote a code ```fetch()``` the api, and then if it is successful, send a promise, and in that, there is another function ```assignValues```
that takes the ```value``` as an argument, in that function, there is a JSON object is created which stores all the details in key-value pairs.
Then the corresponding value of the key that was passed as an argument to the function, is printed in the terminal.

There is nothing like ```fetch()``` in ```node.js```, however, you can install the package using ```npm install node-fetch``` and include it in your code by adding ```const fetch = require("node-fetch");``` in the beginning of the code.



# Problem Encountered:

I don't know how to pass more than three arguments, for example

```node copy.js username -u yashwantkrishna --repository advanced-css-course --fork```

As far as I read in the official documentation, I could see atmost three arguments passed. I googled a lot but didn't find the answer for it.
So, I decided to leave the part of printing the details of the user repo.

## What I have tried:

I tried of coding another command that takes user repo name instead of username, which I thought I would take before this, but it doesn't count. Still, the value of globally declared username is null. Hence, I understood / As far as I know, atmost three arguments are passed into yargs.

I have also browsed internet and found nothing of how to pass more than three arguments, I then thought of doing it some other way. But it has already been late, I can't learn 
any extra in this given time constraint, so I dropped the second part of my task, where I was asked to output the details of the user repo that the user inputs.

# Conclusion:

I have gained reasonably good knowledge, a little bit of exposure to backend part, getting to know what backend development can do. The amount of time I have spent on this task is approximately 16 hours.
