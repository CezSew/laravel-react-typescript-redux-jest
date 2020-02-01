import React from "react";

interface ButtonProps {
    buttonText: string,
    classList?: string,
    handleClick?: Function
}

export const Button: React.FC <ButtonProps>= ({ buttonText, classList = '', handleClick = ()=>{} }) => {
    return (
        <button onClick={() => handleClick()} className={`o-button ${classList}`}>
            {buttonText}
        </button>
    )
}