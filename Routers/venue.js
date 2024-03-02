const express=require('express');

const routers=express.Router();

//import controllers
const {getvenues,getvenuestesting}=require("../controllers/venues")

routers.route('/').get(getvenues);
routers.route('/testing').get(getvenuestesting);

module.exports= routers;