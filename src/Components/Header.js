import { buildQueries } from "@testing-library/react";
import React from "react";


const Header = (props) => {
    return (
        <div style={divstyle}>Header {props.title}</div>
    )
}


const divstyle = {
    padding : '60px',
    background : 'blue', 
    color : 'white'
    
}


export default Header