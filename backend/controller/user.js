

// inmport the model
const User= require("../model/customer");

// default route handler

exports.addData= async(req,res)=>{

    try{
         /// extracxt title and descrription
         const {name,email,phone_number,status}=req.body;
         // create a new todo obj and insert in db
         const response= await User.create({name,email,phone_number,status});
         // send a json response with suucess flag
         res.status(200).json(
             {
                success:true,
                data:response,
                message:'entry created successfully'
             }


         );
    }
    catch(err){
          console.error(err);
          console.log(err);
          res.status(500).json({
            success:false,
            data:"interal server error",
            message:err.message,
          })
    }

}


exports.getData= async(req,res)=>{

    try{
         /// extracxt title and descrription
         const data= await User.find();

         res.status(200).json(
             {
                success:true,
                data:data,
                message:'Data fetch'
             }


         );
    }
    catch(err){
          console.error(err);
          console.log(err);
          res.status(500).json({
            success:false,
            data:"interal server error",
            message:err.message,
          })
    }

}