const fs = require('fs');
const path = require('path');

module.exports = {
  createPending : function(){
    var success;
    let dirPath = path.join(__dirname, 'pendingTeachers');
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
      return (filename.split('.')[2] == 'json'
        && filename.split('.')[0] != 'pendingTeachers')
    }
    let newFileName = path.join(__dirname, 'pendingTeachers', 'pendingTeachers.json');
    // start a blank fishes.json file
    fs.writeFile(newFileName, '', function(){console.log('done')});


    // read all json files in the directory, filter out those needed to process, and using Promise.all to time when all async readFiles has completed.
    fs.readdirAsync(dirPath).then(function (filenames){
      filenames = filenames.filter(isDataFile);
      console.log(filenames);
      for(let i=0; i < filenames.length; i++){
        filenames[i]=path.join(__dirname, 'pendingTeachers', filenames[i]);
      }
        return Promise.all(filenames.map(getFile));
    }).then(function (files){
        let summaryFiles = {
          pendingTeachers: []
        };
        files.forEach(function(file) {
          let json_file = JSON.parse(file);
          summaryFiles.pendingTeachers.push({ "firstName": json_file["firstName"],
                              "lastName": json_file["lastName"],
                              "email": json_file["email"],
                              "userType" : json_file["userType"]
                          });
        });
        fs.appendFile(newFileName, JSON.stringify(summaryFiles), function(err) {
          if(err) {
            console.log(err);
            success = false;
          }
          console.log("The file was appended!");
          success = true;
        });
    });
    return success;
  }
}
