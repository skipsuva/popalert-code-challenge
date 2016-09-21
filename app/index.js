var React           = require('react');
var ReactDOM        = require('react-dom');
var AltContainer    = require('alt-container');
var style           = require('./styles/main.scss');
var PopAlertHeader  = require('./components/PopAlertHeader.js');
var PopAlertBody    = require('./components/PopAlertBody.js');


var PopAlertParent = React.createClass({
  render: function () {
    return (
      <div>
        <PopAlertHeader />
        <PopAlertBody />
      </div>
    );
  }
});

ReactDOM.render(
  <PopAlertParent />,
  document.getElementById('app')
);
