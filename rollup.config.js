import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: './build/bundle.js' // Outputs directly to "build/" in the root
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),
    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    production && terser(),
    copy({
      targets: [
        { src: 'public/**/*', dest: 'build/' }  // Copies everything in public/
      ],
      // Avoid copying "public/build/" into "build/"
      hook: 'buildStart', // Ensures copy happens before Rollup builds
      verbose: true, // Logs copied files
    })    
  ],
  watch: {
    clearScreen: false
  }
};
