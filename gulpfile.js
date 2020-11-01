/* eslint-disable @typescript-eslint/no-var-requires */
const gulpfile = require('gulp');
const gulpless = require('gulp-less');
const postcss = require('gulp-postcss');
const debug = require('gulp-debug');
const csso = require('gulp-csso');
const autoprefixer = require('autoprefixer');
const NpmImportPlugin = require('less-plugin-npm-import');

gulpfile.task('less', function () {
  const plugins = [autoprefixer()];

  return gulpfile
    .src('styles/theme/custom/*-theme.less')
    .pipe(debug({title: 'Less files:'}))
    .pipe(
      gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({prefix: '~'})],
      }),
    )
    .pipe(postcss(plugins))
    .pipe(
      csso({
        debug: true,
      }),
    )
    .pipe(gulpfile.dest('./public'));
});
