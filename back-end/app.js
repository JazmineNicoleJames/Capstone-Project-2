require('dotenv').config({ path: 'back-end/.env'});


const express = require("express");
const costumeRoutes = require("./routes/costumes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/costumes", costumeRoutes);


app.listen(3001, function () {
    console.log(`Started on http://localhost:3001`);
  });

