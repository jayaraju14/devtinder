const adminAuth=(req,res,next)=>{
     const token="xyz"
    const isAdminAuth=token==="xyz"
    if(!isAdminAuth)
    {
        res.status(401).send("an unautherised entry")
    }
    else
    {
        next();
    }
}
module.exports=adminAuth;