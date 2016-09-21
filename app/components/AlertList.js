var React = require('react');
var AlertListItem = require('./AlertListItem.js');
var PopAlertActions = require('../actions/PopAlertActions');

var AlertList = React.createClass({

  handleEditClick(itemId) {
    PopAlertActions.editAlertItem(itemId);
  },

  render() {
    return(
      <div>
        <div className="alert-toggle-container">
          <div className="alert-toggle-button-left"> Popular Alerts </div>
          <div className="alert-toggle-button-right"> Your Alerts </div>
        </div>
        <ul>
          {this.props.alertItems.map(function(item) {
            return <AlertListItem
              key={item.id}
              itemId={item.id}
              itemName={item.name}
              beingEdited={item.beingEdited}
              onEditClick={this.handleEditClick} />;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});

module.exports = AlertList;
