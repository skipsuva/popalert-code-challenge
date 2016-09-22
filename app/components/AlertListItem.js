var React = require('react');

var AlertListItem = React.createClass({

  onEditClick() {
    this.props.onEditClick(this.props);
  },

  getButtonText() {
    if(this.props.toggleSelected === "all"){
      return this.props.inPersonalAlerts ? "REMOVE" : "ADD";
    }else if(this.props.toggleSelected === "personal") {
      return this.props.beingEdited ? "REMOVE" : "EDIT";
    }
  },

  render() {
    var buttonText = this.getButtonText();

    return(
      <li>
        <div className="alert-list-item-container"onClick={this.onEditClick}>
          <div className="alert-item-heading"> {this.props.itemName} </div>
          <div className="alert-item-button">
            {buttonText}
          </div>
        </div>
      </li>
    );
  }
});

module.exports = AlertListItem;
