var fs = require('fs-extra');
var path = require('path');
var bowerDir = path.resolve(process.cwd(),'bower_components');
var xtemplateDir =  path.resolve(bowerDir,'xtemplate/build/');
var buildDir = path.resolve(process.cwd(),'build');
fs.copySync(path.resolve(xtemplateDir,'xtemplate-debug.js'),path.resolve(buildDir,'xtemplate-debug.js'));
fs.copySync(path.resolve(xtemplateDir,'xtemplate.js'),path.resolve(buildDir,'xtemplate.js'));
fs.copySync(path.resolve(xtemplateDir,'xtemplate/runtime-debug.js'),path.resolve(buildDir,'xtemplate/runtime-debug.js'));
fs.copySync(path.resolve(xtemplateDir,'xtemplate/runtime.js'),path.resolve(buildDir,'xtemplate/runtime.js'));
console.log('done');