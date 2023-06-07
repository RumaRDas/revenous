import React from "react";

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
      <div className="searchbar-sort-option">
        <ul>{renderSortByOption()}</ul>
      </div>
      <div className="searchbar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="searchbar=submit">
        <a> Lets Go</a>
      </div>
    </div>
  );
}

export default SearchBar;
