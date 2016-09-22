var React = require('react');
var Menu = require('./Menu.js');
var PopAlertActions = require('../actions/PopAlertActions');


var PopAlertHeader = React.createClass({

  onMenuClick() {
    if(this.props.PopAlertStore.menuIsOpen){
      PopAlertActions.closeMenu();
    } else {
      PopAlertActions.openMenu();
    }
  },

  render() {
    var menu = this.props.PopAlertStore.menuIsOpen ?
      <Menu />
      :
      "";

    return(
      <div className="header-content">
        <div className="header-title-container">
          <h2 className="heading-title"> POP ALERTS </h2>
          <img className="header-menu-svg"
            src="/vendor/assets/images/menu-icon-01.svg"
            onClick={this.onMenuClick} />
        </div>
        {menu}
      </div>
    );
  }
});

module.exports = PopAlertHeader;
