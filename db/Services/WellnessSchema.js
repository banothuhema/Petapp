// models/Service.js
const mongoose = require('mongoose');

const wellnessServiceSchema = new mongoose.Schema({
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
  nutritionCounselling:{
    type: Boolean,
    default: false
  },
    exerciseRecommendations:{
    type: Boolean,
    default: false
  },
  preventiveHealthcare: {
    type: Boolean,
    default: false
  },
  regularCheckUps: {
    type: Boolean,
    default: false
  },
  vaccinations:  {
    type: Boolean,
    default: false 
  }
});

module.exports = mongoose.model('WellnessService', wellnessServiceSchema);

