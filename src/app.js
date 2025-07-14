const express=require('express');
const connectDB=require('./config/database')
const User=require('./models/user')
const app=express();

app.post('/signup',async (req,res)=>{
    const user=new User(
    {
            firstName:"karuna",
        lastName:"k",
        emailId:"karuna@gmail.com",
        password:"karuna",
        age:26,
        gender:"M"
    });
    const userData=await user.save();
    res.send(userData)
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
