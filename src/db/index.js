import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export  const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(`mongodb://127.0.0.1:27017/travprologger`)
        console.log("MongoDb connected successfully");
        console.log(connect.connection);
        
    } catch (error) {
        console.log("----------------------Error in Connecting Database -----------\n",error);
        // throw error;
        process.exit(1)
        
    }

}