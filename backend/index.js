const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const cors=require('cors')
const app=express();
const userRouter=require("./routes/user")


app.use(express.json())
dotenv.config();
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("DB connected successfully");
}).catch((error)=>{
    console.log("DB connection failed");
    console.error(error);
    process.exit(1);
})

app.use(cors({
    origin:"*",
    credentials:true,
}));

app.use('/api/v1',userRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server is runing ${process.env.PORT} `)
})