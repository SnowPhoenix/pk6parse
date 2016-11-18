'use strict';
const common = require('./common');

exports.parseBuffer = (buf, {parseNames = false, language} = {}) => {
  const data = common.parseBuffer(buf, {parseNames, language});

  const hyperTraining = buf.readUInt16LE(0xDE);
  data.hyperTrainedHP = Boolean(hyperTraining & 0x01);
  data.hyperTrainedAtk = Boolean(hyperTraining & 0x02);
  data.hyperTrainedDef = Boolean(hyperTraining & 0x04);
  data.hyperTrainedSpAtk = Boolean(hyperTraining & 0x08);
  data.hyperTrainedSpDef = Boolean(hyperTraining & 0x10);
  data.hyperTrainedSpe = Boolean(hyperTraining & 0x20);

  if (parseNames) {
    common.assignReadableNames(data, language);
  }

  return data;
};
