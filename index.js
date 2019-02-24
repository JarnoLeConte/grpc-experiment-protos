const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const defaultProtoOptions = {
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

function loadSync(protoFile, protoOptions = {}) {
    const file = getProtoPath(protoFile);
    const options = { ...defaultProtoOptions, ...protoOptions };
    const packageDefinition = protoLoader.loadSync(file, options);
    return packageDefinition;
}

module.exports = {
    defaultProtoOptions,
    getProtoPath,
    loadSync,
};
