var gulp = require('gulp');
var sequence = require('gulp-sequence');
require('./gulp/clean');
require('./gulp/codeclimate');
require('./gulp/cover');
require('./gulp/instrument');
require('./gulp/integration');
require('./gulp/lint');
require('./gulp/open');
require('./gulp/unit');
require('./gulp/watch');
gulp.task('travis', sequence(['instrument'], ['lint', 'cover', 'int'], 'codeclimate'));
gulp.task('test', sequence(['instrument'], 'cover', 'int'));
gulp.task('default', ['lint', 'test']);