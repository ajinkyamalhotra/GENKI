const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

/**
 * Custom Node function used to verify a user.
 */
const loginVerification = require('./loginVerification');
const signUpVerification = require('./signUpVerification');
const deleteUser = require('./deleteUser');
const copyUser = require('./copyUser');
const moveUser = require('./moveUser');

// Needed in order to parse the body of a request.
app.use(bodyParser.json());

/**
 * Function that handles POST requests to /login.
 * This functino will verify a user's credentials and return 200 if valid,
 * and 401 if not.
 */
app.post('/login', (req, res) => {
  console.log('received login');
  // Access the username and password from the request
  let username = req.body.Username;
  let password = req.body.Password;
  // Create a user object
  const user = {
    username: username,
    password: password
  };
  // Verify whether or not a user is valid
  const verified = loginVerification.verify(user);
  if (verified) {
    console.log(JSON.stringify(verified));
    res.status(200).send("Authenticated");
  } else {
    console.log('No Such User');
    res.status(401).send("Could not find user");
  }
})

app.post('/signUp', (req, res) => {
  console.log('received signUp');
  // Access all the parameters from the request
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  let userType = req.body.userType;
  let secretID = req.body.secretID;

  // Create a user object
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    userType: userType,
    secretID: secretID
  };

  // Try to create a new user by calling signUpVerification.verify() method
  let verified = signUpVerification.verify(user);
  if (verified) {
    console.log('Successfully created for new user.');
    res.status(200).send("New User registered successfully");
  } else {
    //logging for this portion done in signUpVerification.js
    res.status(401).send("Could not create a new user");
  }
  console.log(JSON.stringify(user));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
