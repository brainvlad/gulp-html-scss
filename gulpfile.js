const gulp = require('gulp');

gulp.task('hello', function(done) {
    console.log('hello world!');
    done();
});

gulp.task('default', gulp.series('hello'));