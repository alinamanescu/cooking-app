import React from "react";
import Logo from "./Logo";

const SearchInput = () => {
    return (
        <div className="bg-light p-3">
            <div className="container d-flex">
            <Logo />
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </input>
            </form>
            </div>
        </div>
    )
}

export default SearchInput;