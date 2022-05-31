const { Schema } = require('mongoose');

const goalsSchema = new Schema(
  {
    employeename: {
      type: String,
      required: true
    },
    monthname: {
        type: String,
        required: true
    },
    hours: {
        type: Number
    },
    goal: {
        type: Number
    },
    adjustments: {
        type: Number
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = goalsSchema;