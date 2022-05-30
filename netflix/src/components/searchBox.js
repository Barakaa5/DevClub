import React from "react";

function Searchbox(searchValue,setSearchValue) {
  return (
    <div className="" id="searchBox">
      <input
        type="text"
        placeholder="Type here"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Searchbox;
