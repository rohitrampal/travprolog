// import express form "express";
// const express = require('express')
import express from "express";
import { connectDb } from "./db/index.js"
import dotenv from "dotenv";


dotenv.config({
    path:"./env"
})

const app = express()

app.listen(process.env.PORT,()=>{
    `server listen at port ${process.env.PORT}`
});

connectDb()

