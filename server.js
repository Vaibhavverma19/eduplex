const express=require('express');

const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 5000;

const venue_routes=require("./Routers/venue")
const teacher_routes=require('./Routers/teachers')
const db=require('./db/connect')
app.get('/',(req,res)=>{
    res.status(200).send("server is live ")
})

app.use('/api/venues',venue_routes);
app.use('/api/teachers',teacher_routes);

app.listen(PORT,()=>{
    console.log(`server is running live on the port ${PORT}`);
})



