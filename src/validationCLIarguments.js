const validateShiftAndAction = require('./validation/validationShiftAndAction');
const validateInputAndOutput = require('./validation/validationInputAndOutput');

const validateCLIarguments = (shift, input, output, action) => {
  validateShiftAndAction(shift, action);
  validateInputAndOutput(input, output);
};

module.exports = validateCLIarguments;
