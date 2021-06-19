const Echo = require('./Echo')

function createEcho (text) {
  return new Echo(text)
}

module.exports = createEcho
