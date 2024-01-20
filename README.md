# lambda_js_using_express

**tldr;** Starter repo for building a Javascript application with ExpressJS that will run on a Lambda

I spent the first 10+ years of my career rebooting servers at random times of the day so I'm a huge proponent of serverless architecture.  AWS provides us a simple, scale-to-zero, high availability, scalable method for deploying APIs.  If you need something simple, I recommend Javascript using ExpressJS.  If you are doing something complex, I would recommend Typescript with NestJS.<br>
<br>
At the very least, you'll need an AWS account, an HTTP API Gateway and a lambda setup.<br>
<br>
Deploying the code can be done via Github workflow or whatever your favorite deployment tool is.  You can even deploy it manually using the AWS CLI (see deploy.sh in the root of the repository).<br>
<br>
Notes:<br>

* I know people love Typescript but a lot of people still start with plain ole Javascript.
* I left some NPM modules in there that aren't used in this starter repo for illustrative purposes
* I like to put comment headers in my classes and their functions but I removed them to make the code cleaner.  
* When I develop in Javascript I like to have a classes folder.  The minimum classes I create are zConfig and zTools.  zTools contains some basic reusable functionality and zConfig is where I put configuration options.
* This will require a tiny bit of modification to run locally.  But, I said it was lambda-suitable, not local suitable.
<br>
Finally: I put this together from another repository and didn't actually deploy but I've done this a million times so should be pretty close (-:
