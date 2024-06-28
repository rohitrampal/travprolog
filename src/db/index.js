import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export  const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("MongoDb connected successfully");
        console.log(connect.connection.host);
        
    } catch (error) {
        console.log("----------------------Error in Connecting Database -----------\n",error);
        // throw error;
        process.exit(1)
        
    }

}