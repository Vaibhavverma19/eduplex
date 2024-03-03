const express=require('express');

const routers=express.Router();

//import controllers
const getteachers=require("../controllers/teachers")

routers.route('/').get(getteachers);


module.exports = routers;