console.log('Starting app.js ..');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
var res2 = notes.add( 1, 2);
console.log(res);

console.log(res2);
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username} !`);
