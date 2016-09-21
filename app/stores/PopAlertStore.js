var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertStore {
  constructor(){
    // set initial state

    this.bindListeners({
      // handleFetchListItems: PopAlertActions.fetchListItems,

    });
  }

  // handleFetchListItems(){
    // change state
  // }

}

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
