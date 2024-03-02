const mongoose = require('mongoose');

// Define schema for free venues
const freeVenueSchema = new mongoose.Schema({
  roomNo: { type: String, required: true }, // Room number
  category: { type: String, enum: ['lecture hall', 'lab', 'seminar hall'], required: true }, // Category of the venue
  blockNo: { type: String, required: true }, // Block number
  schedule: {
    monday: {
      1: { type: String, enum: ['free', 'occupied'], default: 'free' },
      2: { type: String, enum: ['free', 'occupied'], default: 'free' },
      3: { type: String, enum: ['free', 'occupied'], default: 'free' },
      4: { type: String, enum: ['free', 'occupied'], default: 'free' },
      5: { type: String, enum: ['free', 'occupied'], default: 'free' },
      6: { type: String, enum: ['free', 'occupied'], default: 'free' },
      7: { type: String, enum: ['free', 'occupied'], default: 'free' },
      8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    },
    tuesday: {
      1: { type: String, enum: ['free', 'occupied'], default: 'free' },
      2: { type: String, enum: ['free', 'occupied'], default: 'free' },
      3: { type: String, enum: ['free', 'occupied'], default: 'free' },
      4: { type: String, enum: ['free', 'occupied'], default: 'free' },
      5: { type: String, enum: ['free', 'occupied'], default: 'free' },
      6: { type: String, enum: ['free', 'occupied'], default: 'free' },
      7: { type: String, enum: ['free', 'occupied'], default: 'free' },
      8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    },
    wednesday: {
        1: { type: String, enum: ['free', 'occupied'], default: 'free' },
        2: { type: String, enum: ['free', 'occupied'], default: 'free' },
        3: { type: String, enum: ['free', 'occupied'], default: 'free' },
        4: { type: String, enum: ['free', 'occupied'], default: 'free' },
        5: { type: String, enum: ['free', 'occupied'], default: 'free' },
        6: { type: String, enum: ['free', 'occupied'], default: 'free' },
        7: { type: String, enum: ['free', 'occupied'], default: 'free' },
        8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    },
    thursday: {
        1: { type: String, enum: ['free', 'occupied'], default: 'free' },
        2: { type: String, enum: ['free', 'occupied'], default: 'free' },
        3: { type: String, enum: ['free', 'occupied'], default: 'free' },
        4: { type: String, enum: ['free', 'occupied'], default: 'free' },
        5: { type: String, enum: ['free', 'occupied'], default: 'free' },
        6: { type: String, enum: ['free', 'occupied'], default: 'free' },
        7: { type: String, enum: ['free', 'occupied'], default: 'free' },
        8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    },
    friday: {
        1: { type: String, enum: ['free', 'occupied'], default: 'free' },
        2: { type: String, enum: ['free', 'occupied'], default: 'free' },
        3: { type: String, enum: ['free', 'occupied'], default: 'free' },
        4: { type: String, enum: ['free', 'occupied'], default: 'free' },
        5: { type: String, enum: ['free', 'occupied'], default: 'free' },
        6: { type: String, enum: ['free', 'occupied'], default: 'free' },
        7: { type: String, enum: ['free', 'occupied'], default: 'free' },
        8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    },
    saturday:{
        1: { type: String, enum: ['free', 'occupied'], default: 'free' },
        2: { type: String, enum: ['free', 'occupied'], default: 'free' },
        3: { type: String, enum: ['free', 'occupied'], default: 'free' },
        4: { type: String, enum: ['free', 'occupied'], default: 'free' },
        5: { type: String, enum: ['free', 'occupied'], default: 'free' },
        6: { type: String, enum: ['free', 'occupied'], default: 'free' },
        7: { type: String, enum: ['free', 'occupied'], default: 'free' },
        8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    },
    sunday:{
        1: { type: String, enum: ['free', 'occupied'], default: 'free' },
        2: { type: String, enum: ['free', 'occupied'], default: 'free' },
        3: { type: String, enum: ['free', 'occupied'], default: 'free' },
        4: { type: String, enum: ['free', 'occupied'], default: 'free' },
        5: { type: String, enum: ['free', 'occupied'], default: 'free' },
        6: { type: String, enum: ['free', 'occupied'], default: 'free' },
        7: { type: String, enum: ['free', 'occupied'], default: 'free' },
        8: { type: String, enum: ['free', 'occupied'], default: 'free' }
    }
    // Add more days as needed
  }
});

// Create Mongoose model for free venues
const FreeVenue = mongoose.model('FreeVenue', freeVenueSchema);

module.exports = FreeVenue;
