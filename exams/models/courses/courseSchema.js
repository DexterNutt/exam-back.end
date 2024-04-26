const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  address: {
    type: String,
  },
  area: {
    type: String,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
