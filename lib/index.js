const cowsay = require('cowsay');
const readline = require('readline-sync');
const homedir = require('os').homedir();
const fs = require('fs');
const IronHackers = require('./models/ironhackers');
const say = require('say');

console.clear = () => {
  console.log('\u001b[H\u001b[2J\u001b[3J');
}

module.exports.start = () => {
  try {
    const students = JSON.parse(fs.readFileSync(`${homedir}/.ironhackers.json`, 'utf8'));
    const ironhackers = new IronHackers(students);

    let input;
    let ironhacker;

    while (input !== 'exit') {
      console.clear();
      say.stop();

      ironhacker = ironhackers.next();

      console.log(cowsay.think({ text: ironhacker, e: "oO" }));
      say.speak(ironhacker);

      input = readline.question('');
    }
  } catch (error) {
    console.error('Invalid ironhackers.json file:', error.message);
  }
}
