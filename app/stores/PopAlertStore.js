var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertStore {
  constructor(){
    // set initial state
    // this.

    this.bindListeners({
      // handleFetchListItems: PopAlertActions.fetchListItems,
      handleEditAlertItem: PopAlertActions.editAlertItem

    });
  }

  // handleFetchListItems(){
    // change state
  // }
  handleEditAlertItem() {
    debugger;
  }
}

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
