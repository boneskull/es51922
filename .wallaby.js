'use strict';

module.exports = (wallaby) => ({
  files: [
    'src/*.js',
    'vendor/*.js',
    {pattern: 'test/setup.js', instrument: false}
  ],

  tests: ['test/**/*.spec.js'],

  env: {
    type: 'node',
    runner: 'node',
    params: {
      runner: `-r ${require.resolve('esm')}`,
    },
    env: {
      params: 'DEBUG=es51922'
    }
  },
  debug: true,
  workers: {recycle: true},
  setup() {
    const path = require('path');
    require(path.join(wallaby.localProjectDir, 'test', 'setup'));
  }
});
