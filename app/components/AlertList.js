import React from 'react';
import AlertListItem from './AlertListItem.js';
import AlertToggle from './AlertToggle.js';
import PopAlertActions from '../actions/PopAlertActions';

var AlertList = React.createClass({

  handleEditClick(itemProps) {
    if(this.props.toggleSelected === "all"){
      if(itemProps.inPersonalAlerts){
        PopAlertActions.removeItem(itemProps.itemId);
      } else {
        PopAlertActions.addItem(itemProps.itemId);
      }
    }else if(this.props.toggleSelected === "personal") {
      if(itemProps.beingEdited){
        PopAlertActions.removeItem(itemProps.itemId);
      } else {
        PopAlertActions.editAlertItem(itemProps.itemId);
      }
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
              inPersonalAlerts={item.inPersonalAlerts}
              beingEdited={item.beingEdited}
              toggleSelected={this.props.toggleSelected}
              onEditClick={this.handleEditClick} />;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});

module.exports = AlertList;
