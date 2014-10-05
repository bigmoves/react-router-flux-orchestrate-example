module.exports = function() {
  var stores = Array.prototype.slice.call(arguments);

  return {

    getInitialState() {
      return this.getStateFromStores();
    },

    componentDidMount() {
      stores.forEach(store => {
        store.addChangeListener(this._onChange);
      }, this);
    },

    componentWillUnmount() {
      stores.forEach(store => {
        store.removeChangeListener(this._onChange);
      }, this);
    },

    _onChange() {
      this.setState(this.getStateFromStores());
    }
  };
};
