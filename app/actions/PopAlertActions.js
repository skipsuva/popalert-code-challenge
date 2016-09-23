var alt = require('../alt');

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

  filterListByQuery(query) {
    return query;
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
