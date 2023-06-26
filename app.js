const express=require("express")
const appserver=express()
//INJECT MIDDLEWARES

//INJECGT CONTROLLERS
appserver.use("/api/auth",require("./Controllers/Authentication.controller"))
module.exports=appserver