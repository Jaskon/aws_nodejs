import React from "react";

function Button(props: (React.ButtonHTMLAttributes<HTMLButtonElement>)) {
    return <button
        className="border border-white rounded-md pl-2 pr-2"
        {...props}
    >
        {props.children}
    </button>
}

export default Button;
