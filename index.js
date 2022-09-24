const express = require("express");
const app = express();
const PORT = 4000;
require("dotenv").config();

const cors = require("cors")
const morgan = require("morgan")
require('./config/db.connection')
// const invasiveSpeciesController = require('./controllers/invasive-species-controller')




app.use(express.json()) 
app.use(cors()); 
app.use(morgan("dev")); 
// app.use('/invasiveSpecies', invasiveSpeciesController)


app.get("/", (req, res) => {
    res.send("Hello Invasive Species");
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));