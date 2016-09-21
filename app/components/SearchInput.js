var React = require('react');

var SearchInput = React.createClass({

  render() {
    return(
      <div className="">
      <input
        className="input"
        placeholder="Find alerts"
        type="text" />
       <img className="search-svg" src="/vendor/assets/images/search-icon-01.svg " />
      </div>
    );
  }
});

module.exports = SearchInput;
