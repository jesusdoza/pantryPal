require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/mainRouter.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// create express app server
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.static("public"));

// assign a piece of middleware that will fire anytime a request comes in to the server
app.use(express.json());
app.use((req, res, next) => {
    // log out the path every time we get a request (for testing routes only)
    // console.log(req.path, req.method);
    next();
});

// grabs all of the different routes that are attached to the express router in the /routes/index.js file
app.use("/", mainRouter);

//connect to db
mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        autoIndex: true,
    })
    .then(() => {
        // listen for requests - PORT defined in .env file
        app.listen(process.env.PORT, () => {
            console.log(
                `🚀 Connected to DB & server ready at http://localhost:${process.env.PORT}`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
