var React = require('react');

var AlertListItem = React.createClass({

  onEditClick() {
    this.props.onEditClick();
  },

  render() {
    return(
      <div className="">
        <p className="alert-item-heading"> Alert List Item Component </p>
        <div className="alert-item-button" onClick={this.onEditClick}>
          EDIT
        </div>
      </div>
    );
  }
});

module.exports = AlertListItem;
