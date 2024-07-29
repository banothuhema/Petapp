// models/Service.js
const mongoose = require('mongoose');

const additionalServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  boardingAndDaycare: {
    type: Boolean,
    default: false 
  },
  trainingClasses: {
    type: Boolean,
    default: false
  },
  
});

module.exports = mongoose.model('AdditionalService', additionalServiceSchema);

