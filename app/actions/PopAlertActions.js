var alt = require('../alt');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertActions {

  editAlertItem(itemId){
    return itemId;
  }
}

module.exports = alt.createActions(PopAlertActions);
