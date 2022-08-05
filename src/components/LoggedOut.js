import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOut = () => {
    return (
        <div>
            <h1>You are now logged out</h1>
            <NavLink to="/login">
                <p>Log back in</p>
            </NavLink>
            <NavLink to="/">
            <p>Landing Page</p>
            </NavLink>

           
        </div>
    )
}

export default LoggedOut
