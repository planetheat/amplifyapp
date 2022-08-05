import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {FaHome} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const DashBoardNav = ({signOut}) => {
    return (
        <header className="absolute top-0 fixed left-0 bg-indigo-900 w-full flex justify-between">
            
                <NavLink
                    to="/home"
                    exact={true}
                    className="inline-flex items-center py-0 mr-0 font-bold title tracking-widest"
                >
                    <h3 className="text-white text-sm p-1 md:text-2xl">Planet Heat</h3>
                    <FaHome id="FaHome" label="Home" 
                    style={{height: '1em', width: '1em', color: "white"}}
                    className="md:hidden"
                    />
                    
                </NavLink>
             
           
            <div className="flex">
            <NavLink 
                 to="/settings"
                 exact={true}
                 className="inline-flex items-center py-0 px-3 my-0 rounded hover:text-pink-500" >
                    <FiSettings id="FiSettings" label="Settings" style={{height: '1em', width: '1em', color: "white"}}/>

                    <h3 className="hidden text-white text-sm pl-1">Account Settings</h3>
            </NavLink>
                
        
            <div className="flex p-2 bg-indigo-900 text-white text-sm">
              <button className="border border-2 rounded items-center px-3" onClick={signOut}><h3>Sign out</h3></button>
            </div>

            </div>
        
    </header>
    )
}

export default DashBoardNav
