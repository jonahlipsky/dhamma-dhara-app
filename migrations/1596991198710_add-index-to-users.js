/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createIndex( 'users', 'login', { unique: true } );
};

exports.down = pgm => {
  pgm.dropIndex('users', 'login');
};
