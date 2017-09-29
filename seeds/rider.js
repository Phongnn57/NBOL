var mongoose = require('mongoose');
const fs = require('fs');

var Rider = require('../models/register-user');

mongoose.connect('localhost:27017/Meboo');

let jsonArray = JSON.parse(fs.readFileSync('./seeds/json/register-user.json'));

for (var json in jsonArray) {
  new Rider(jsonArray[json]).save((err, doc) => {
    if (err) {
      console.log('Error', err);
    } else {
      // console.log('Success');
    }
  });
}

// for (var i = 0; i < jsonArray.length; i++) {
//
//   // console.log(typeof(jsonArray[i]));
//
//   new Rider(JSON.stringify(jsonArray[i])).save((err, doc) => {
    // if (err) {
    //   console.log('Error', err);
    // } else {
    //   console.log('Success');
    // }
//   })
//
// }
