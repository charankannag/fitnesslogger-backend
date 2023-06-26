const AuthRouter= require("express").Router()
const AuthModel=require("../Models/Authentication.model")
AuthRouter.get("/getAllUser",async function(req,res,next){
    try {
    const response=await AuthModel.find()
    if(response.length>0){
    res.status(200).json({
        message: "Users Fetched Successfully!!!",
        data:response,
        success:true,
    })
} else {
    res.status(200).json({
        message: "No Users",
        data:[],
        success:false,
    })}
} catch (error) {
    res.status(500).json({
        message: "Internal server error",
        error:error,
        success:false,
    })
}
}
)
module.exports=AuthRouter