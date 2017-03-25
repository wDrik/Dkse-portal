var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	htmlmin = require('gulp-htmlmin');

gulp.task('default', ['sass', 'sass-service', 'sass-index', 'js', 'htmlmin','image', 'watch']);





// Sass -> Processa e comprime scss para css
gulp.task('sass', function () {
    return gulp.src('assets/src/sass/**/*.scss')
        .pipe(concat('style.min.css')) // Concat -> Automatiza o precesso de compressão do sass-index
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('sass-service', function () {
    return gulp.src('assets/src/sass-service/**/*.scss')
        .pipe(concat('service.min.css')) // Concat -> Automatiza o precesso de compressão do sass-index
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('sass-index', function () {
    return gulp.src('assets/src/sass-index/**/*.scss')
        .pipe(concat('index.min.css')) // Concat -> Automatiza o precesso de compressão do sass-index
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});







// Uglify -> Comprime arquivos js
gulp.task('js', function () {
	return gulp.src('assets/src/js/**/*.js')
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'));		
});


// gulp-imagemin -> Usado para minificar imagens 
gulp.task('image', function() {
    return gulp.src('assets/src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
});

// htmlmin -> Minifica arquivos .html
gulp.task('htmlmin', function() {
  return gulp.src('_html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});

// Watch -> Observador, automatiza as tarefas acima
gulp.task('watch', function() {
    gulp.watch('assets/src/sass/**/*.scss',['sass']);
    gulp.watch('assets/src/sass-service/**/*.scss',['sass-service']);
    gulp.watch('assets/src/sass-index/**/*.scss',['sass-index']);
    gulp.watch('assets/src/js/**/*.js',['js']);
    gulp.watch('assets/src/img/*',['image']);
    gulp.watch('_html/**/*.html',['htmlmin']);
});

