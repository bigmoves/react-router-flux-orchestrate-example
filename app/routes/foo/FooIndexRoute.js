/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Store = require('../../stores/Store');
var StoreMixin = require('../../mixins/StoreMixin');

var FooIndexRoute = module.exports = React.createClass({
  mixins: [ StoreMixin(Store) ],

  getStateFromStores: function() {
    return {
      items: Store.getAll()
    };
  },

  render: function() {
    var items = Object.keys(this.state.items).map(function(itemID) {
      return (
        <li key={itemID}>{this.state.items[itemID]}</li>
      );
    }, this);

    return (
      <div>
        <h1>Foo Index</h1>
        <Link to="foo-new">Create Foo</Link>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

