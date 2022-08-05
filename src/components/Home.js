import React from 'react'
import ToolBar from './ToolBar'
import DashBoardNav from './DashBoardNav'
import Summary from './Summary'

const Home = ({signOut, user}) => {

    // Handle View Logic here
    // user clicks on toolbar will return selections for view. Currently hard coded as Summary

    return (
        <div className="bg-indigo-900">
            <div className="relative fixed w-full min-h-screen inset-0">
                <DashBoardNav signOut={signOut}/>
                <div 
                className="sm:flex flex-row-reverse"
                >
                <Summary user={user}/>
                <ToolBar />
                </div>
            </div>
        </div>
    )
}

export default Home
