const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default', () => {
	return gulp.src([
			'_locales/**',
			'images/**',
			'background.js',
			'manifest.json'
		], {
			base: '.'
		})
		.pipe(zip('add-to-things.zip'))
		.pipe(gulp.dest('.'))
		.pipe(zip('add-to-things.nex'))
		.pipe(gulp.dest('.'));
});
