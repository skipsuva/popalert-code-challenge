var React = require('react');

var AlertListItem = React.createClass({

  render() {
    return(
      <div className="">
        <p className="alert-item-heading"> Alert List Item Component </p>
        <div className="alert-item-button">
          EDIT
        </div>
      </div>
    );
  }
});

module.exports = AlertListItem;
