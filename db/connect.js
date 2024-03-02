const mongoose=require('mongoose');

const monguri='mongodb://127.0.0.1:27017/venues'

mongoose.connect(monguri)

const db=mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB `);
  });
  
  // Connection error
  db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });
  
  // Disconnected from MongoDB
  db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

module.exports=db;