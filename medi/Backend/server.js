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
const userRoutes = require("./Routes/users");

const path = require("path");

const PORT = 5000;
dotenv.config();

connectDB(process.env.MONGO_URL);
//.then(() => {
//console.log("DB connected");}).catch((err)=> {console.log(err);});
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/events", eventsRoutes);

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
