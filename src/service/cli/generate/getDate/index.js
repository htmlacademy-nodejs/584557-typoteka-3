"use strict";

const {getRandomInt} = require(`../../../utils`);

const TREE_MONTH = 60 * 60 * 24 * 91 * 1000;

const getDate = () =>{
  return new Date(
      (+new Date() - getRandomInt(0, TREE_MONTH))
  ).toISOString().replace(`T`, ` `).slice(0, -5);
};

module.exports.getDate = getDate;
