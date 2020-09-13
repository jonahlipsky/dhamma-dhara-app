/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.addIndex('users', 'username', { unique: true });
};

exports.down = pgm => {
  pgm.dropIndex('users', 'username');
};
