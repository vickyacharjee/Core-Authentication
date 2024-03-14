 const express=require('express');
 const app=express();
 const PORT=8002;
 //addditional 
 const URL=require('./model/url');
 const urlRoutes=require('./routes/url');
 const staticRoute=require('./routes/staticRouter');
 const  {connectToMongoDb}=require('./connection')
 const path=require('path');


 connectToMongoDb('mongodb://localhost:27017/short-Url').then(()=>console.log("MongoDB connected")); 
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
 app.use('/url',urlRoutes);

//for ejs
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

// test
app.use('/',staticRoute);
// test

 //dynamic route
 app.get('/url/:shortId', async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory: {
            timestamp: Date.now(),
        } 
    }})

    if (entry && entry.redirectUrl) {
    res.redirect(entry.redirectUrl);
    } 
    else {
    // Handle the case when entry or entry.redirectUrl is null
    // You might want to send an error response or redirect to a default URL.
    res.status(404).send('URL not found');
}
 })


 app.listen(PORT,()=>console.log(`Server started at ${PORT}`))