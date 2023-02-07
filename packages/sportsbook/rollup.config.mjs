import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';
// import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import dotenv from 'rollup-plugin-dotenv';

const { PRODUCTION } = process.env;

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
        // dir: 'dist',
        // format: 'esm',
        // sourcemap: true,
        // preserveModules: true,
      },
    ],
    external: [/@babel\/runtime/, 'react', 'react-dom'],
    plugins: [
      external(),
      resolve({ extensions: ['.mjs', '.js', '.jsx', '.json'] }),
      // commonjs({ include: /node_modules/ }),
      image(),
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(
          PRODUCTION ? 'production' : 'development',
        ),
      }),
      dotenv.default(),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      terser(),
    ],
  },
];

// {
//   dir: 'dist/cjs',
//   format: 'cjs',
//   sourcemap: true,
//   preserveModules: true,
//   preserveModulesRoot: 'dist'
// },
// {
//   dir: 'dist/esm',
//   format: 'esm',
//   sourcemap: true,
//   preserveModules: true,
//   preserveModulesRoot: 'dist'
// },

// {
//   file: 'dist/index.js',
//   format: 'cjs',
//   sourcemap: true,
// },
// {
//   file: 'dist/index.es.js',
//   format: 'esm',
//   sourcemap: true,
// },
