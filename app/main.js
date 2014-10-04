require('./styles/styles.scss');

var React = require('react');
window.React = React;
var routes = require('./router');
React.renderComponent(routes, document.body);
