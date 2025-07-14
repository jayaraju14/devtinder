const mongoose=require('mongoose')
const URI="mongodb://localhost:27017/devtinder"
const connectDB=async ()=>{
    await mongoose.connect(URI)
}

module.exports=connectDB;

