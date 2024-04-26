const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../config/config.env` });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

export async function init() {
  try {
    await mongoose.connect(DB);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error.message);
  }
}
