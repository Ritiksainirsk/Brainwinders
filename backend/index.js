const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require('cors');

const authRouter = require("./router/authRouter.js");

const connectToMongoDb = require("./db/connectToMongoDb.js");


// Set up Express
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


dotenv.config();
app.use(cookieParser())

const PORT = process.env.PORT || 5000;


// ----------->>>>>>>>
app.use("/api/auth", authRouter);


app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running on ${PORT}`);
});
