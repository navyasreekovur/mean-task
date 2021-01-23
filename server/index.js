'use strict';
var crypto = require('crypto');
let express = require('express')
let mongoose = require('mongoose')

let bodyParser = require('body-parser')
let path = require('path')


let bcrypt = require('bcryptjs');

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, length);   /** return required number of characters */
};




'use strict';
var crypto = require('crypto');







/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};



// saltHashPassword('MYPASSWORD');
// saltHashPassword('MYPASSWORD');


const app = express()
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
// if (err) {
//     res.json(err)  
// else {
//     res.json(response)
// app.post('/api/saltGen', function (req, res) {
//     console.log('inside salt generation');
//     password = req.body;
//     function saltHashPassword(userpassword) {
//         var salt = genRandomString(16); /** Gives us salt of length 16 */
//         var passwordData = sha512(userpassword, salt);
//         console.log('UserPassword = ' + userpassword);
//         console.log('Passwordhash = ' + passwordData.passwordHash);
//         console.log('nSalt = ' + passwordData.salt);
//         if (err) {
//             res.json(err)
//         }
//         else {
//             res.json(passwordData);
//         }
//     }
// })

app.use('/api/serverside', require('./password.controller.js'));

//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())
app.listen(4200, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('My Node App listening on port 4201');
});
