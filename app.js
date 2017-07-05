
const curLocation = {
  x: 0,
  y: 0,
  f: 0
};

const DIRECTION = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3
};

const DIR_ARR = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const SQUARE = {
  x: 4,
  y: 4
};

module.exports.game = function game(command) {
  switch (true) {
    case command.includes('PLACE'):
      const pos = command.replace(/PLACE| /g, '').split(',');
      const x = parseInt(pos[0]), y = parseInt(pos[1]);
      if (x <= SQUARE.x && y <= SQUARE.y && x >= 0 && y >= 0) {
        curLocation.f = DIRECTION[pos[2]];
        curLocation.x = x;
        curLocation.y = y;
        move(pos[2]);
      }
      break;
    case command === 'MOVE':
      move(curLocation.f, 1);
      break;
    case command === 'LEFT':
      curLocation.f = (curLocation.f + 4 - 1) % 4;
      break;
    case command === 'RIGHT':
      curLocation.f = (curLocation.f + 4 + 1) % 4;
      break;
    case command === 'REPORT':
      console.log('CURRENT LOCATION:', curLocation.x, curLocation.y, DIR_ARR[curLocation.f]);
      break;
  }

}

// function sol(...commands) {
//   if (!Array.isArray(commands) || commands.length === 0) {
//     console.log('Start your game by placing your robot, please.');
//   } else if (!commands[0].includes('PLACE')) {
//     console.log('Place your robot first, please.');
//   }
//   console.log(commands);
//   commands.map((cur, index) => {
//     switch (true) {
//       case cur.includes('PLACE'):
//         const pos = cur.replace(/PLACE| /g, '').split(',');
//         const x = parseInt(pos[0]), y = parseInt(pos[1]);
//         if (x <= SQUARE.x && y <= SQUARE.y && x >= 0 && y >= 0) {
//           curLocation.f = DIRECTION[pos[2]];
//           curLocation.x = x;
//           curLocation.y = y;
//           move(pos[2]);
//         }
//         break;
//       case cur === 'MOVE':
//         move(curLocation.f, 1);
//         break;
//       case cur === 'LEFT':
//         curLocation.f = (curLocation.f + 4 - 1) % 4;
//         break;
//       case cur === 'RIGHT':
//         curLocation.f = (curLocation.f + 4 + 1) % 4;
//         break;
//       case cur === 'REPORT':
//         console.log(curLocation.x, curLocation.y, DIR_ARR[curLocation.f]);
//         break;
//     }
//   });
// }

function move(face = throwError(), step = 0) {
  switch (face) {
    case 0:
      if (curLocation.y + step <= SQUARE.y) {
        curLocation.y += step;
      }
      break;
    case 1:
      if (curLocation.x + step <= SQUARE.x) {
        curLocation.x += step;
      }
      break;
    case 2:
      if (curLocation.y - step >= 0) {
        curLocation.y -= step;
      }
      break;
    case 3:
      if (curLocation.x - step >= 0) {
        curLocation.x -= step;
      }
      break;
  }
}

function throwError() {
  throw new Error('Missing parameter');
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

// process.stdin.on('data', function (chunk) {
//   process.stdout.write('data: ' + chunk);
// });

let step = 1;
const commands = [];
function ask() {
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
        game(data);
      }
      ask();
    }
  });
}


console.log('Input steps one by one in command line as prompt.\nWriting END to finish the game\nInitial default location is 0, 0, NORTH for only PLACE COMMAND');
ask();
