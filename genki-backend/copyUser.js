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
    verify: function(user, fromDir, toDir) {
        const email = user.email;
        const password = user.password;

        let filenamefrom = './' + fromDir + '/' + email + password + '.json';
        let filenameto = './' + toDir + '/' + email + password + '.json';

        //If the file exists and was successfully copied then delete the file
        //from old directory
        try{
            fs.copyFileSync((path.join(__dirname, filenamefrom)),
                (path.join(__dirname, filenameto)));

            console.log(filenamefrom+' was successfully copied to '+toDir);
        }

        //If an error occurs while copying the file then the file in old
        //directory is not deleted
        catch(err){
            if (err){
                console.error('Was not able to copy the file '+ filenamefrom);
                return false;
            }
        }
        return true;
    }
}
