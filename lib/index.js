const cowsay = require('cowsay');
const readline = require('readline-sync');
const homedir = require('os').homedir();
const fs = require('fs');
const IronHackers = require('./models/ironhackers');

console.clear = () => {
  console.log('\u001b[H\u001b[2J\u001b[3J');
}

module.exports.start = () => {
  try {
    const students = JSON.parse(fs.readFileSync(`${homedir}/.ironhackers.json`, 'utf8'));
    const ironhackers = new IronHackers(students);

    console.clear();
    let input;
    while (input !== 'exit') {
      console.log(cowsay.think({ text: ironhackers.next(), e: "oO" }));
      input = readline.question('');
      console.clear();
    }
  } catch (error) {
    console.error('Invalid ironhackers.json file:', error.message);
  }
}
