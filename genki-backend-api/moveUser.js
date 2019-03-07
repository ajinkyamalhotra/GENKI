const copyUser = require('./copyUser');
const deleteUser = require('./deleteUser');

/**
 * Node specific functionality to export a function
 */
module.exports = {
    /**
     * Function which copies the file from one directory to another and
     * delete the file from the old directory
     * @param user object
     * @param fromDir directory where the user object .json file resides
     * @param toDir directory where the user object .json file is desired
     */
    verify: function(user, fromDir, toDir) {

        //Copy file from fromDir to toDir
        let copied = copyUser.verify(user, fromDir, toDir);

        //If copying was successful then delete the file in old directory
        if(copied){
            //delete's user from the fromDir directory
            let deleteUserStatus = deleteUser.verify(fromDir, user);

            if(!deleteUserStatus) return false;
        }
        else{
            return false;
        }
        return true;
    }
}
