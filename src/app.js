const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {sld} = require("./sld_protect/sld");

app.get("/",(req,res)=>{
    res.status(200)
    .json({
        resp_code:200,
        resp_message:"Hey there , hope you are doing good XD"
    })
})

app.listen(port,()=>{
    sld();
    console.log(`Server is running at ${port}`)
})