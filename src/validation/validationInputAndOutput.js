const fs = require('fs');

const validateInputAndOutput = (input, output) => {
  const validate = (fileName, fileType) => {
    if (fileName) {
      if (!fs.existsSync(fileName)) {
        console.error('Error: file does not exist.');
        process.exit(1);
      }

      try {
        const type = (fileType === 'input') ? fs.constants.R_OK : fs.constants.W_OK;
        fs.accessSync(fileName, type);
      } catch (err) {
        console.error('Error: file permission.', err);
        process.exit(1);
      }
    }
  };

  validate(input, 'input');
  validate(output, 'output');
};

module.exports = validateInputAndOutput;
