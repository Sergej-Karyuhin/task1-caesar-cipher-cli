const fs = require('fs');
const { pipeline } = require('stream');
const { program } = require('commander');
const ConvertibleTransform = require('./convertibleTransform');
const validateCLIarguments = require('./validationCLIarguments');

program
  .option('-s, --shift <shift>', 'shift')
  .option('-i, --input <input>', 'input')
  .option('-o, --output <output>', 'output')
  .option('-a, --action <action>', 'action');
program.parse(process.argv);
const options = program.opts();
const { shift, input, output, action } = options;

validateCLIarguments(shift, input, output, action);

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  new ConvertibleTransform(action, shift),
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Operation succeeded!');
    }
  }
);
