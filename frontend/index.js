const { default: mongoose } = require("mongoose");
const dotenv=require('dotenv')
const express=require('express')
const cors=require('cors')
const cookieParser = require("cookie-parser");
const app=express();
const userRouter=require("./routes/user")
const blogRouter=require("./routes/blog")

app.use(express.json())
app.use(cookieParser())
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
}));

app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server is runing ${process.env.PORT} `)
})