/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.addColumns('users', {
    salt: { type: 'text', notNull: true }
  })
};

exports.down = pgm => {
  pgm.dropColumns('users', 'salt');
};
