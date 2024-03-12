 const express=require('express');
 const router=express.Router(); 
 const{handlegGenerateNewShortUrl,handleGetAnalytics}=require('../controller/url')

 router.post('/',handlegGenerateNewShortUrl);

 router.get('/analytics/:shortId',handleGetAnalytics)
 
 module.exports=router;