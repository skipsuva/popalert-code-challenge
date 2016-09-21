var testData = [
  { id: 1, name: "Jay Z", beingEdited: false},
  { id: 2, name: "Beyonce", beingEdited: false},
  { id: 3, name: "Kanye West", beingEdited: false},
  { id: 4, name: "Lebron James", beingEdited: false},
  { id: 5, name: "New York Yankees", beingEdited: false},
  { id: 6, name: "Steve Spurgat", beingEdited: false},
  { id: 7, name: "Flipboard", beingEdited: false},
  { id: 8, name: "Syria", beingEdited: false},
  { id: 9, name: "Barack Obama", beingEdited: false}
];


var PopAlertSource = {
  fetchListItems: function() {
    return testData;
  }
};

module.exports = PopAlertSource;
