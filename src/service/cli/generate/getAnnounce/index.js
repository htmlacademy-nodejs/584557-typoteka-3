"use strict";

const {getRandomInt} = require(`../../../utils`);
const {MAX_ANNOUNCES_NUMBER} = require(`../../../../constants`);

const getAnnounces = (announces) => {
  let announcesCount = getRandomInt(0, MAX_ANNOUNCES_NUMBER);
  const newAnnounces = [];

  do {
    const randomIndex = getRandomInt(0, announces.length - 1);
    const announce = announces[randomIndex];

    if (!newAnnounces.includes(announce)) {
      newAnnounces.push(announce);

      announcesCount--;
    }
  } while (announcesCount);

  return newAnnounces;
};

module.exports.getAnnounces = getAnnounces;
