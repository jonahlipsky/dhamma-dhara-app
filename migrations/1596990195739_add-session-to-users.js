/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.addColumns('users', {
    passwordDigest: { type: 'text' },
    sessionToken: { type: 'text' }
  });
};

exports.down = pgm => {
  pgm.dropColumns('users', ['passwordDigest', 'sessionToken']);
};
