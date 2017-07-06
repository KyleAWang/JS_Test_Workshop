const should = require('should');
const sinon = require('sinon');

const game = require('./game');

describe('Game tests ', () => {
  describe('curLocation', () => {
    it('should have init value', () => {
      const target = {
        x: 0,
        y: 0,
        f: 0
      };
      game.curLocation.should.be.eql(target);
    })
  });

  describe('DIRECTION', () => {
    it('should have init value', () => {
      const target = {
        NORTH: 0,
        EAST: 1,
        SOUTH: 2,
        WEST: 3
      };
      game.DIRECTION.should.be.eql(target);
    })
  });

  describe('SQUARE', () => {
    it('should have init value', () => {
      const target = {
        x: 4,
        y: 4
      };
      game.SQUARE.should.be.eql(target);
    })
  });

  describe('Place function', () => {
    it('should not change position with invalid place', () => {
      const command = 'PLACE 6, 7, NORTH';
      const target = {
        x: 0,
        y: 0,
        f: 0
      };
      game.play(command);
      game.curLocation.should.be.eql(target);
    });

    it('should have a postion with valid place', () => {
      const command = ['PLACE 4, 4, NORTH'];
      const target = {
        x: 4,
        y: 4,
        f: 0
      };
      game.play(...command);
      game.curLocation.should.be.eql(target);
    });

    it('should MOVE one step to NORTH', () => {
      const command1 = 'PLACE 0,0,NORTH';
      const command2 = 'MOVE';
      const target = {
        x: 0,
        y: 1,
        f: 0
      };
      game.play(command1);
      game.play(command2);
      game.curLocation.should.be.eql(target);
    });

    it('should turn LEFT to WEST when face to NORTH', () => {
      const command1 = 'PLACE 0,0,NORTH';
      const command2 = 'LEFT';
      const target = {
        x: 0,
        y: 0,
        f: 3
      };
      game.play(command1);
      game.play(command2);
      game.curLocation.should.be.eql(target);
    });

    it('should turn RIGHT to EAST when face to NORTH', () => {
      const command1 = 'PLACE 0,0,NORTH';
      const command2 = 'RIGHT';
      const target = {
        x: 0,
        y: 0,
        f: 1
      };
      game.play(command1);
      game.play(command2);
      game.curLocation.should.be.eql(target);
    });

    it('should REPORT current location', () => {
      const command1 = 'PLACE 0,0,NORTH';
      const command2 = 'REPORT';
      const spy = sinon.spy(console, 'log');
      game.play(command1);
      game.play(command2);
      spy.calledOnce.should.be.true();
      spy.restore();
    });
  });

  describe('Move function', () => {
    beforeEach(() => {
      const command = 'PLACE 0, 0, NORTH';
      game.play(command);
    });
    it('should have one step to EAST', () => {
      game.move(1, 1);
      game.curLocation.x.should.be.eql(1);
    });
    it('should have one step to NORTH', () => {
      game.move(0, 1);
      game.curLocation.y.should.be.eql(1);
    });
    it('should have one step to SOUTH', () => {
      const command = 'PLACE 2, 2, NORTH';
      game.play(command);
      game.move(2, 1);
      game.curLocation.y.should.be.eql(1);
    });
    it('should have one step to WEST', () => {
      const command = 'PLACE 2, 2, NORTH';
      game.play(command);
      game.move(3, 1);
      game.curLocation.x.should.be.eql(1);
    });
    it('should not have one step to WEST', () => {
      game.move(3, 1);
      game.curLocation.x.should.be.eql(0);
    });
    it('should not have one step to SOUTH', () => {
      game.move(2, 1);
      game.curLocation.y.should.be.eql(0);
    });
    it('should not have one step to NORTH', () => {
      const command = 'PLACE 2, 4, NORTH';
      game.play(command);
      game.move(0, 1);
      game.curLocation.y.should.be.eql(4);
    });
    it('should not have one step to EAST', () => {
      const command = 'PLACE 4, 4, NORTH';
      game.play(command);
      game.move(1, 1);
      game.curLocation.x.should.be.eql(4);
    });
  });

});