import React from "react";
import Logo from "../Components/Logo";
import SearchInput from "./SearchInput";
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