const fs = require('fs');
const path = require('path');

/**
 * Node specific functionality to export a function
 */
module.exports = {
    /**
     * Function which verifies whether or not a user is valid.  It looks up
     * the user by the username and password combination
     * @param user          The username and password combo`
     */
    verify: function(user) {
        const username = user.username;
        const password = user.password;
        let lookup;
        try {
            lookup = fs.readFileSync(
                path.join(__dirname, 'users', username + password + '.json'));
        } catch (err) {
            // Only catch the error if the file is not found
            if (err.code === 'ENOENT') {
                return false;
            } else {
                throw err;
            }
        }

        return JSON.parse(lookup);
    }
}
