 const express=require('express');
 const app=express();
 const PORT=8002;
 //addditional 
 const URL=require('./model/url');
 const urlRoutes=require('./routes/url');
 const  {connectToMongoDb}=require('./connection')


 connectToMongoDb('mongodb://localhost:27017/short-Url').then(()=>console.log("MongoDB connected")); 
 app.use(express.json());
 app.use('/url',urlRoutes);


 //dynamic route
 app.get('/:shortId', async(req,res)=>{
    const shortId=req.params.shortId;

    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory: {
            timestamp: Date.now(),
        } 
    }})

    res.redirect(entry.redirectUrl);
 })


 app.listen(PORT,()=>console.log(`Server started at ${PORT}`))