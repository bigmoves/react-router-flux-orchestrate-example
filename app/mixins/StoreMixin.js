module.exports = function(...stores) {
  return {

    getInitialState() {
      return this.getStateFromStores();
    },

    componentDidMount() {
      stores.forEach(store => {
        store.addChangeListener(this._onChange);
      });
    },

    componentWillUnmount() {
      stores.forEach(store => {
        store.removeChangeListener(this._onChange);
      });
    },

    _onChange() {
      this.setState(this.getStateFromStores());
    }
  };
};
