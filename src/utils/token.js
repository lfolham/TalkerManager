const crypto = require('crypto');

function uniqueToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = uniqueToken;