'use strict';

const {cli} = require(`./cli`);

const {USER_ARGV_INDEX, USER_DEFAULT_COMMAND, MAX_ADS_NUMBER, exitCode} = require(`../constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand, count] = userArguments;

if (count > MAX_ADS_NUMBER) {
  console.log(`Не больше ${MAX_ADS_NUMBER}`);

  process.exit(exitCode.error);
}

if (userArguments.length === 0 || !cli[userCommand]) {
  cli[USER_DEFAULT_COMMAND].run();

  process.exit(exitCode.success);
}

cli[userCommand].run(count);
