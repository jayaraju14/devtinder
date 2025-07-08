const express=require('express');
const app=express();

const userData=[
    {name:"jayaraju",role:"fullstack developer"},
    {name:'karunakar',role:"test Enginer"}
]

app.get('/users',(req,res)=>{
res.send(userData)
})
app.post('/user',(req,res)=>{
    try
    {
data={name:'sidhu',role:'MERN stack developer'}
    const update=userData.push(data)
    res.send(userData)
}
    catch(err)
    {
        console.log(err)
    }
    })
    app.delete('/user',(req,res)=>{
        userData.pop()
        res.send(userData)
    })
app.use('/test',(req,res,next)=>{
    console.log("this is testing")
    next()
})

app.listen(3000,()=>{
        console.log("server started")
})