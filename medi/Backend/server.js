const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const connectDB = require('./Database/connect');

const path = require('path');

const PORT = 5000;
dotenv.config();

connectDB(process.env.MONGO_URL);
//.then(() => {
    //console.log("DB connected");}).catch((err)=> {console.log(err);});
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})