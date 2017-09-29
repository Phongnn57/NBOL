var mongoose = require('mongoose');
var fs = require('fs');

var AdminGroup = require('../models/admin-groups');
var Admin = require('../models/administrators');
var User = require('../models/register-user');

mongoose.connect('localhost:27017/Meboo');

User.find((err, docs) => {
  if (err) {
    console.log('Error', err);
  } else {
    // console.log(docs);
  }
});

// Admin group
// var adminGroups = [
//   new AdminGroup({
//     group_name: 'Quản trị viên',
//     status:'active'
//   }),
//   new AdminGroup({
//     group_name: 'Tổng đài viên',
//     status:'active'
//   }),
//   new AdminGroup({
//     group_name: 'Kế toán',
//     status:'active'
//   })
// ]
//
// // Admin
// var admins = [
//   new Admin({
//     group_id: adminGroups[0]._id,
//     first_name: 'Phong',
//     last_name: 'Nam',
//     email:'phongnn57@gmail.com',
//     password: '$2y$12$YUU7WlSYU3LMSNTnqrd5ieHPoSemY3hJgYGXhOdMTN7XkDjUrWUay',
//     phone: '0868987355',
//     status: 'active',
//     default: true
//   }),
//   new Admin({
//     group_id: adminGroups[1]._id,
//     first_name: 'Linh',
//     last_name: 'Le',
//     email:'lethilinh@gmail.com',
//     password: '$2y$12$YUU7WlSYU3LMSNTnqrd5ieHPoSemY3hJgYGXhOdMTN7XkDjUrWUay',
//     phone: '01655430074',
//     status: 'active',
//     default: true
//   }),
//   new Admin({
//     group_id: adminGroups[2]._id,
//     first_name: 'Trang',
//     last_name: 'Kế toán',
//     email:'trang@gmail.com',
//     password: '$2y$12$YUU7WlSYU3LMSNTnqrd5ieHPoSemY3hJgYGXhOdMTN7XkDjUrWUay',
//     phone: '0868987356',
//     status: 'active',
//     default: true
//   })
// ]
//
//
//
// var index = 0;
// for (var i = 0; i < adminGroups.length; i++) {
//   adminGroups[i].save((err, doc) => {
//     if (!err) {
//       index += 1;
//     }
//     if (index == 3) {
//       for (var i = 0; i < admins.length; i++) {
//         admins[i].save((err, doc) => {
//           Admin.find().populate('group_id').exec((err, docs1) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log(docs1);
//             }
//
//           })
//         });
//       }
//     }
//   });
// }
