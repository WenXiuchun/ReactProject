'use strict'

// JSX Javascript XML
var userName = 'Mike';
var age = 23;
var template = (
    <div>
        <h1>{userName.toUpperCase() + '!'}</h1>
        <p>Age: {age}</p>
        <p>Location: Chengdu</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);