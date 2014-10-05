/** @jsx React.DOM */

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./routes/AppRoute');
var Index = require('./routes/IndexRoute');
var Notes = require('./routes/NotesRoute');
var NotesIndex = require('./routes/notes/NotesIndexRoute');
var NotesNew = require('./routes/notes/NotesNewRoute');
var Unknown = require('./routes/UnknownRoute');

module.exports = (
  <Routes location="history">
    <Route path="/" handler={App}>
      <DefaultRoute handler={Index} />
      <Route name="notes" path="notes" handler={Notes}>
        <DefaultRoute handler={NotesIndex} />
        <Route name="add-note" path="new" handler={NotesNew} />
      </Route>
    </Route>
    <NotFoundRoute handler={Unknown} />
  </Routes>
);
