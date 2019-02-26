
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

/**
 * Custom Node function used to verify a user.
 */
const loginVerification = require('./loginVerification');
const email = require('./email');
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

app.post('/signup', (req, res) => {
  console.log('received signup');
  console.log(req.body);
  email.SendEmail(req.body.firstName, req.body.lastName, req.body.email, req.body.userType, 'signup');
})


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
