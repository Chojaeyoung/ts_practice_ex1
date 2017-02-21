"use strict";
var $ = require('jquery');
require('jqueryui');
var bootstrap_1 = require('./bootstrap');
var code = '<p>Hello</p>';
$(document).ready(function () {
    $('#container').html(code);
    bootstrap_1.bootstrap();
    $("<input>")
        .appendTo("#container")
        .datepicker();
});
