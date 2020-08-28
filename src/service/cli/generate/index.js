"use strict";

const fs = require(`fs`).promises;

const {DEFAULT_ADS_NUMBER, ANNOUNCES, CATEGORIES, TITLES} = require(`../../../constants`);

const {getTitle} = require(`./getTitle`);
const {getAnnounces} = require(`./getAnnounce`);
const {getFullText} = require(`./getFullText`);
const {getDate} = require(`./getDate`);
const {getCategories} = require(`./getCategories`);

const generate = (count) => {
  const arr = new Array(count)
    .fill({})
    .map(() => {
      return {
        title: getTitle(TITLES),
        createdDate: getDate(),
        announce: getAnnounces(ANNOUNCES),
        fullText: getFullText(ANNOUNCES),
        сategory: getCategories(CATEGORIES)
      };
    });

  return arr;
};

module.exports = {
  name: `--generate`,
  run: async (count) => {
    count = Number.parseInt(count, 10) || DEFAULT_ADS_NUMBER;

    const content = JSON.stringify(generate(count));

    try {
      await fs.writeFile(`mocks.json`, content);

      console.log(`Operation success. File created.`);
    } catch (error) {
      console.log(error);
    }
  }
};
