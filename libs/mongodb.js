import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb");
    } catch (error) {
        console.log("error while connectiong with mongodb");
    }
}
export default connectMongoDB;