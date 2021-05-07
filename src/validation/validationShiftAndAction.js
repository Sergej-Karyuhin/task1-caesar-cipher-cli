const validateShiftAndAction = (shift, action) => {
  const isCorrectShiftArgument = ((shift < 1000) && (shift > -1000));
  const isCorrectActionArgument = ((action === 'encode') || (action === 'decode'));
  if (!isCorrectShiftArgument || !isCorrectActionArgument) {
    console.error('Error: invalid --shift or --action argument.');
    process.exit(1);
  }
};

module.exports = validateShiftAndAction;
