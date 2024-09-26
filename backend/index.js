const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require("./router/authRouter.js");
const dmitRouter = require("./router/dmitRouter.js");

const connectToMongoDb = require("./db/connectToMongoDb.js");


// Set up Express
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


dotenv.config();
app.use(cookieParser())
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;


// ----------->>>>>>>>
app.use("/api/auth", authRouter);
app.use("/api", dmitRouter)
// Middleware
app.use('/uploads', express.static('uploads')); // Serve static files


app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running on ${PORT}`);
});
