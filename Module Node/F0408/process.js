module.exports = function getFlag(flag) {
  const { argv } = require("process");

  for (let line in argv) {
    if (argv[line].match(flag)) {
      return argv[parseInt(line) + 1];
    }
  }
};
