//var config = require('config.json');
var express = require('express');
var crypto = require('crypto');
var router = express.Router();
//var userService = require('services/user.service');
// routes
//router.post('/saltGen', saltGen);
var genRandomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex') /** convert to hexadecimal format */
          .slice(0,length);   /** return required number of characters */
};
var sha512 = function(password, salt){
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
      salt:salt,
      passwordHash:value
  };
};
router.post('/saltGen', function (req, res) {
    console.log('inside salt generation');
   var  password = req.body.password;
    console.log('password'+req.body.password)
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(password, salt);
    console.log('UserPassword = ' + password);
    console.log('Passwordhash = ' + passwordData.passwordHash);
    console.log('nSalt = ' + passwordData.salt);
 
  
      return  res.json(passwordData);
    
       
    
})
module.exports = router;