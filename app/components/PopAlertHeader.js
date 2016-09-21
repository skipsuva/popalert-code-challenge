var React = require('react');


var PopAlertHeader = React.createClass({

  render() {
    return(
      <div className="header-content">
        <div className="header-title-container">
          <h2 className="heading-title"> POP ALERTS </h2>
          <img className="header-menu-svg" src="/vendor/assets/images/menu-icon-01.svg " />
        </div>
      </div>
    );
  }
});

module.exports = PopAlertHeader;
