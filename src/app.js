const fs = require('fs');
const { pipeline } = require('stream');
const { program } = require('commander');
const ConvertibleTransform = require('./convertibleTransform');

program
  .option('-s, --shift <shift>', 'shift')
  .option('-i, --input <input>', 'input')
  .option('-o, --output <output>', 'output')
  .option('-a, --action <action>', 'action');
program.parse(process.argv);
const options = program.opts();
const { shift, input, output, action } = options;

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  new ConvertibleTransform(action, shift),
  output ? fs.createWriteStream(output) : process.stdout,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
