const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {sld} = require("./sld");

app.get("/",(req,res)=>{
    res.status(200)
    .json({
        resp_code:200,
        resp_message:"Hey there , hope you are doing good XD"
    })
})

app.listen(port,()=>{
    sld(1);
    console.log(`Server is running at ${port}`)
})