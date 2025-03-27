const express = require("express");
const {addEvent,getAllEvents,editEvent,deleteEvent,getAllBookingsForAdmin} = require('../controllers/eventController');


const router = express.Router();

router.post('/add',addEvent);
router.get('/get',getAllEvents);
router.put('/update/:id',editEvent);
router.delete('/delete/:id',deleteEvent);
router.get('/getBookings/:eventId',getAllBookingsForAdmin);

module.exports = router; 