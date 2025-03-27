const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
  numberOfTickets:{
    type:Number,
    required:true
  },
  totalAmount: Number,
  paymentStatus:String,

});

 module.exports = mongoose.model("Booking",BookingSchema);