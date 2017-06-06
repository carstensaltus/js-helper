'use strict';

let gulp = require('gulp');
let ts = require('gulp-typescript');
let tslint = require('gulp-tslint');
let clean = require('gulp-clean');
let runSequence = require('run-sequence');

gulp.task('default', ['build'], () => {

});

gulp.task('watch', ['build'], () => {
	gulp.watch([
		'.env',
		'tsconfig.json',
		'src/**',
		'!node_modules/**'
	], ['build']);
});

gulp.task('build', () => {
	runSequence('clean', 'tslint', 'compile', 'definitions', () => {

	});
});

gulp.task('clean', () => {
	return gulp.src(['dist/*/**']).pipe(clean());
});

gulp.task('tslint', () =>
	gulp.src('src/**/*.ts')
		.pipe(tslint({
			configuration: 'tslint.json',
			formatter: 'prose'
		}))
		.pipe(tslint.report())
);

// Compile Typescript to JavaScript
gulp.task('compile', () => {
	let tsProject = ts.createProject('tsconfig.json');
	let outDir = tsProject.config.compilerOptions.outDir;
	let tsResult = gulp.src(['src/**/*.ts']).pipe(tsProject());
	return tsResult.js.pipe(gulp.dest(outDir));
});

// Compile Typescript to JavaScript
gulp.task('definitions', () => {
	let tsProject = ts.createProject({
		declaration: true
	});
	let tsResult = gulp.src('src/index.ts').pipe(tsProject());
	return tsResult.dts.pipe(gulp.dest('dist'));
});
