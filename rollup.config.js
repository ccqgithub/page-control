import babel from 'rollup-plugin-babel';
// import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = [];

// external dependencies
external = external.concat(Object.keys(pkg.dependencies || {}));
// external peer dependencies
external = external.concat(Object.keys(pkg.peerDependencies || {}));

let plugins = [
  babel({
    exclude: ['node_modules/**/*'],
    plugins: ['external-helpers'],
  })
];

// if (process.env.BUILD !== 'production') {
//   plugins.push(istanbul({
//     exclude: ['node_modules/**/*'],
//   }));
// }

export default {
  entry: 'index.js',
  plugins: plugins,
  external: external,
  dest: pkg.main,
  format: 'umd',
  moduleName: 'page-control',
  sourceMap: true,
  globals: {
    
  }
};
