/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.dropColumns('users', 'login');
};

exports.down = pgm => {
  pgm.addColumns('users', {
    login: { type: 'varchar(1000)', notNull: true },
  });
};
