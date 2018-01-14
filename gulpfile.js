const gulp = require('gulp'),
	prompt = require('gulp-prompt'),
	fs = require('fs'),
	path = require('path'),
	npm = require('npm'),
	git = require('gulp-git'),
	shell = require('gulp-shell'),
	runsequence = require('run-sequence'),
	pjson = require('./package.json');

const uri = 'http://registry.npmjs.org/',
	username = 'gvanimurthy',
	email = 'gvanimurthy@gmail.com',
	pkg_id = pjson.name + '-' + pjson.version + '.tgz';

var auth;

const npmPublish = function() {
	return npm.commands.pack([], function(err){
		if (err) {
			throw Error(err);
		}
		console.log('packing files');
		const publishParams = {
			metadata: JSON.parse(JSON.stringify(pjson)),
			access: 'public',
			body: fs.createReadStream(path.resolve(pkg_id)),
			auth: auth
		};
		npm.registry.publish(uri, publishParams, function(err, res) {
			if (err) {
				throw Error(err);
			}
			console.log("Publish successfull: " + JSON.stringify(res));
			return true;
		})
	})
};

const npmLogin = function (npmTask) {
	return npm.load(null, function(err){
		if (err) {
			throw Error(err);
		}

		return gulp.src('./webpack/**/*')
			.pipe(prompt.prompt({
				type: 'password',
				name: 'password',
				message: 'Please enter \'gvanimurthy\' npm account password'
			}, function(res){
				auth = {
					username: username,
					password: res.password,
					email: email,
					alwaysAuth: true
				};
				const addUserParams = {
					auth: auth
				};
				npm.registry.adduser(uri, addUserParams, function (err, data, raw, res) {
					if(err) {
						throw Error(err);
					}
					console.log('logged in as ' + auth.username);
					npmTask();
				})
			}));
	})
};

// gulp.task('publish', npmLogin(npmPublish));
gulp.task('git:clone', function() {
	git.clone('https://github.com/gvanimurthy/boiler-plates.git', {args: './release'}, function(err) {
		if(err) throw err;
	});
});
gulp.task('copy:release', function () {
	gulp.src('./webpack/**/*')
		.pipe(gulp.dest('./release/webpack/'));
});
gulp.task('git:commit', function (cb) {
	process.chdir('./release');
	return gulp.src('./*')
		.pipe(git.add())
		.pipe(git.commit(pjson.version))
		// .pipe(git.push('origin', function (err) {
		// 	if (err) throw err;
		// }));
	// return shell.task(['git diff'])();
});
gulp.task('git:push', function(){
	process.chdir('./release');
	git.push('origin', function (err) {
		if (err) throw err;
	});
});


