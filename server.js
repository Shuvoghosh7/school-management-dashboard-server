const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");


const app = require("./app");

/* // database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
  console.log(`Database connect successfully`)
}); */
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pin9uyv.mongodb.net/schoolManagement`).then(()=>{
  console.log(`Database connect successfully`)
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

