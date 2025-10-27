import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [{
  input: 'src/snow-flake-id.js',
  output: [
    {
      file: 'dist/snow-flake-id.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/snow-flake-id.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve({
      browser: true
    }),
    commonjs(),
    terser()
  ],
  external: []
}, {
  input: 'src/snow-flake-id.d.ts',
  output: [{ file: 'dist/snow-flake-id.d.ts', format: 'es' }],
  plugins: [dts()]
}];