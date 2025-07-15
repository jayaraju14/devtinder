const express=require('express');
const connectDB=require('./config/database')
const User=require('./models/user')
const app=express();

//json middlewares
app.use(express.json())

app.post('/signup',async (req,res)=>{
    // console.log(req.body)
    const user=new User(req.body);
    try{
       const userData=await user.save();
    res.send(userData) 
    }catch(err){
        console.log(err)
    }
    
})




connectDB()
.then(()=>{
console.log("database connected")
app.listen(3000,()=>{
        console.log("server started")
})
})
.catch((err)=>{
    console.log(err)
})
