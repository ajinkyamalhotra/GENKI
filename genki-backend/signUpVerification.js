const fs = require('fs');
const path = require('path');

/**
 * Node specific functionality to export a function
 */
module.exports = {
    /**
     * Function which verifies whether or not a user is valid.  It looks up
     * the user by the email and password combination
     * @param user          The email and password combo
     */
    verify: function(user) {
        const email = user.email;
        const password = user.password;

        let filename = './users/' + email + password + '.json';

        //Checking if a file with exact same name exists
        if (fs.existsSync(path.join(__dirname, filename))){
            console.log('Same file already exists.');
            //if a file with same name exists return false
            return false;
        }

        //Try to create a file if in process error occurs return false
        fs.writeFile(path.join(__dirname, filename), JSON.stringify(user),
            (err) => {
            if (err) {
                console.log('New .json file was not created for new user.' +
                    'ERROR!');
                throw err;
                return false;
            }
        })

        //returning true if file is successfully created
        return true;
    }
}
