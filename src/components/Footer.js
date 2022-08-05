import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {NavLink} from 'react-router-dom'


const Footer = () => {
    return (
        <footer className=" bottom-0 bg-indigo-900 w-full px-2 py-4 text-sm">
            <div className="grid grid-cols-3 gap-4 px-24">
                    <div className="max-w-sm bg-indigo-900">
                        <div className="px-4 py-4">
                        <div>
                            <h1 className="text-pink-500 font-bold">Address</h1>
                        </div>
                            <ul className="text-white">
                                <li>Houston</li>
                                <li>Renfrewshire</li>
                                <li>Scotland</li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-sm  bg-indigo-900">    
                        <div className="px-6 py-4">
                        <div>
                            <h1 className="text-pink-500 font-bold">Services</h1>
                        </div>
                            <ul className="text-white text-sm">
                                <NavLink to="#">
                                <li>IoT App</li>
                                </NavLink>
                                <NavLink to="#">
                                <li>Heat Pump Services</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-m bg-indigo-900">
                    <div className="px-4 py-4">
                        <div>
                            <h1 className="text-pink-500 font-bold">Planet Heat</h1>
                        </div>
                            <div className="flex py-2">
                                <SocialIcon url="https://twitter.com/TheHeatPumpMan" className="mr-4" target="_blank" fgColor="#252626" bgColor="#fff" style={{ height: 24, width: 24} }/>
                            </div>  
                        </div>
                   </div>
                </div>

        </footer>
    )
}

export default Footer
