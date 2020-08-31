"use strict";

const {getRandomInt, shuffle} = require(`../../../utils`);

const getCategories = (catigoriesArr) => {
  return shuffle(catigoriesArr).slice(0, getRandomInt(1, catigoriesArr.length));
};

module.exports.getCategories = getCategories;
