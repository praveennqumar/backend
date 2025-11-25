import mongoose, { connect } from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async ()=>{
    try{
        
     const data = await mongoose.connect(`${process.env.MONGODB_URI}`)
     console.log("connected this ")
        
        
    }
    catch(error){
        console.log("mongodb is not connected" ,error)
        process.exit(1);
    }
}

export default connectDB