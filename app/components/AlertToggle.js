var React = require('react');
var PopAlertActions = require('../actions/PopAlertActions');

var AlertToggle = React.createClass({
  onPopularToggle() {
    this.props.onPopularToggleClick();
  },

  onPersonalToggle() {
    this.props.onPersonalToggleClick();
  },

  render(){
    return(
      <div className="alert-toggle-container">
        <div className="alert-toggle-button"
          onClick={this.onPopularToggle}>
          Popular Alerts
        </div>
        <div className="alert-toggle-button"
          onClick={this.onPersonalToggle}>
          Your Alerts
        </div>
      </div>
    );
  }
});

module.exports = AlertToggle;
