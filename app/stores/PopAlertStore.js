var alt = require('../alt');
var PopAlertActions = require('../actions/PopAlertActions');

class PopAlertStore {
  constructor(){
    this.menuIsOpen = false;
    this.toggleSelected = "all";
    this.alertItems = this.fetchItems();

    this.bindListeners({
      handleAddAlertItem: PopAlertActions.addItem,
      handleRemoveAlertItem: PopAlertActions.removeItem,
      handleEditAlertItem: PopAlertActions.editAlertItem,
      handleCancelEditAlertItem: PopAlertActions.cancelEditAlertItem,
      handleFilterByQuery: PopAlertActions.filterListByQuery,
      handleOpenMenu: PopAlertActions.openMenu,
      handleCloseMenu: PopAlertActions.closeMenu,
      handleShowPopularAlerts: PopAlertActions.showPopularAlerts,
      handleShowPersonalAlerts: PopAlertActions.showPersonalAlerts
    });
  }

  handleAddAlertItem(itemId) {
    testData[itemId - 1].inPersonalAlerts = true;
    this.alertItems = this.fetchItems();
  }

  handleRemoveAlertItem(itemId) {
    testData[itemId - 1].inPersonalAlerts = false;
    this.alertItems = this.fetchItems();
  }

  handleEditAlertItem(itemId) {
    testData[itemId - 1].beingEdited = true;
  }

  handleCancelEditAlertItem(itemId) {
    testData[itemId - 1].beingEdited = false;
  }

  handleFilterByQuery(query) {
    var sanitizedQuery = query.toLowerCase();
    if(sanitizedQuery === "") { this.alertItems = this.fetchItems();}
    this.alertItems = this.fetchItems().filter(function(item) {
      return item.name.toLowerCase().includes(sanitizedQuery);
    });
  }

  handleOpenMenu() {
    this.menuIsOpen = true;
  }

  handleCloseMenu() {
    this.menuIsOpen = false;
  }

  handleShowPopularAlerts() {
    this.toggleSelected = "all";
    this.alertItems = this.fetchItems();
  }

  handleShowPersonalAlerts() {
    this.toggleSelected = "personal";
    this.alertItems = this.fetchItems();
  }

  fetchAllItems() {
    return testData;
  }

  fetchPersonalItems() {
    this.resetEditState();
    var personalItems = testData.filter(function(item) {
      return item.inPersonalAlerts;
    });
    return personalItems;
  }

  fetchItems(){
    if(this.toggleSelected === "all"){
      return this.fetchAllItems();
    } else {
      return this.fetchPersonalItems();
    }
  }

  resetEditState() {
    testData.forEach(function(item){
      item.beingEdited = false;
    });
  }

}

var testData = [
  { id: 1, name: "Jay Z", beingEdited: false, inPersonalAlerts: true},
  { id: 2, name: "Beyonce", beingEdited: false, inPersonalAlerts: true},
  { id: 3, name: "Kanye West", beingEdited: false, inPersonalAlerts: false},
  { id: 4, name: "Lebron James", beingEdited: false, inPersonalAlerts: false},
  { id: 5, name: "New York Yankees", beingEdited: false, inPersonalAlerts: false},
  { id: 6, name: "Steve Spurgat", beingEdited: false, inPersonalAlerts: false},
  { id: 7, name: "Flipboard", beingEdited: false, inPersonalAlerts: false},
  { id: 8, name: "Syria", beingEdited: false, inPersonalAlerts: false},
  { id: 9, name: "Barack Obama", beingEdited: false, inPersonalAlerts: false}
];

module.exports = alt.createStore(PopAlertStore, 'PopAlertStore');
