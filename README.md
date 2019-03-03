# Genki Visual Novel

Genki Visual Novel is a React powered online visual novel for Japanese language learners.  Genki VN follows the dialogues found in the Genki II language book and provides an immersive environment to learn Japanese.

## Getting Started

<<<<<<< HEAD
### Node Installation

1. Install [NodeJS](https://nodejs.org/en/)
  1. Verify proper installation by opening a terminal and typing 'node -v' and 'npm -v'
1. Install [Git](https://git-scm.com/downloads)
1. Clone this repository into a local directory
  1. You can follow [these instructions](https://help.github.com/articles/cloning-a-repository/)
1. Navigate to the root directory of the project then:
  1. Run 'npm install'

### AWS

This project is now based in the AWS ecosystem.  In order to proceed, please do the following:
1. Follow [these instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) very carefully.
1. 

## Usage  
  1. Run 'npm start'
=======
##### Node Installation

1. Install [NodeJS](https://nodejs.org/en/)
    * Verify proper installation by opening a terminal and typing 'node -v' and 'npm -v'
1. Install [Git](https://git-scm.com/downloads)
1. Clone this repository into a local directory
    * You can follow [these instructions](https://help.github.com/articles/cloning-a-repository/)
1. Navigate to the root directory of the project then:
    * Run 'npm install'

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
>>>>>>> 54336bf03e4dd7b086298956bf7e4289260c499e
    * This should automatically open a browser window and render the project there.

##### Deployment
Scripts for deployment are already present in the `package.json`.
1.  Simply run `npm run deploy`.
1.  Verify changes by navigating to http://genki-vn-beta.s3-website-us-west-2.amazonaws.com

## Project Structure

The entry point to this project is **index.js** which renders **App.js**.  While **App.js** is the actual application, **Navigation.js** does all of the work.  In there you can find all of the routing logic to get between pages.
