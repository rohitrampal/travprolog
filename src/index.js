import { error, log } from "console";
import { connectDb } from "./db/index.js"
import dotenv from "dotenv";
import {app} from "./app.js";


dotenv.config({
    path:"./env"
})

const PORT = process.env.PORT || 1111;



connectDb()
.then(()=>{
    app.on("error",()=>{
        console.log("error: ---!---",error);
        throw error
    })
    app.listen(PORT,()=>{
        console.log(`server listen at port ${PORT}`);
    });
})
.catch((error)=>{
    console.log("Database connection failed !!!!!!",error);
})




// -----------alternate way all the code is spred in to the ---------db/index.js---------src/constants.js===app.js====index.js-----------
// by the use of iffe function 
/*
import express from "express";

const app = express()
PORT = process.env.PORT || 1111;

( async ()=>{
    try {
        const connect = await mongoose.connect(`mongodb://127.0.0.1:27017/travprologger`)
        
        console.log("MongoDb connected successfully");
        console.log(connect.connection);
        
        app.on("error",()=>{
        console.log("error: ---!---",error);
        throw error
        })
        
        app.listen(PORT,()=>{
            console.log(`server listen at port ${PORT}`);
        });

        
    } catch (error) {
        console.log("----------------------Error in Connecting Database -----------\n",error);
        // throw error;
        process.exit(1)
        
    }

*/
