import React, { useRef } from "react";

import "./Search.css";

const Search = () => {
  const searchRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const searchContent = searchRef.current.value;

    console.log(searchContent);
  };

  return (
    <div className="centered">
      <form onSubmit={submitHandler}>
        <input type="text" ref={searchRef} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
