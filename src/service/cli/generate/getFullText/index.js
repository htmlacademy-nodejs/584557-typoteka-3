"use strict";

const {shuffle, getRandomInt} = require(`../../../utils`);

const getFillText = (texts) => shuffle(texts).slice(0, getRandomInt(1, texts.length)).join(` `);

module.exports.getFullText = getFillText;
