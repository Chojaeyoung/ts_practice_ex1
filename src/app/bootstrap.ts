import $ = require('jquery');
import * as $2 from 'jquery';
export function bootstrap() {
    console.log('bootstrap');

    $('#container').append('<p>test</p>');
    $2('#container').append('<p>test2</p>');
}