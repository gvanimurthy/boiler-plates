# Boiler plate - gulp + sass + browserSync

This is a config based build tool.
All build scripts are in [gulp folder](gulp)

## About build tool
Contains scripts to

- [concat](gulp/concat/concat.js)
   - [config](gulp/concat/concat.config.js)
- [copy](gulp/copy/copy.js)
   - [config](gulp/copy/copy.config.js)
- [minify js](gulp/minify/minify-js.js), [minify css](gulp/minify/minify-css.js)
   - [config](gulp/minify/minify.config.js)
- [replace](gulp/replace/replace.js)
   - [config](gulp/replace/replace.config.js) 
- [compile scripts](gulp/scripts/scripts.js)
   - [config](gulp/scripts/js-config.js)
   - [eslint config](gulp/scripts/eslint-config.js)
- [compile sass](gulp/styles/sass.js)
   - [stylelint config](gulp/styles/stylelint-config.js)
- [publish to git](gulp/publish/git.js)
- [publish to npm](gulp/publish/npm.js)

Basic boiler plate contains
- styles - sass compiler + stylelint + autoprefixer
- scripts - eslint
- server side includes - replace SSI with respective html
- server - browser Sync with live reload
- Github.io docs
