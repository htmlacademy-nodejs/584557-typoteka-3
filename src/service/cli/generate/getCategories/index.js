"use strict";

const {getRandomInt} = require(`../../../utils`);

const getCategories = (catigoriesArr) => {
  let count = getRandomInt(0, catigoriesArr.length);

  const newCategories = [];

  do {
    const randomIndex = getRandomInt(0, catigoriesArr.length - 1);
    const category = catigoriesArr[randomIndex];

    if (!newCategories.includes(category)) {
      newCategories.push(category);
    }

    count--;
  } while (count);

  return newCategories;
};

module.exports.getCategories = getCategories;
