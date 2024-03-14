 const express=require('express');
 const router=express.Router();
 const URL=require('../model/url') 

 router.get('/',async(req,res)=>{
   const allUrl= await URL.find({});
   return res.render('home',{
      urls:allUrl, 
    })
 })

module.exports=router; 