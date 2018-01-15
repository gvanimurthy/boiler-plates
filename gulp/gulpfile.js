'use strict';

// Core
const gulp = require('gulp');
const config = require('./gulp/gulp-config');
const del = require('del');
const pjson = require('./package.json');
const browserSync = require('browser-sync');

//constructs build banner for assets
const buildDate = new Date();
const buildMonth = (buildDate.getMonth() + 1) < 10 ? '0' + (buildDate.getMonth() + 1) : buildDate.getMonth();
const buildDay = buildDate.getDate() < 10 ? '0' + buildDate.getDate() : buildDate.getDay();
const buildHours = (buildDate.getHours() + 1) < 10 ? '0' + (buildDate.getHours() + 1) : buildDate.getHours();
const buildMinutes = buildDate.getMinutes() < 10 ? '0' + buildDate.getMinutes() : buildDate.getMinutes();
const banner = '/*! Boiler-plate' +
	' ' + pjson.version +
	' ' + pjson.versionName +
	' ' + buildDate.getFullYear() + buildMonth + buildDay + 'T' + buildHours + buildMinutes +	' */' +
	'\n';

// Clean tasks
gulp.task('clean-build', (cb) => {
	return del([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
	return del([config.basepath.release], cb);
});
gulp.task('clean-docs', (cb) => {
	return del([config.basepath.docs], cb);
});

gulp.task('copy-build', require('./gulp/copy/copy')('build'));
gulp.task('concat', require('./gulp/concat/concat'));
gulp.task('sass', require('./gulp/styles/sass'));
gulp.task('extLibCss', require('./gulp/styles/ext-lib'));
gulp.task('scripts', require('./gulp/scripts/scripts'));
gulp.task('extLibJs', require('./gulp/scripts/ext-lib'));
gulp.task('replace', require('./gulp/replace/replace')); //replace assets in docs with static assets

gulp.task('build', ['copy-build', 'concat', 'sass', 'extLibCss', 'scripts', 'extLibJs'], (cb) => {
});

gulp.task('minify-css', require('./gulp/minify/minify-css')(banner));
gulp.task('minify-js', require('./gulp/minify/minify-js')(banner));
gulp.task('copy-release', require('./gulp/copy/copy')('release'));

gulp.task('release', ['minify-css', 'minify-js', 'copy-release'], (cb) => {

});

gulp.task('copy-examples', require('./gulp/copy/copy')('build', 'examples'));
gulp.task('copy-includes', require('./gulp/copy/copy')('build', 'includes'));
gulp.task('copy-versionImages', require('./gulp/copy/copy')('build', 'versionImages'));

gulp.task('watch', (cb) => {
	browserSync.init({
		server: {
			baseDir: config.basepath.build,
			directory: true
		}
	});
	gulp.watch([`${config.src.scss}/**/*.scss`], ['sass']);
	gulp.watch([`${config.src.script}/**/*.js`], ['scripts']);
	gulp.watch([`${config.src.examples}/**/*.html`], ['copy-examples']);
	gulp.watch([`${config.src.includes}/**/*.html`], ['copy-includes']);
	gulp.watch([`${config.src.versionImages}/**/*`], ['copy-versionImages']);
});

/* PUBLISH TASKS */

gulp.task('wt-clean', require('./gulp/publish/git').clean(config.webTemplateRepo.folder));
gulp.task('wt-clone', require('./gulp/publish/git').clone(config.webTemplateRepo.url, config.webTemplateRepo.folder));
gulp.task('wt-sync', require('./gulp/publish/git').sync(config.basepath.release, config.webTemplateRepo.folder, ['package.json']));
gulp.task('wt-commit', require('./gulp/publish/git').commit(config.webTemplateRepo.folder));
gulp.task('wt-push', require('./gulp/publish/git').push(config.webTemplateRepo.folder));
gulp.task('wt-npm', require('./gulp/publish/npm'));