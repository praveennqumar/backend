import mongoose, { connect } from 'mongoose';

const connectDB = async () => {
    try {
        // console.log("Final URI ->", JSON.stringify(process.env.MONGODB_URI));
        const data = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("connected this ")
    }
    catch (error) {
        console.log("mongodb is not connected", error)
        process.exit(1);
    }
}

export default connectDB