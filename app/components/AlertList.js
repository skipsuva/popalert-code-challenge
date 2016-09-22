var React = require('react');
var AlertListItem = require('./AlertListItem.js');
var AlertToggle = require('./AlertToggle.js');
var PopAlertActions = require('../actions/PopAlertActions');

var AlertList = React.createClass({

  handleEditClick(itemProps) {
    if(itemProps.beingEdited){
      PopAlertActions.cancelEditAlertItem(itemProps.itemId);
    } else {
      PopAlertActions.editAlertItem(itemProps.itemId);
    }
  },

  handlePopularToggleClick(){
    PopAlertActions.showPopularAlerts();
  },

  handlePersonalToggleClick(){
    PopAlertActions.showPersonalAlerts();
  },

  render() {
    return(
      <div>
        <AlertToggle
          toggleSelected={this.props.toggleSelected}
          onPopularToggleClick={this.handlePopularToggleClick}
          onPersonalToggleClick={this.handlePersonalToggleClick} />
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
