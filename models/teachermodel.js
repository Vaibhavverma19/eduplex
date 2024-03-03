const mongoose = require('mongoose');

// Define schema for teacher data
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Teacher's name
  email_id: { type: String, required: true }, // Email ID
  t_id: { type: String, required: true }, // Teacher ID
  department: [{ type: String }], // Department(s) the teacher belongs to
  schedule: {
    Monday: {
      1: { type: String, default: 'Free' },
      2: { type: String, default: 'Free' },
      3: { type: String, default: 'Free' },
      4: { type: String, default: 'Free' },
      5: { type: String, default: 'Free' },
      6: { type: String, default: 'Free' },
      7: { type: String, default: 'Free' },
      8: { type: String, default: 'Free' }
    },
    Tuesday: {
        1: { type: String, default: 'Free' },
        2: { type: String, default: 'Free' },
        3: { type: String, default: 'Free' },
        4: { type: String, default: 'Free' },
        5: { type: String, default: 'Free' },
        6: { type: String, default: 'Free' },
        7: { type: String, default: 'Free' },
        8: { type: String, default: 'Free' }
    },
    Wednesday: {
      1: { type: String, default: 'Free' },
      2: { type: String, default: 'Free' },
      3: { type: String, default: 'Free' },
      4: { type: String, default: 'Free' },
      5: { type: String, default: 'Free' },
      6: { type: String, default: 'Free' },
      7: { type: String, default: 'Free' },
      8: { type: String, default: 'Free' }
    },
    Thursday: {
        1: { type: String, default: 'Free' },
        2: { type: String, default: 'Free' },
        3: { type: String, default: 'Free' },
        4: { type: String, default: 'Free' },
        5: { type: String, default: 'Free' },
        6: { type: String, default: 'Free' },
        7: { type: String, default: 'Free' },
        8: { type: String, default: 'Free' }
    },
    Friday: {
        1: { type: String, default: 'Free' },
        2: { type: String, default: 'Free' },
        3: { type: String, default: 'Free' },
        4: { type: String, default: 'Free' },
        5: { type: String, default: 'Free' },
        6: { type: String, default: 'Free' },
        7: { type: String, default: 'Free' },
        8: { type: String, default: 'Free' }
    },
    Saturday: {
        1: { type: String, default: 'Free' },
        2: { type: String, default: 'Free' },
        3: { type: String, default: 'Free' },
        4: { type: String, default: 'Free' },
        5: { type: String, default: 'Free' },
        6: { type: String, default: 'Free' },
        7: { type: String, default: 'Free' },
        8: { type: String, default: 'Free' }
    }
  }
});

// Create Mongoose model for teacher data
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;