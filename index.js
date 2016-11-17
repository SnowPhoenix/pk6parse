'use strict';
const gen6 = require('./gen6');
const gen7 = require('./gen7');

exports.parseBuffer = (buf, {parseNames = false, gen = 6, language} = {}) => {
  let parsed;
  if (gen === 6) {
    parsed = gen6.parseBuffer(buf, {parseNames, gen, language});
  } else if (gen === 7) {
    parsed = gen7.parseBuffer(buf, {parseNames, gen, language});
  } else {
    throw new Error('Unsupported gen');
  }
  return parsed;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

exports.assignReadableNames = gen6.assignReadableNames;
exports.getPokemonData = gen6.getPokemonData;
exports.getItemData = gen6.getItemData;
exports.getMoveData = gen6.getMoveData;
exports.getAbilityData = gen6.getAbilityData;
exports.getNatureData = gen6.getNatureData;
exports.getMedalData = gen6.getMedalData;
exports.getRibbonData = gen6.getRibbonData;
