// models/Service.js
const mongoose = require('mongoose');

const groomingServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true 
  },
  includesBath: {
    type: Boolean,
    default: false
  },
  includesHairTrimming: {
    type: Boolean,
    default: false
  },
  includesNailTrimming: {
    type: Boolean,
    default: false
  },
  includesEarCleaning: {
    type: Boolean,
    default: false
  },
  includesTeethBrushing: {
    type: Boolean,
    default: false 
  }
});

module.exports = mongoose.model('GroomingService', groomingServiceSchema);

