const booking = require("../models/booking");
const event = require("../models/event");
const Event = require("../models/event");

const addEvent = async (req,res)=>{
   const {title, date, venue, description, ticketPrice, maxAttendees, imageUrl, organizerId} = req.body;

   try{
      const event = new Event({
    title,
    date,
    venue,
    description,
    ticketPrice,
    maxAttendees,
    imageUrl,
    organizerId
   });

   await event.save();
   
   res.status(201).json({
    success: true,
    data: event
   })

   }catch(error){
    console.log(error);
    res.status(500).json({
      success:false,
      message: "Server error"
    })
    
   }

  
}


const getAllEvents = async(req,res)=>{

  try {
    const listOfEvents = await Event.find({});

    res.status(200).json({
      success: true,
      data: listOfEvents,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}


const editEvent = async(req,res)=>{

  try {
    const {
      title,
      date,
      venue,
      description,
      ticketPrice,
      maxAttendees,
      imageUrl,
      organizerId,
    } = req.body;

    const { id } = req.params;

    const event = await Event.findByIdAndUpdate(
      id,
      {
        title,
        date,
        venue,
        description,
        ticketPrice,
        maxAttendees,
        imageUrl,
        organizerId,
      },
      { new: true }
    );

    await event.save();

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
  
}


const deleteEvent = async (req,res)=>{
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Event delete successfully",
    });
  } catch (e) {
    console.log( e);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}


const getAllBookingsForAdmin  = async(req,res)=>{
  try {

    const {eventId} = req.params;

    const allBookings = await booking.find({eventId});

    if (allBookings.length < 1) {
      return res.status(404).json({
        success: false,
        message: "No bookings yet",
      });
    }

    res.status(200).json({
      success: true,
      data: allBookings,
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

module.exports = {addEvent,getAllEvents,editEvent,deleteEvent,getAllBookingsForAdmin};