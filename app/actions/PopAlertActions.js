var alt = require('../alt');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertActions {

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
}

module.exports = alt.createActions(PopAlertActions);
