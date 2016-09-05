var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <span>Hello React!</span>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('main'));

