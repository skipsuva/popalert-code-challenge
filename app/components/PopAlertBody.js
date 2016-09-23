import React         from 'react';
import SearchInput   from './SearchInput.js';
import AlertList     from './AlertList.js';
import PopAlertActions from '../actions/PopAlertActions';

var PopAlertBody = React.createClass({
  onFilterListByQuery(query) {
    PopAlertActions.filterListByQuery(query);
  },

  render() {
    return(
      <div className="body-content">
        <div className="search-input-container">
          <SearchInput
            filterListByQuery={this.onFilterListByQuery}
            />
        </div>
        <div className="alert-list-container">
          <AlertList
            alertItems={this.props.PopAlertStore.alertItems}
            toggleSelected={this.props.PopAlertStore.toggleSelected}
          />
        </div>
      </div>
    );
  }
});

module.exports = PopAlertBody;
