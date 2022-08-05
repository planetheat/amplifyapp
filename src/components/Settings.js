import React from 'react'
import DashBoardNav from './DashBoardNav'
import BackNav from './BackNav'
// TO DO: Update the back button to get the prev page from history instead of defaulting 
// to home since a user can navigate to this page from multiple locations in the app

const Settings = () => {
    return (
        <div className="relative bg-indigo-900 container mx-auto">
        <div className="relative fixed w-full min-h-screen inset-0">
            <DashBoardNav />
            <BackNav />
            <div className="text-white border border-white p-2 m-2">
                <h1 className="font-bold pb-4">Settings:</h1>
                
                <ul className="text-pink-500 p-4">
                    <li className="pb-1">Edit Account Information</li>
                    <li className="pb-1">Change Contact Details</li>
                    <li className="pb-1">Add a subscription</li>
                    <li className="pb-1">Backup Data</li>
                </ul>
            </div>
            
        </div>
    </div>
    )
}

export default Settings
