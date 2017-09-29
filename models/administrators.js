var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newSchema = new Schema({
  group_id: {
    type: Schema.Types.ObjectId,
    ref: 'admin-groups'
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    minlength: 6
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  },
  default: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('administrators', newSchema);
