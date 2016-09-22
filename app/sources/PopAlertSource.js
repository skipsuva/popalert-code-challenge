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


var PopAlertSource = {
  fetchAllItems() {
    return testData;
  },

  fetchPersonalItems() {
    var personalItems = testData.filter(function(item) {
      return item.inPersonalAlerts;
    });
    return personalItems;
  }
};

module.exports = PopAlertSource;
