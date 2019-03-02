const fs = require('fs');
const path = require('path');

/**
 * Node specific functionality to export a function
 */
module.exports = {
  /**
   * Function which copies the file from one directory to another
   * @param user object
   * @param fromDir directory where the user object .json file resides
   * @param toDir directory where the user object .json file is desired
   */
  verify: function (user, fromDir, toDir) {
    const email = user.email;
    const password = user.password;

    let filenamefrom = path.join(fromDir, email + password + '.json');
    let filenameto = path.join(toDir, email + password + '.json');

    // If the file exists and was successfully copied then delete the file
    // from old directory
    try {
      fs.copyFileSync(filenamefrom, filenameto);

      console.log(filenamefrom + ' was successfully copied to ' + toDir);
    } catch (err) {
      // If an error occurs while copying the file then the file in old
      // directory is not deleted
      if (err) {
        console.error('Was not able to copy the file ' + filenamefrom);
        console.error(err);
        return false;
      }
    }
    return true;
  }
};
