/** @jsx React.DOM */

jest.dontMock('../AppRoute');

describe('App route', function() {
  var React = require('react/addons');
  var ReactTestUtils = React.addons.TestUtils;
  var App = require('../AppRoute');
  var Router = require('react-router');
  var Routes = Router.Routes;
  var Route = Router.Route;

  var component = ReactTestUtils.renderIntoDocument(
    Routes(null,
      Route({ handler: App })
    )
  );

  it('renders a header', function() {
    var header = ReactTestUtils.findRenderedDOMComponentWithTag(
      component, 'h1');
    expect(header.getDOMNode().textContent).toEqual('Application');
  });
});
