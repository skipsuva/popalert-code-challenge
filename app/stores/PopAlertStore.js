var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertStore {
  constructor(){
    this.alertItems = PopAlertSource.fetchListItems();

    this.bindListeners({
      handleEditAlertItem: PopAlertActions.editAlertItem
    });
  }

  handleEditAlertItem(itemId) {
    this.alertItems[itemId - 1].beingEdited = true;
  }
}

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
