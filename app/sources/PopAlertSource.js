var seedAlerts = [
  { name: "Jay Z" },
  { name: "Beyonce" },
  { name: "Kanye West" },
  { name: "Lebron James" },
  { name: "Elon Musk" },
  { name: "Skip Suva" },
  { name: "Presidential Race" },
  { name: "Danny Brown" }
];


var PopAlertSource = {
  fetchMenuItems: function() {
    return seedAlerts;
  }
};

module.exports = PopAlertSource;
