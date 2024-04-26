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

const Academy = mongoose.model('Academy', academySchema);

module.exports = Academy;
