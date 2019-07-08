import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import externals from 'rollup-plugin-subpath-externals';

export default {
  input: 'src/index.js',
  output: [
    {file: pkg.main, format: 'cjs', sourcemap: 'inline'},
    {file: pkg.module, format: 'esm', sourcemap: 'inline'}
  ],
  plugins: [
    externals(pkg),
    commonjs(),
    resolve(),
    babel({
      exclude: ['node_modules/**']
    })
  ]
};
