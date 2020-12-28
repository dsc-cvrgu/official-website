import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons"
const Header = (props) => {
    const { name } = props;
    return (
        <header id="header">
            <div className="container">
                <h1><FontAwesomeIcon icon={faCog} /> {name}</h1>
            </div>
        </header>
    )
}
export default Header