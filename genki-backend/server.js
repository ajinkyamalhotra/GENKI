
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
  //email.SendEmail(req.body.firstName, req.body.lastName, req.body.email, req.body.userType, 'signup');
  var newUser = {
      FirstName : req.body.firstName,
      LastName : req.body.lastName,
      Email : req.body.email,
      UserType : req.body.userType,
      SecretID : req.body.secretID,
      Password : req.body.password
  };
  var newUserString = JSON.stringify(newUser);
  var fileName = path.join(__dirname, 'pendingUsers',
        req.body.firstName + req.body.lastName + '.json');
  if(req.body.userType == "student"){
    fs.writeFile(fileName,newUserString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  }
  if(req.body.userType == "teacher"){
    fileName = path.join(__dirname, 'pendingTeachers',
        req.body.firstName + req.body.lastName + '.json');
        fs.writeFile(fileName,newUserString, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
  }
});

app.get('/pending', (req,res) => {
  var dirPath = path.join(__dirname, 'pendingTeachers');
  // make Promise version of fs.readdir()
  fs.readdirAsync = function(dirPath) {
      return new Promise(function(resolve, reject) {
          fs.readdir(dirPath, function(err, filenames){
              if (err)
                  reject(err);
              else
                  resolve(filenames);
          });
      });
  };

  // make Promise version of fs.readFile()
  fs.readFileAsync = function(filename, enc) {
      return new Promise(function(resolve, reject) {
          fs.readFile(filename, enc, function(err, data){
              if (err)
                  reject(err);
              else
                  resolve(data);
          });
      });
  };

  // utility function, return Promise
  function getFile(filename) {
      return fs.readFileAsync(filename, 'utf8');
  }

  // example of using promised version of getFile
  // getFile('./fish1.json', 'utf8').then(function (data){
  // console.log(data);
  // });


  // a function specific to my project to filter out the files I need to read and process, you can pretty much ignore or write your own filter function.
  function isDataFile(filename) {
    return (filename.split('.')[1] == 'json'
            && filename.split('.')[0] != 'pendingTeachers')
  }
  var newFileName = path.join(__dirname, 'pendingTeachers', 'pendingTeachers.json');
  // start a blank fishes.json file
  fs.writeFile(newFileName, '', function(){console.log('done')});


  // read all json files in the directory, filter out those needed to process, and using Promise.all to time when all async readFiles has completed.
  fs.readdirAsync(dirPath).then(function (filenames){
      filenames = filenames.filter(isDataFile);
      console.log(filenames);
      for(var i=0; i < filenames.length; i++){
        filenames[i]=path.join(__dirname, 'pendingTeachers', filenames[i]);
      }
      return Promise.all(filenames.map(getFile));
  }).then(function (files){
      var summaryFiles = [];
      files.forEach(function(file) {
        var json_file = JSON.parse(file);
        summaryFiles.push({ "FirstName": json_file["FirstName"],
                            "LastName": json_file["LastName"],
                            "Email": json_file["Email"],
                            "UserType" : json_file["UserType"]
                        });
      });
      fs.appendFile(newFileName, JSON.stringify(summaryFiles), function(err) {
          if(err) {
            return console.log(err);
          }
          console.log("The file was appended!");
      });
  });
  var response = fs.readFileAsync(newFileName, 'utf8');
  //var jsonResponse = JSON.parse(response);
  res.send(JSON.stringify(response));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
