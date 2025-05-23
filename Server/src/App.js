const express= require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const connectDB=require('./config/db');
connectDB()
  .then(() => {
    console.log("Database is connected");
    app.listen(process.env.PORT, () => {
      console.log("Server is successfully listening to port "+ process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Database is not connected", err);
  });
