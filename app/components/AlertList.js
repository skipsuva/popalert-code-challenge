var React = require('react');
var AlertListItem = require('./AlertListItem.js');
var PopAlertActions = require('../actions/PopAlertActions');

var AlertList = React.createClass({

  handleEditClick() {
    // need to get reference to item id...
    debugger;
    PopAlertActions.editAlertItem();
  },

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
              <AlertListItem
                onEditClick={this.handleEditClick}

              />
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
