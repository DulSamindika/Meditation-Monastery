const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Database/connect");
const eventsRoutes = require("./Routes/events");
const meditationvideoRoutes = require("./Routes/meditationvideos");
const yogavideoRoutes = require("./Routes/yogavideos");
const chantingvideoRoutes = require("./Routes/chantingvideos");

const adminRoutes = require("./Routes/admin");

const userRoutes = require("./Routes/users");


const path = require("path");

const PORT = 5000;
dotenv.config();

// Connect to MongoDB
// Initialize database connection
connectDB(process.env.MONGO_URL);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/events", eventsRoutes);
app.use("/api/auth", adminRoutes);

// Static folder for uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Video Routes
app.use("/api/videos", meditationvideoRoutes);
app.use("/api/videos", yogavideoRoutes);
app.use("/api/videos", chantingvideoRoutes);

//user Routes
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
