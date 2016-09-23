import React from 'react';
import PopAlertActions from '../actions/PopAlertActions';

var Menu = React.createClass({

  render(){
    return(
      <div className="menu-container">
        <div className="menu-item"> Privacy Policy </div>
        <div className="menu-item"> Terms of Use </div>
        <div className="menu-item"> Settings </div>
        <div className="menu-item"> Logout </div>
      </div>
    );
  }
});

module.exports = Menu;
