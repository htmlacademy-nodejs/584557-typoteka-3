"use strict";

const {getRandomInt} = require(`../../../utils`);

module.exports.getTitle = (titles) => titles[getRandomInt(0, titles.length - 1)];
