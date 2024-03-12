//importing nanoid 
const shortid=require('shortid');
//importing Db Schema
const URL=require('../model/url');


async function handlegGenerateNewShortUrl(req,res){
const body=req.body;
if(!body.url) return res.status(400).json({msg:"Enter valid url"})
const shortID=shortid();

await URL.create({
    shortId: shortID,
    redirectUrl:body.url,
    visitHistory:[],
})
  return res.json({id:shortID});
}

async function handleGetAnalytics(req,res){
   const shortId=req.params.shortId;
   
   const result=await URL.findOne({shortId}); 
   return  res.json({totalClicks:result.visitHistory.length, analytics:result.visitHistory})
}  



module.exports={
    handlegGenerateNewShortUrl,
    handleGetAnalytics
}