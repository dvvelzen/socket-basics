var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X')); 
console.log(now.format('x'));
console.log(now.valueOf());

var timestamp = 1480695844098;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('hh:mm a'));

// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm a'));
