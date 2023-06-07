import React from "react";
import "./searchBar.css";
function SearchBar() {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function renderSortByOption() {
    return Object.keys(sortByOptions).map((option) => {
      let optionValue = sortByOptions[option];
      return <li ley={optionValue}>{option}</li>;
    });
  }
  return (
    <div className="search-bar">
      <div className="search-bar-sort-option">
        <ul>{renderSortByOption()}</ul>
      </div>
      <div className="search-bar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="search-bar-submit">
        <a> Lets Go</a>
      </div>
    </div>
  );
}

export default SearchBar;
