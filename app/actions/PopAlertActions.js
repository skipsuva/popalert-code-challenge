var alt = require('../alt');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertActions {

  addItem(itemId) {
    return itemId;
  }

  removeItem(itemId) {
    return itemId;
  }

  editAlertItem(itemId) {
    return itemId;
  }

  cancelEditAlertItem(itemId) {
    return itemId;
  }

  openMenu() {
    return true;
  }

  closeMenu() {
    return true;
  }

  showPopularAlerts() {
    return true;
  }

  showPersonalAlerts() {
    return true;
  }
}

module.exports = alt.createActions(PopAlertActions);
