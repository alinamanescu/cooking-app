import React from "react";

const titleStyle = {
    fontWeight: 700,
    letterSpacing: -0.5,
    fontSize: "28px",
};

const TextComponent = (props) => {
    return (
        <p style={titleStyle} className="pb-2 border-bottom text-subtle">
        {props.text}
        </p>
    );
};

export default TextComponent;