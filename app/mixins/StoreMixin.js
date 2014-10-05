module.exports = function() {
  var stores = Array.prototype.slice.call(arguments);

  return {

    getInitialState: function() {
      return this.getStateFromStores();
    },

    componentDidMount: function() {
      stores.forEach(function(store) {
        store.addChangeListener(this._onChange);
      }, this);
    },

    componentWillUnmount: function() {
      stores.forEach(function(store) {
        store.removeChangeListener(this._onChange);
      }, this);
    },

    _onChange: function() {
      this.setState(this.getStateFromStores());
    }
  };
};
