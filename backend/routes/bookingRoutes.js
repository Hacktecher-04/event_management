const express = require("express");

const {
  bookEvent,
  cancellBooking,
  getAllBookingsForUser,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/book",bookEvent);
router.get("/cancell/:bookingId", cancellBooking);
router.get("/getBookings/:userId", getAllBookingsForUser);


module.exports = router;