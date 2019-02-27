const fs = require('fs');
const path = require('path');

/**
 * Node specific functionality to export a function
 */
module.exports = {
    /**
     * Function which delete the .json file associated with user object
     * @param directory in which user object resides
     * @param user object
     */
    verify: function(user, directory) {
        const email = user.email;
        const password = user.password;

        let filename = './' + directory + '/' + email + password + '.json';

        //Checking if a file with exact same name exists
        if (!fs.existsSync(path.join(__dirname, filename))){

            console.error('No file with the name ' + filename + ' exists.');

            //If a file with same name doesn't exists return false
            return false;
        }

        //If file exists then delete the file
        else {
            fs.unlink(path.join(__dirname, filename), (err) => {
                if (err){
                    console.error('Error while deleting '+ filename);
                    return false;
                }
                console.log('Successfully deleted '+ filename);
            });
        }

        return true
    }
}
