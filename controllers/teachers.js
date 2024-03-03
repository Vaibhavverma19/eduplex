const teacher=require('../models/teachermodel')
const getteachers=async (req,res)=>{
  const data=await teacher.find({})
  res.status(200).json({data})
}

module.exports=getteachers;