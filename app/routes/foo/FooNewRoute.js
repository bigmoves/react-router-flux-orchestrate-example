/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Form = require('../../components/foo/FooForm');
var Store = require('../../stores/Store');
var Actions = require('../../actions/Actions');

var FooNewRoute = module.exports = React.createClass({
  //mixins: [ Router.Transitions ],

  getInitialState: function() {
    return {
      error: null
    };
  },

  handleSubmit: function(formData) {
    var self = this;
    Actions.create(formData.text)
      .then(function() {
        Router.transitionTo('foo');
      })
      .catch(function(error) {
        self.setState({ error: error.data.msg });
      });
  },

  render: function() {
    var error;

    if (this.state.error) {
      error = (
        <p><b>{"Error:"}</b> {this.state.error}</p>
      );
    }

    return (
      <div>
        <h1>New Foo</h1>
        <Form onSubmit={this.handleSubmit} />
        {error}
      </div>
    );
  }
});

