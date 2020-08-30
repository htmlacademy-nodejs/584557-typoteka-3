"use strict";

const {getRandomInt, shuffle} = require(`../../../utils`);
const {MAX_ANNOUNCES_NUMBER} = require(`../../../../constants`);

const getAnnounces = (announces) => shuffle(announces).slice(0, getRandomInt(1, MAX_ANNOUNCES_NUMBER)).join(` `);

module.exports.getAnnounces = getAnnounces;
