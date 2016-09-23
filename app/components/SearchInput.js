var React = require('react');

var SearchInput = React.createClass({

  searchAlertList(e) {
    var query = e.target.value;
    this.props.filterListByQuery(query);
  },

  render() {
    return(
      <div className="">
      <input
        className="input"
        placeholder="Find alerts"
        type="text"
        onChange={this.searchAlertList} />
       <img className="search-svg" src="/vendor/assets/images/search-icon-01.svg " />
      </div>
    );
  }
});

module.exports = SearchInput;
