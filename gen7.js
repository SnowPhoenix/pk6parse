'use strict';
const common = require('./common');

exports.parseBuffer = (buf, {parseNames = false, language} = {}) => {
  const data = common.parseBuffer(buf, {parseNames, language});

  if (parseNames) {
    common.assignReadableNames(data, language);
  }

  return data;
};
