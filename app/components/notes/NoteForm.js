/** @jsx React.DOM */

var React = require('react');

var NoteForm = module.exports = React.createClass({

  propTypes: {
    note: React.PropTypes.object
  },

  getInitialState() {
    var note = this.props.note || {};
    return {
      text: note.text || ''
    };
  },

  componentDidMount() {
    this.refs.text.getDOMNode().focus();
  },

  handleSubmit() {
    var note = this.props.note || {};
    note.text = this.state.text;
    this.props.onSubmit(note);
    this.setState({ text: '' });
  },

  render() {
    return (
      <div>
        <input
          ref="text"
          type="text"
          placeholder="Enter text..."
          value={this.state.text}
          onChange={this._onTextChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  },

  _onTextChange(e) {
    this.setState({ text: e.target.value });
  }
});

