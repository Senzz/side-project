
const crypto = require('crypto');
const users = [
  {
    name: 'admin',
    pass: 'admin'
  }
];

module.exports = users.map((user, index) => {
  return {
    name: user.name,
    pass: crypto.createHash('md5').update(user.pass).digest('hex')
  }
})