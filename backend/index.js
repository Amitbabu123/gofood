// const express = require("express");
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");

// // Connect to MongoDB

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use(express.json())

// app.use("/api", require("./Routes/CreateUser"))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
// module.exports = mongoDB;



// index.js
// const express = require("express");
// const app = express();
// const port = 5000;
// const connectToDB = require("./db");

// app.use(express.json());

// app.use("/api", require("./Routes/CreateUser"));

// connectToDB();

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });



// index.js
require('dotenv').config();
require('./db')
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; // Use process.env.PORT for Heroku deployment or set a default value
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

const connectToDB = require("./db");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', BASE_URL);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Connect to MongoDB
connectToDB();

app.use(express.json());

// Use the routes defined in CreateUser.js, DisplayData.js, and OrderData.js
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
