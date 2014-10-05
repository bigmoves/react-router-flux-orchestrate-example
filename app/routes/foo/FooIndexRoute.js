/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Store = require('../../stores/Store');

function getStateFromStores() {
  return {
    items: Store.getAll()
  };
}

var FooIndexRoute = module.exports = React.createClass({
   getInitialState: function() {
     return getStateFromStores();
   },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
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
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

