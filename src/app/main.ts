import $ = require('jquery');
import 'jqueryui';
import { bootstrap } from './bootstrap';
let code = '<p>Hello</p>';

$(document).ready(() => {
    
    $('#container').html(code);
    bootstrap();

    $("<input>")
        .appendTo("#container")
        .datepicker();
});

