var React = require('react');

var AlertListItem = React.createClass({

  onEditClick() {
    this.props.onEditClick(this.props.itemId);
  },

  render() {
    var buttonText = this.props.beingEdited ? "REMOVE" : "EDIT";
    return(
      <li>
        <div className="alert-list-item-container">
          <p className="alert-item-heading"> {this.props.itemName} </p>
          <div className="alert-item-button" onClick={this.onEditClick}>
            {buttonText}
          </div>
        </div>
      </li>
    );
  }
});

module.exports = AlertListItem;
