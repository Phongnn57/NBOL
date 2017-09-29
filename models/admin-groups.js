var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newSchema = new Schema({
  group_name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
});

module.exports = mongoose.model('admin-groups', newSchema);
