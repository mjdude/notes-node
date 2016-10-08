console.log('Starting app.js ..');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Mo', 1, 'Mo', 1 ,2,3,4 ]);
console.log(filteredArray);

// console.log(_.isString(true));
//
// console.log(_.isString('window'));

// console.log('Add 9 plus 3 is ', notes.add(9, 3));
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username} !`);
