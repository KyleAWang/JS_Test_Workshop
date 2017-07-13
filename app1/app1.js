const game = require('./game');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let step = 1;
const commands = [];
module.exports.ask = function ask() {
  var stdin = process.stdin, stdout = process.stdout;

  stdin.resume();
  stdout.write('step' + step + ': ');
  step++;

  stdin.once('data', function (data) {
    data = data.toString().trim();

    if (data.toUpperCase() === 'END') {
      process.exit();
    } else {
      if (commands.length === 0 && !data.includes('PLACE')) {
        console.log('Start your game by placing your robot, please.');
      } else {
        commands.push(data);
        game.play(data);
      }
      ask();
    }
  });
};


console.log('Input steps one by one in command line as prompt.\nWriting END to finish the game\nInitial default location is 0, 0, NORTH for only PLACE COMMAND');
this.ask();
