// require('dotenv').config({path: './env'})
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';

// import dotenv from 'dotenv'
// dotenv.config();

import connectDB from './db/index.js';
import { app } from './app.js';


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("error in app", err)
    process.exit(1);
  })













// const app = express();

// ( async ()=>{
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//      app.on("error",(error)=>{
//         console.log("ERROR IN CONNECTION",error )
//         throw error
//      })

//      app.listen(process.env.PORT,()=>{
//         console.log('connected to the port 8080')
//      })

//     }
//     catch (error){
//        console.error("ERROR",error)
//        throw err;
//     }
// })()