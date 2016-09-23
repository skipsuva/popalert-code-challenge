import React from 'react';
import PopAlertActions from '../actions/PopAlertActions';

var AlertToggle = React.createClass({
  onPopularToggle() {
    this.props.onPopularToggleClick();
  },

  onPersonalToggle() {
    this.props.onPersonalToggleClick();
  },

  render(){
    var popularSelection = this.props.toggleSelected === "all" ? "alert-toggle-button selected" : "alert-toggle-button ";
    var personalSelection = this.props.toggleSelected === "personal" ? "alert-toggle-button selected" : "alert-toggle-button ";

    return(
      <div className="alert-toggle-container">
        <div className={popularSelection}
          onClick={this.onPopularToggle}>
          Popular Alerts
        </div>
        <div className={personalSelection}
          onClick={this.onPersonalToggle}>
          Your Alerts
        </div>
      </div>
    );
  }
});

module.exports = AlertToggle;
