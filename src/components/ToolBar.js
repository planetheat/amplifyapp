import React from 'react'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {FaRobot} from 'react-icons/fa'
import {FaHistory} from 'react-icons/fa'
import {FaClipboardList} from 'react-icons/fa'
import {FaChartBar} from 'react-icons/fa'
import {FaPollH} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const ToolBar = () => {

    const handleClick = () => {
        alert('You are not subscribed to this service')
    }
    const slug = useLocation();

    return (
        <main className="absolute fixed bottom-0 left-0 bg-indigo-900 sm:top-12">
            <section className="container mx-auto">
                <h1 className="px-2 pt-2 text-white text-sm">Select Data View:</h1>
                <div className="grid grid-cols-7 p-2 gap-2 md:grid-cols-1">
               
                    <NavLink to="/home" >
                    <div className={`${slug.pathname === "/home"? "border border-2 border-blue-200" : ""} grid justify-items-center bg-indigo-800 rounded p-4 hover:bg-indigo-500`}>
                    <FaPollH id="FaPollH" label="Summary" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                    <h4 className="text-white pt-4 hidden">Summary</h4>
                    </div>
                    </NavLink>

                    <NavLink exact to="/calendar" >
                    <div className={`${slug.pathname === "/calendar"? "border border-2 border-blue-200" : ""} grid justify-items-center bg-indigo-800 rounded p-4 hover:bg-indigo-500`}>
                    <FaRegCalendarAlt id="FaRegCalendarAlt" label="Calendar" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                    <h4 className="text-white pt-4 hidden">Calendar</h4>
                    </div>
                    </NavLink>

                    <NavLink exact to="/rooms" >
                    <div className={`${slug.pathname === "/rooms"? "border border-2 border-blue-200" : ""} grid justify-items-center bg-indigo-800 rounded p-4 hover:bg-indigo-500`}>
                    <BsGridFill id="BsGridFill" label="Grid" style={{height: '1.2em', width: '1.2em', color: "white"}}/> 
                    <h4 className="text-white pt-4 hidden">Grid</h4>
                    </div>
                    </NavLink>

                    <NavLink exact to="/graphs" >
                    <div className={`${slug.pathname === "/graphs"? "border border-2 border-blue-200" : ""} grid justify-items-center bg-indigo-800 rounded p-4 hover:bg-indigo-500`}>
                    <FaChartBar id="FaChartBar" label="Chart" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                    <h4 className="text-white pt-4 hidden">Charts</h4>
                    </div>
                    </NavLink>
                    
                    <NavLink to="#" >
                    <div className={`${slug.pathname === "/history"? "border border-2 border-blue-200" : ""}grid justify-items-center bg-gray-800 rounded p-4 hover:bg-gray-500`} onClick={handleClick}>
                    <FaHistory id="FaHistory" label="History" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                    <h4 className="text-white pt-4 hidden">Full History</h4>
                    <p className="text-gray-400 hidden">Subscription only</p>
                    </div>
                    </NavLink>

                    <NavLink to="#">
                    <div className={`${slug.pathname === "/feedback"? "border border-2 border-blue-200" : ""} grid justify-items-center bg-gray-800 rounded p-4 hover:bg-gray-500`} onClick={handleClick}>
                    <FaRobot id="FaRobot" label="AI" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                    <h4 className="text-white pt-4 hidden">AI Feedback</h4>
                    <p className="text-gray-400 hidden">Subscription only</p>
                    </div>
                    </NavLink>
                    
                    <NavLink to="#">
                    <div className={`${slug.pathname === "/reports"? "border border-2 border-blue-200" : ""} grid justify-items-center bg-gray-800 rounded p-4 hover:bg-gray-500`} onClick={handleClick}>
                    <FaClipboardList id="FaClipboardList" label="Report" style={{height: '1.2em', width: '1.2em', color: "white"}}/>
                    <h4 className="text-white pt-4 hidden">Reports</h4>
                    <p className="text-gray-400 hidden">Subscription only</p>
                    </div>
                    </NavLink>
                    
                </div>
        </section>
        </main>
    )
}

export default ToolBar
