var React = require('react');

var AlertListItem = React.createClass({

  onEditClick() {
    this.props.onEditClick(this.props);
  },

  render() {
    var buttonText = this.props.beingEdited ? "CANCEL" : "EDIT";

    return(
      <li>
        <div className="alert-list-item-container">
          <div className="alert-item-heading"> {this.props.itemName} </div>
          <div className="alert-item-button" onClick={this.onEditClick}>
            {buttonText}
          </div>
        </div>
      </li>
    );
  }
});

module.exports = AlertListItem;
