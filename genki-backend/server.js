const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

/**
 * Custom Node function used to verify a user.
 */
const loginVerification = require('./loginVerification');
const email = require('./email');
const signUpVerification = require('./signUpVerification');
const deleteUser = require('./deleteUser');
const copyUser = require('./copyUser');
const moveUser = require('./moveUser');
const pending = require('./pending.js');

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
    res.status(200).json(verified);
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
})

app.get('/pending', (req,res) => {
  console.log('received pending get');
  //creat file to hold all pending teachers
  let newFileName = path.join(__dirname, 'pendingTeachers', 'pendingTeachers.json');
  // TODO: Get pending.createPending() to work synchronously with the rest of this.
  //let success = pending.createPending();
  // make Promise version of fs.readFile()
  fs.readFileAsync = function(filename, enc) {
    return new Promise(function(resolve, reject) {
      fs.readFile(filename, enc, function(err, data){
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          resolve(data);
        }
      });
    });
  };
  let response = fs.readFileAsync(newFileName, 'utf8');
  //returns true if file was created successfully, false otherwise

  response.then(data => {
    data = JSON.parse(data);
    console.log(data);
    if(data){
      console.log('File successfully created');
      res.status(200).json(data);
    } else {
      console.log('There was a problem');
      res.status(401).send("File failed to create correctly.")
    }
  })
}) // End app.get('/pending')

//moves teachers who are accepted by admin from pendingTeachers to pendingUsers
app.post('/accept', (req, res) => {
  // Access all the parameters from the request
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = 'test';
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

  let dirPathFrom = path.join(__dirname, 'pendingTeachers');
  let dirPathTo = path.join(__dirname, 'pendingUsers');
  let verified = moveUser.verify(user, dirPathFrom, dirPathTo);

  if (verified) {
    console.log('Successfully verified teacher');
    res.status(200).send("Teacher verified successfully");
  } else {
    //logging for this portion done in signUpVerification.js
    res.status(401).send("Could not verify teacher");
  }

})

//deletes teacher who the admin declines verification
app.post('declined', (req, res) => {
  // Access all the parameters from the request
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = 'test';
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

  let dirPath = path.join(__dirname, 'pendingTeachers');
  let verified = deleteUser.verify(user, dirPath);
  if (verified) {
    console.log('Successfully declined teacher');
    res.status(200).send("Teacher declined successfully");
  } else {
    //logging for this portion done in signUpVerification.js
    res.status(401).send("Could not decline teacher");
  }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
