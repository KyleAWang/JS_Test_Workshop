
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

module.exports.play = function play(command) {
  switch (true) {
    case command.includes('PLACE'):
      const pos = command.replace(/PLACE| /g, '').split(',');
      const x = parseInt(pos[0]), y = parseInt(pos[1]);
      if (x <= SQUARE.x && y <= SQUARE.y && x >= 0 && y >= 0) {
        curLocation.f = DIRECTION[pos[2]];
        curLocation.x = x;
        curLocation.y = y;
        this.move(pos[2]);
      }
      break;
    case command === 'MOVE':
      this.move(curLocation.f, 1);
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

};


module.exports.move = function move(face, step = 0) {
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
};

module.exports.curLocation = curLocation;
module.exports.DIRECTION = DIRECTION;
module.exports.DIR_ARR = DIR_ARR;
module.exports.SQUARE = SQUARE;