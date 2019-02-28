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
    verify: function(directory, user) {
        const email = user.email;
        const password = user.password;

        let filename = path.join(directory, email + password + '.json');

        //Checking if a file with exact same name exists
        if (!fs.existsSync(filename)){

            console.error('No file with the name ' + filename + ' exists.');

            //If a file with same name doesn't exists return false
            return false;
        }

        //If file exists then delete the file
        else {
            fs.unlink(filename, (err) => {
                if (err){
                    console.error('Error while deleting '+ filename);
                    console.error(err);
                    return false;
                }
                console.log('Successfully deleted '+ filename);
            });
        }

        return true
    }
}
