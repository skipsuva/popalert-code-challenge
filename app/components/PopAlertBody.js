var React         = require('react');
var SearchInput   = require('./SearchInput.js');
var AlertList     = require('./AlertList.js');
var PopAlertActions = require('../actions/PopAlertActions');

var PopAlertBody = React.createClass({

  render() {
    return(
      <div className="body-content">
        <div className="search-input-container">
          <SearchInput />
        </div>
        <div className="alert-list-container">
          <AlertList />
        </div>
      </div>
    );
  }
});

module.exports = PopAlertBody;
