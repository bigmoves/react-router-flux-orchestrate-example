/** @jsx React.DOM */

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./routes/app');
var Index = require('./routes/index');
var Foo = require('./routes/foo');
var Unknown = require('./routes/unknown');

module.exports = (
  <Routes location="history">
    <Route path="/" handler={App}>
      <DefaultRoute handler={Index} />
      <Route name="foo" path="foo" handler={Foo} />
    </Route>
    <NotFoundRoute handler={Unknown} />
  </Routes>
);
