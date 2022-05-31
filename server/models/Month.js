const { Schema, model } = require('mongoose');
const employeeSchema = require('./Employee');

const monthSchema = new Schema(
  {
    monthName: {
        type: String,
        required: 'You need a name',
        minlength: 1,
        maxlength: 20
    },
    monthYear: {
      type: Number,
      required: 'You need a year',
      length: 4
    },
    lastYear: {
        type: Number,
        required: 'Need previous year',
    },
    monthPercent: {
        type: Number,
        required: 'Need precent increase',
    },
    monthGoal: {
        type: Number,
    },
    username: {
      type: String,
      required: true
    },
    employees: [employeeSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

monthSchema.virtual('employeeCount').get(function() {
  return this.employees.length;
});

const Month = model('Month', monthSchema);

module.exports = Month;