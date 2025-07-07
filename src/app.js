const express=require('express');
const app=express();

app.use('/',(req,res,next)=>{
    console.log("this is middleware")
    next()
})

app.get('/',(req,res)=>{
    console.log(req.params)
    res.send("this is first api")
})

app.listen(3000,()=>{
        console.log("server started")
})