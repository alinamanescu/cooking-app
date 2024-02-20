import React from "react";
import SearchInput from "../Components/SearchInput";
import Logo from "../Components/Logo";
import { ActionsContainer } from "../containers/ActionsContainer";

const TopBarComponent = () => {
    return (
        <div className="bg-light py-3">
            <div className="d-flex justify-content-around">
                <Logo />
                <SearchInput />
                <ActionsContainer />
                </div>
            </div>
    );
};

export default TopBarComponent;