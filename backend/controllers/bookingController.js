const Event = require("../models/event");
const Booking = require("../models/booking");

const bookEvent = async (req, res) => {

  try {
    const { userId, eventId, numberOfTickets } = req.body;

    const event = await Event.findById(eventId);

    if (event.bookedSeats + numberOfTickets > event.maxAttendees) {
      return res.status(400).json({
        success: false,
        message: "Seats not Available",
      });
    }
    const price  = event.ticketPrice;

    const booking = await Booking({
      userId,
      eventId,
      numberOfTickets,
      totalAmount:numberOfTickets*price,
      paymentStatus: "Pending",
    });

    await booking.save();

    event.bookedSeats += numberOfTickets;
    await event.save();

    res.status(200).json({
      succcess: true,
      message: "Event booked successfully!",
    });
  } catch (e) {
    console.log( e);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
  

};


const cancellBooking = async(req,res)=>{

  try {
    const { bookingId } = req.params;

    const booking = await Booking.findByIdAndDelete(bookingId);
    const eventId = booking.eventId;

    const event = await Event.findById(eventId);

    event.bookedSeats -= booking.numberOfTickets;
    await event.save();

    res.status(200).json({
      success: true,
      message: "Booking cancelled succcessfully!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
 



}


const getAllBookingsForUser = async (req, res) => {
  try {

    const {userId} = req.params;

    const allBookings = await Booking.find({userId});

    if(allBookings.length<1){
      return res.status(404).json({
        success:false,
        message:"No bookings yet"
      })
    }

    

    res.status(200).json({
      success:true,
      data:allBookings,
    })


  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


module.exports = {bookEvent,cancellBooking,getAllBookingsForUser};