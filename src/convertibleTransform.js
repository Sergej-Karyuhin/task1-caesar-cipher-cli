const { Transform } = require('stream');
const converter = require('./encryptionAlgorithm');

class ConvertibleTransform extends Transform {
  constructor(action, offset) {
    super();
    this.action = action;
    this.offset = offset;
  }

  _transform(chunk, encoding, callback) {
    const str = chunk.toString('utf8');
    const offset = (this.action === 'encode') ? +this.offset : -this.offset;
    try {
      callback(null, converter(str, offset));
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = ConvertibleTransform;
