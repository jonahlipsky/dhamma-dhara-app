/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.addIndex('users', 'sessionToken', { unique: true });
};

exports.down = pgm => {
  pgm.dropIndex('users', 'sessionToken');
};
