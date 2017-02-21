"use strict";
var $ = require('jquery');
var $2 = require('jquery');
function bootstrap() {
    console.log('bootstrap');
    $('#container').append('<p>test</p>');
    $2('#container').append('<p>test2</p>');
}
exports.bootstrap = bootstrap;
