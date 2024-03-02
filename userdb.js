const db=require('./db/connect')

const venue=require('./models/venuemodel')

const venujson=require('./testdata.json')

const start= async()=>{
    try {
        await venue.create(venujson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();