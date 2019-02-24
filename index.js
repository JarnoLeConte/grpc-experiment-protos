const path = require('path');

const protoOptions = {
  keepCase: false,
  longs: String,
  enums: Number,
  defaults: false,
  oneofs: false,
  arrays: true,
};

function getProtoPath(...paths) {
  return path.join(__dirname, 'protos', ...paths);
}


module.exports = {
    protoOptions,
    getProtoPath,
};
