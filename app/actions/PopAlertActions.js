var alt = require('../alt');
var PopAlertSource = require('../sources/PopAlertSource');

class PopAlertActions {
  // updateSomething(test) {
  //   return something;
  // }
  editAlertItem(){
    return true;
  }

}

module.exports = alt.createActions(PopAlertActions);
