import mongoose from 'mongoose';
import dotenv from 'dotenv';

const dotEnv = dotenv.config();

let transactionSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  yearMonth: {
    type: String,
    required: true
  },
  yearMonthDay: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
});

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_CONNECTION;

const transactionModel = mongoose.model('transaction', transactionSchema);


export { db, transactionModel };
