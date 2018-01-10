var gulp = require('gulp'),
		path = require('path'),
		changed = require('gulp-changed'),
		charset = require('gulp-charset'),
		rename = require('gulp-rename'),
		zip = require('gulp-zip'),
		htmlReplace = require('gulp-html-replace'),
		replacePath = require('gulp-replace-path'),
		less = require('gulp-less'),
		minifyCss = require('gulp-clean-css'),
		base64 = require('gulp-base64'),
		imagemin = require('gulp-imagemin'),
		imageminPngquant = require('imagemin-pngquant'),
		imageminMozjpeg = require('imagemin-mozjpeg');

var buildPath = '//game.gtimg.cn/images/sqnx/cp/a20170524sqnx/';
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
			// .pipe(changed(build.styles))
			.pipe(less())
			.pipe(gulp.dest(build.styles))
			.pipe(base64({maxImageSize: 200*1024}))
			.pipe(minifyCss())
			.pipe(rename('main.min.css'))
			.pipe(gulp.dest(build.styles));
})
gulp.task('img',function (){
	gulp.src(src.images+'/*.*')
		.pipe(changed(build.images))
		.pipe(imagemin([
	    imagemin.jpegtran({progressive: true}),
	    // imagemin.optipng({optimizationLevel: 7})
	    // imageminMozjpeg({quality:50}),
	    imageminPngquant({quality: '5-10'})
		]))
		.pipe(gulp.dest(build.images));
})
gulp.task('html',function (){
	gulp.src([srcBasePath+'/index.html'])
			.pipe(changed(buildBasePath))
			.pipe(htmlReplace({
					less: '<link rel="stylesheet" type="text/css" href="./styles/main.min.css">'
					// less: {
					// 	src: gulp.src(build.styles+'/main.min.css'),
					// 	tpl: '<style>\n%s\n</style>'
					// }
				},
				{
					keepUnassigned: true,
				  keepBlockTags: true
				}))
			.pipe(gulp.dest(buildBasePath));
})

gulp.task('build',['img','less','html'],function (){
	console.log('build complete')
});

gulp.task('dist',['build'],function (){
	console.log('dist complete')
	// gulp.src(build.styles+'/main.min.css')
	// 		// .pipe(changed(path.join(__dirname,'dist')))
	// 		.pipe(gulp.dest(path.join(__dirname,'dist')));
	gulp.src(build.images+'/share-icon.*')
			.pipe(changed(path.join(__dirname,'dist')))
			.pipe(gulp.dest(path.join(__dirname,'dist/ossweb-img/images')));
	gulp.src(buildBasePath+'/*.html')
			// .pipe(changed(path.join(__dirname,'dist')))
			.pipe(htmlReplace({
					less: {
						src: gulp.src(build.styles+'/main.min.css'),
						tpl: '<style>\n%s\n</style>'
					},
					// less: '<link rel="stylesheet" type="text/css" href="./styles/main.min.css">',
					share: {
						src: gulp.src(srcBasePath+'/share.tpl'),
						tpl: '%s'
					}
				},
				{
					keepUnassigned: true
				}
			))
			.pipe(replacePath('./',buildPath))
			// // .pipe(convertEncoding({to: 'GBK'}))
			.pipe(charset({to: 'gbk'}))
			.pipe(gulp.dest(path.join(__dirname,'dist')));
})

gulp.task('zip',['dist'],function (){
	console.log('zip complete')
	gulp.src(path.join(__dirname,'dist/**/*.*'))
			.pipe(zip(path.basename(__dirname)+'.zip'))
			.pipe(gulp.dest( path.join(__dirname, 'dist') ))
})
gulp.task('default',['zip']);