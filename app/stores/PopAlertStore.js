var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertStore {
  constructor(){
    this.alertItems = PopAlertSource.fetchAllItems();
    this.menuIsOpen = false;
    this.toggleSelected = "all";

    this.bindListeners({
      handleAddAlertItem: PopAlertActions.addItem,
      handleRemoveAlertItem: PopAlertActions.removeItem,
      handleEditAlertItem: PopAlertActions.editAlertItem,
      handleCancelEditAlertItem: PopAlertActions.cancelEditAlertItem,
      handleOpenMenu: PopAlertActions.openMenu,
      handleCloseMenu: PopAlertActions.closeMenu,
      handleShowPopularAlerts: PopAlertActions.showPopularAlerts,
      handleShowPersonalAlerts: PopAlertActions.showPersonalAlerts
    });
  }

  handleAddAlertItem(itemId) {
    this.alertItems[itemId - 1].inPersonalAlerts = true;
  }

  handleRemoveAlertItem(itemId) {
    this.alertItems[itemId - 1].inPersonalAlerts = false;
    if (this.toggleSelected === "personal") {
      this.alertItems.splice([itemId - 1], 1);
    }
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

  handleShowPopularAlerts() {
    this.toggleSelected = "all";
    this.alertItems = PopAlertSource.fetchAllItems();
  }

  handleShowPersonalAlerts() {
    this.toggleSelected = "personal";
    this.alertItems = PopAlertSource.fetchPersonalItems();
  }
}

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
