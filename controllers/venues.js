const venue=require('../models/venuemodel')
const getvenues=(async (req,res)=>{
   const data=await venue.find({})
    res.status(200).json({data})
})
const getvenuestesting=( async (req,res)=>{
   const {weekday,slot}=req.query;
   let que = {};
    que[`schedule.${weekday}.${slot}`] = 'free';
    const data=await venue.find(que);
    res.status(200).json({data})
})

module.exports={getvenues,getvenuestesting};