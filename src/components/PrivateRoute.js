import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

const PrivateRoute = ({ component: Component, ...rest}) => {

    const { user } = useAuth()

    return (
        <Route
        {...rest}
        render={(props) => {
            // renders the page only if 'user' is present (user is authenticated)
            // Other wise, redirect to login page
            return user ? <Component {...props} /> : <Redirect to="/login" />
        }}
        >

        </Route>
    )
}

export default PrivateRoute
