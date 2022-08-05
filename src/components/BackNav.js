import React from 'react'
import {RiArrowGoBackFill} from 'react-icons/ri'
import {NavLink} from 'react-router-dom'


const BackNav = () => {
    return (
        <NavLink to="/home">
            <div className="m-2 p-2 text-white flex flex-row-reverse">
            <RiArrowGoBackFill  id="RiArrowGoBackFill" label="Back" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
            </div>
        </NavLink>
    )
}

export default BackNav
