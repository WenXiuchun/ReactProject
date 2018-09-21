'use strict';

// JSX Javascript XML

var userName = 'Mike';
var age = 23;
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        age
    ),
    React.createElement(
        'p',
        null,
        'Location: Chengdu'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
