const express = require ("express");
const nodeserver = express;
const env=require("dotenv")
env.config()
nodeserver.use("/",require("./app"))
const port=process.env.NODE_SERVER_PORT||4000;
const hostname=process.env.NODE_HOST_NAME;
nodeserver.listen(port,hostname,()=>{
    console.log("SERVER STARTED",port);
    require("./dbconfig")
});