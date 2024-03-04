import React from "react";

const SearchInput = ({ searchValue, handleInputChange }) => {
    return (
        <input onChange={handleInputChange} 
        value={searchValue}
        type="text" 
        className="form-control w-50"
        placeholder="Search meal"/>
    );
};

export default SearchInput;