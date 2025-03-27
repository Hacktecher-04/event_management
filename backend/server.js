const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const authRouter = require("./routes/authRoutes");
const eventRouter = require("./routes/eventRoutes");
const bookingRouter = require("./routes/bookingRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//middelwares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

//DB connection
connectDB();

app.use("/api/auth", authRouter);

app.use("/api/organiser/event",eventRouter);

app.use("/api/attendees/booking", bookingRouter);

app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
 