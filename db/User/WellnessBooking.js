const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phno: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  totalamount: { type: Number, required: true },
  description: { type: String, required: true },
  ServiceName: { type: String, required: true },
  nutritionCounselling: { type: Boolean, required: true },
  exerciseRecommendations:{ type: Boolean, required: true },
  preventiveHealthcare : { type: Boolean, required: true },
  regularCheckUps: { type: Boolean, required: true },
  vaccinations: { type: Boolean, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true }
});

module.exports = mongoose.model('WellnessBooking', bookingSchema);


