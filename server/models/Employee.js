const { Schema, model } = require('mongoose');
const goalsSchema = require('./Goal');

const employeeSchema = new Schema(
  {
    firstName: {
        type: String,
        required: 'You need a first',
        minlength: 1,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: 'You need a last',
        minlength: 1,
        maxlength: 20
    },
    tenure: {
      type: Date,
      required: 'You need a DOH'
    },
    position: {
        type: String,
    },
    tier: {
        type: Number,
    },
    status: {
        type: String,
    },
    username: {
      type: String,
      required: true
    },
    monthname: {
        type: String,
        required: true
    },
    goals: [goalsSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

employeeSchema.virtual('goalsCount').get(function() {
  return this.goals.length;
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;