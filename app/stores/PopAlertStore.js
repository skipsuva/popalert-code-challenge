var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertStore {
  constructor(){
    this.alertItems = PopAlertSource.fetchListItems();
    this.menuIsOpen = false;

    this.bindListeners({
      handleEditAlertItem: PopAlertActions.editAlertItem,
      handleCancelEditAlertItem: PopAlertActions.cancelEditAlertItem,
      handleOpenMenu: PopAlertActions.openMenu,
      handleCloseMenu: PopAlertActions.closeMenu
    });
  }

  handleEditAlertItem(itemId) {
    this.alertItems[itemId - 1].beingEdited = true;
  }

  handleCancelEditAlertItem(itemId) {
    this.alertItems[itemId - 1].beingEdited = false;
  }

  handleOpenMenu() {
    this.menuIsOpen = true;
  }

  handleCloseMenu() {
    this.menuIsOpen = false;
  }
}

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
