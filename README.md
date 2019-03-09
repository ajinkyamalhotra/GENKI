# Genki Visual Novel

Genki Visual Novel is a React powered online visual novel for Japanese language learners.  Genki VN follows the dialogues found in the Genki II language book and provides an immersive environment to learn Japanese.

## Getting Started

##### Node Installation

1. Install [NodeJS](https://nodejs.org/en/)
    * Verify proper installation by opening a terminal and typing `node -v` and `npm -v`
1. Install [Git](https://git-scm.com/downloads)
1. Clone this repository into a local directory
    * You can follow [these instructions](https://help.github.com/articles/cloning-a-repository/)
1. Navigate to the root directory of the project then:
    * Run `npm install`

##### AWS

This project is now based in the AWS ecosystem.  In order to proceed, please do the following:
1. Follow [these instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) very carefully.
1. Then from the command line run `aws configure`
    * Region: `us-west-2`
    * Then use your Access Key and Secret Key as needed.  All other defaults are fine.

*Note:* You will likely be unable to use Windows PowerShell to deploy this code and will instead need to use just a command prompt.


## Usage

##### Testing
All testing can be done locally assuming you have your AWS credentials set up.
  1. From the working directory run `npm start`
      * This should automatically open a browser window and render the project there.

##### React App Deployment
Scripts for deployment are already present in the `package.json`.  However, you will need to have your AWS Credentials already set up.
1.  Simply run `npm run deploy`.
1.  Verify changes by navigating to http://genki-vn-beta.s3-website-us-west-2.amazonaws.com

*Note:*  This will just put a copy of the React app into S3 for static retrieval.  Serving the React app locally is fine for testing as it will still communicate via the API.

##### API Deployment
All API may be found in the folder `genki-backend-api`.  That folder should be treated as an entirely different NodeJS project (i.e. you will need to run `npm install` in the root of the directory).  That directory was created using the [Serverless Framework for AWS](https://serverless.com/framework/docs/providers/aws/guide/intro/), please follow the link for additional documentation.  You can find particular use-cases of this framework [here](https://serverless-stack.com/#table-of-contents).  In fact, the previous link provided much of the inspiration for our system's architecture, so please read it carefully.

In order to deploy your API, you will need to have your AWS Credentials in place.  Please follow the steps below to deploy a new API:
1. Create a `YOUR_API.js`, where YOUR_API should be replaced by the name of your API.
1. Because these API will reside in AWS Lambda, you need a handler with the following header:
      ``` javascript
      export function main (event, context, callback) {/* Your code here*/ }
      ```
1. Once you have your code ready to go, you will need to edit the `serverless.yml` file.  
    1. To do so, locate the section of code labeled `functions`.
    ```
    functions:
        YOUR_API_NAME:
          handler: YOUR_API_NAME.main
          events:
            - http:
                path: PATH_TO_YOUR_API
                method: REST_METHOD
                cors: true
                authorizer: aws_iam
    ```
    1. Using the template above, add as an additional function your API.  There is no need to have an additional `functions` designation, just add your information at the same depth as the previous API.
1. From the command line, in the `genki-backend-api` directory, run `serverless deploy` (You will have needed to run `npm install` at some point in this directory).
1. Lastly, go to [AWS Lambda](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions) to ensure that your API made it into AWS.

## Project Structure

The entry point to this project is **index.js** which renders **App.js**.  While **App.js** is the actual application, **Navigation.js** does all of the work.  In there you can find all of the routing logic to get between pages.
