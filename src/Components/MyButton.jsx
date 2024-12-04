import React from "react";
import './MyButton.scss'

const MyButton = (props) => {
    const {symbol, handleClick, colored} = props
    return(

        <div className="myButton" style={{backgroundColor: colored}}  onClick={() => handleClick(symbol)}>
           
             {symbol}
           
        </div>

    )
}

export default MyButton