# Genki Visual Novel

Genki Visual Novel is a React powered online visual novel for Japanese language learners.  Genki VN follows the dialogues found in the Genki II language book and provides an immersive environment to learn Japanese.

## Getting Started

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
    * This should automatically open a browser window and render the project there.

## Project Structure

The entry point to this project is **index.js** which renders **App.js**.  While **App.js** is the actual application, **Navigation.js** does all of the work.  In there you can find all of the routing logic to get between pages.
