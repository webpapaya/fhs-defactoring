/* eslint-env mocha */

const { assertThat, equalTo } = require('hamjest');
const BowlingGame = require('./bowling');

describe('BowlingGame', () => {
  const rollMany = (game, n, pins) => {
    for (var i = 0; i < n; i++) {
      game.roll(pins);
    }
  };

  const rollSpare = (game) => {
    game.roll(5);
    game.roll(5);
  };

  const rollStrike = (game) => {
    game.roll(10);
  };

  it('should handle gutter game', () => {
    const game = new BowlingGame();
    rollMany(game, 20, 0);
    assertThat(game.score(), equalTo(0));
  });

  it('should handle all ones', () => {
    const game = new BowlingGame();
    rollMany(game, 20, 1);
    assertThat(game.score(), equalTo(20));
  });

  it('should handle one spare', () => {
    const game = new BowlingGame();
    rollSpare(game);
    game.roll(3);
    rollMany(game, 17, 0);
    assertThat(game.score(), equalTo(16));
  });

  it('should handle one strike', () => {
    const game = new BowlingGame();
    rollStrike(game);
    game.roll(3);
    game.roll(4);
    rollMany(game, 16, 0);
    assertThat(game.score(), equalTo(24));
  });

  it('should handle a perfect game', () => {
    const game = new BowlingGame();
    rollMany(game, 12, 10);
    assertThat(game.score(), equalTo(300));
  });
});
