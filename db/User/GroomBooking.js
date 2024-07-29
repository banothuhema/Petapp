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
  duration: { type: String, required: true },
  includesBath: { type: Boolean, required: true },
  includesHairTrimming: { type: Boolean, required: true },
  includesNailTrimming: { type: Boolean, required: true },
  includesEarCleaning: { type: Boolean, required: true },
  includesTeethBrushing: { type: Boolean, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true }
});

module.exports = mongoose.model('GroomBooking', bookingSchema);


