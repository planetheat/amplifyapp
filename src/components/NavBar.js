import React from 'react'
import { NavLink } from 'react-router-dom'

// import {FaHome} from 'react-icons/fa'

const NavBar = () => {
    return (
        <header className="bg-white">
            <div className="bg-white container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        
                        label="Home"
                        className="inline-flex items-center py-2 px-3 mr-4 text-gray-800 text-l font-bold title tracking-widest"
                    >
                        <img src="Planet-Heat-logo.png" alt="Planet Heat Logo" className="h-6 w-auto sm:h-12"/>
                    {/* <FaHome id="FaHome" label="Home" style={{height: '1.5em', width: '1.5em'}}/> */}
                        <h1 className="hidden">Planet Heat</h1>

                    </NavLink>
                 
                    <NavLink 
                     to="/demo"
                     
                     className="inline-flex items-center py-2 px-2 my-2 rounded text-gray-800 hover:text-pink-500">
                        Demo
                    </NavLink>
                    
                    <NavLink 
                     to="/products"
                     
                     className="inline-flex items-center py-2 px-2 my-2 rounded text-gray-800 hover:text-pink-500" >
                        Products
                    </NavLink>

                    <NavLink 
                     to="/contact"
                    
                     className="inline-flex items-center py-2 px-2 my-2 rounded text-gray-800 hover:text-pink-500" activeclassname="underline">
                        Contact
                    </NavLink>

                    {/* <NavLink  
                        to="/login"
                        exact="true"
                        className="inline-flex items-center py-2 px-3 my-4 rounded text-gray-800 hover:text-pink-500 border-2 border-gray-800" activeClassName="underline">
                        Login
                    </NavLink> */}
                </nav>
                <div className="inline-flex py-2 px-2">
                <NavLink  
                        to="/home"
                        exact={true}
                        className="inline-flex items-center py-2 px-2 my-4 rounded text-gray-800 hover:text-pink-500 border-2 border-gray-800" activeclassname="underline">
                        App
                    </NavLink>
                {/* <SocialIcon url="https://twitter.com/TheHeatPumpMan" className="mr-4" target="_blank" fgColor="#fff" bgColor="#252626" style={{ height: 24, width: 24} }/> */}
                </div>
            </div>
            
        </header>
    )
}

export default NavBar
