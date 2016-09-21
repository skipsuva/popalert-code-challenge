var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertStore {
  constructor(){
    this.alertItems = PopAlertSource.fetchListItems();

    this.bindListeners({
      handleEditAlertItem: PopAlertActions.editAlertItem,
      handleCancelEditAlertItem: PopAlertActions.cancelEditAlertItem,
    });
  }

  handleEditAlertItem(itemId) {
    this.alertItems[itemId - 1].beingEdited = true;
  }

  handleCancelEditAlertItem(itemId) {
    this.alertItems[itemId - 1].beingEdited = false;
  }
}

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
