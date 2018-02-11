const querystring = require('querystring');

const querystringParse: Function = (str: String): String => {
  const newStr = str.substring(1);
  return querystring.parse(newStr);
};

export {
  querystringParse
};