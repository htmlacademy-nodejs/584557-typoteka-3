"use strict";

const {shuffle, getRandomInt} = require(`../../../utils`);

const getFillText = (texts) => {
  const shuffledTexts = shuffle(texts);
  const fullText = [];

  let counter = getRandomInt(0, shuffledTexts.length);

  do {
    const randomIndex = getRandomInt(0, shuffledTexts.length - 1);
    const textItem = shuffledTexts[randomIndex];

    if (!fullText.includes(textItem)) {
      fullText.push(textItem);
    }

    counter--;
  } while (counter);

  return fullText;

};

module.exports.getFullText = getFillText;
