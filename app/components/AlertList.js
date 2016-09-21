var React = require('react');
var AlertListItem = require('./AlertListItem.js');

var AlertList = React.createClass({

  render() {
    return(
      <div>
        <div className="alert-toggle-container">
          <div className="alert-toggle-button-left"> Popular Alerts </div>
          <div className="alert-toggle-button-right"> Your Alerts </div>
        </div>
        <ul>
          <li>
            <div className="alert-list-item-container">
              <AlertListItem />
            </div>
          </li>
          <li>
            <div className="alert-list-item-container">
              <AlertListItem />
            </div>
          </li>
          <li>
            <div className="alert-list-item-container">
              <AlertListItem />
            </div>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = AlertList;
