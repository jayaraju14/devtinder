const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    throw new Error('User not found');
})
app.use((req,res)=>{
    res.send("hello")
})
app.use((err,req,res,next)=>{ 
        if(err)
        {
        res.status(500).send('error data')
        }
})
app.listen(3000,()=>{
        console.log("server started")
})