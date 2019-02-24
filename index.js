const path = require('path');

function getProtoPath(...paths) {
  return path.join(__dirname, 'protos', ...paths);
}

module.exports = {
    getProtoPath,
};
