var 
gulp = require('gulp'),
path = require('path'),
changed = require('gulp-changed'),
charset = require('gulp-charset'),
rename = require('gulp-rename'),
zip = require('gulp-zip'),
htmlReplace = require('gulp-html-replace'),
replacePath = require('gulp-replace-path'),
less = require('gulp-less'),
minifyCss = require('gulp-clean-css'),
// base64 = require('gulp-base64'),
imagemin = require('gulp-imagemin'),
imageminJpeg = require('imagemin-jpeg-recompress'),
imageminPngquant = require('imagemin-pngquant');

// var buildPath = '//game.gtimg.cn/images/sqnx/cp/a20170524sqnx/';
var srcBasePath = path.join(__dirname,'./src');
var buildBasePath = path.join(__dirname,'./build');
var src ={
	styles: path.join(srcBasePath,'styles'),
	scripts: path.join(srcBasePath,'scripts'),
	images: path.join(srcBasePath,'images'),
	media: path.join(srcBasePath,'media'),
	fonts: path.join(srcBasePath,'fonts'),
}
var build ={
	styles: path.join(buildBasePath,'styles'),
	scripts: path.join(buildBasePath,'scripts'),
	images: path.join(buildBasePath,'images'),
	media: path.join(buildBasePath,'media'),
	fonts: path.join(buildBasePath,'fonts'),
}
gulp.task('less',function (){
	gulp.src(src.styles+'/main.less')
			.pipe(changed(build.styles))
			.pipe(less())
			// .pipe(gulp.dest(build.styles))
			// .pipe(base64({maxImageSize: 200*1024}))
			.pipe(minifyCss())
			.pipe(rename('main.min.css'))
			.pipe(gulp.dest(build.styles));
})
gulp.task('img',function (){
	gulp.src(src.images+'/*.*')
		.pipe(changed(build.images))
		.pipe(imagemin([
	    imageminJpeg({min:50,max:60}),
	    imageminPngquant({quality: '30-40'})
		]))
		.pipe(gulp.dest(build.images));
	gulp.src(src.images+'/cv/*.*')
		.pipe(changed(build.images+'/cv'))
		.pipe(imagemin([
	    imageminJpeg({min:50,max:60}),
	    imageminPngquant({quality: '30-40'})
		]))
		.pipe(gulp.dest(build.images+'/cv'));
})
gulp.task('js',function (){
	gulp.src(src.scripts+'/*.*')
		.pipe(changed(build.scripts))
		.pipe(gulp.dest(build.scripts));
	gulp.src(src.scripts+'/lib/*.*')
		.pipe(changed(build.scripts+'/lib'))
		.pipe(gulp.dest(build.scripts+'/lib'));
})
gulp.task('media',function (){
	gulp.src(src.media+'/*.*')
		.pipe(changed(build.media))
		.pipe(gulp.dest(build.media));
})
gulp.task('html',function (){
	// gulp.src([srcBasePath+'/cj.js'])
	// 	.pipe(changed(buildBasePath))
	// 	.pipe(gulp.dest(build.scripts));
	gulp.src([srcBasePath+'/index.html'])
			.pipe(changed(buildBasePath))
			.pipe(htmlReplace({
					less: '<link rel="stylesheet" type="text/css" href="./styles/main.min.css">',
					// js: '<script src="scripts/cj.js"></script>'
					// less: {
					// 	src: gulp.src(build.styles+'/main.min.css'),
					// 	tpl: '<style>\n%s\n</style>'
					// }
				},
				{
					keepUnassigned: true,
				  keepBlockTags: false
				}))
			.pipe(gulp.dest(buildBasePath));
})

gulp.task('build',['img','less','js','media','html'],function (){
	console.log('build complete')
});

gulp.task('default',['build']);