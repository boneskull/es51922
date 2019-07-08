'use strict';

module.exports = () => ({
  files: [
    'src/**/*.js',
    'vendor/es51922.js',
    {pattern: 'test/setup.js', instrument: false}
  ],

  tests: ['test/**/*.spec.js'],

  env: {
    type: 'node',
    runner: 'node',
    params: {
      runner: `-r ${require.resolve('esm')}`,
    }
  },
  debug: true,

  setup() {
    const path = require('path');
    require(path.join(wallaby.localProjectDir, 'test', 'setup'));
  }
});
