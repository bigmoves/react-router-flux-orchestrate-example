/** @jsx React.DOM */

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./routes/AppRoute');
var Index = require('./routes/IndexRoute');
var Foo = require('./routes/FooRoute');
var FooIndex = require('./routes/foo/FooIndexRoute');
var FooNew = require('./routes/foo/FooNewRoute');
var Unknown = require('./routes/UnknownRoute');

module.exports = (
  <Routes location="history">
    <Route path="/" handler={App}>
      <DefaultRoute handler={Index} />
      <Route name="foo" path="foo" handler={Foo}>
        <DefaultRoute handler={FooIndex} />
        <Route name="foo-new" path="new" handler={FooNew} />
      </Route>
    </Route>
    <NotFoundRoute handler={Unknown} />
  </Routes>
);
