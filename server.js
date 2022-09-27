require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

// Web server
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes/
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);

// db
const db = require("./config/dbConfig");

db.connect()
  .then(() => {
    console.log("connected to database");

    // server will only start listening if db is connected
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
