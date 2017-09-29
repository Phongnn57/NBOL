var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newSchema = new Schema({
  alert_text: {
    type: String,
    required: true
  },
  company_id: {
    type: Number,
    required: true
  },
  driver_id: {
    type: Schema.Types.ObjectId,
    ref: 'driver',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Read', 'Unread'],
    default: 'Unread'
  }
});

module.export = mongoose.model('admin-alerts', newSchema);
