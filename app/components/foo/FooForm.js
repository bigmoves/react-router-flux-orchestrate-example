/** @jsx React.DOM */

var React = require('react');

var FooForm = module.exports = React.createClass({

  componentDidMount() {
    this.refs.text.getDOMNode().focus();
  },

  handleSubmit(e) {
    e.preventDefault();
    var form = this.getDOMNode();
    var text = this.refs.text.getDOMNode().value;

    this.props.onSubmit({
      text: text
    });
    form.reset();
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref="text"
          type="text"
          placeholder="Enter text..."
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
});

