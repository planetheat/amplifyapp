import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { FaServer } from 'react-icons/fa'
import { FaNetworkWired } from 'react-icons/fa'
import { FaChartBar } from 'react-icons/fa'
import { FaChartArea } from 'react-icons/fa'

const ProductDemo = () => {
    return (
        <>
        <NavBar />
        <main className="bg-indigo-900 min-h-screen p-4">
            <div className="container mx-auto bg-indigo-900">
            
            <h1 className="text-3xl py-4 font-bold text-pink-500">Planet Heat Web App</h1>
                
                <div className="grid grid-cols-1 gap-4 pt-4">
                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-white sm:flex">
                        
                        <img src="app_screenshot.png" alt="chart" className="w-60 sm:w-2/6 p-12"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-pink-500 text-xl font-bold p-8">
                                Real time live feed data to your device
                            </div>
                            <p className="py-6 px-8">Our custom web app allows you to access visualisations of data coming from the sensors we install in your home.</p>
                            <div className="rounded bg-gray-300 p-4">
                            <ul className="px-6 py-6">
                                <h4 className="font-bold pb-4">Free Tier</h4>
                                <li>
                                    - Realtime Notifications
                                </li>
                                <li>
                                    - Live temperature data from all rooms in which sensors are installed
                                </li>
                                <li>
                                    - Timeline of changes in your heating system
                                </li>
                            </ul>
                            </div>
                            <div className="rounded bg-gray-300 p-4 mt-4">
                            <ul className="px-6 py-6">
                                <h4 className="font-bold pb-4">Subscription Services</h4>
                                <li>
                                    - Detailed reports on your heating performance
                                </li>
                                <li>
                                    - AI analysis of your energy consumption and usage
                                </li>
                            </ul>
                            </div>

                        </div>
                    </div>

                    {/* <div className="max-w-m rounded overflow-hidden shadow-lg bg-white">
                        <img src={chart2} alt="chart" className="w-full"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-pink-500 text-l mb-2">
                                Real time live feed data to your device
                            </div>
                            <ul className="text-sm">
                                <li>
                                    - Notifications
                                </li>
                                <li>
                                    - Live data
                                </li>
                                <li>
                                    - Coherent reports on your heating performance
                                </li>
                            </ul>

                        </div>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 gap-4 pt-8 flex sm:grid-cols-4">
                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-white p-4 flex">
                        <FaServer id="FaServer" label="Server" style={{height: '3em', width: '3em'}}/>
                        <h3 className="text-2xl p-4">Secure data</h3>
                    </div>
                    
                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-white p-4 flex">
                       <FaNetworkWired id="FaNetworkWired" label="Network" style={{height: '3em', width: '3em'}}/> 
                       <h3 className="text-2xl p-4">IoT</h3>
                    </div>
                    
                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-white p-4 flex">
                        <FaChartBar id="FaChartBar" label="Bar Chart" style={{height: '3em', width: '3em'}}/>
                        <h3 className="text-2xl p-4">Reports</h3>
              </div>  
                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-white p-4 flex">
                        <FaChartArea id="FaChartArea" label="Area Chart" style={{height: '3em', width: '3em'}}/>
                        <h3 className="text-2xl p-4">Visualisations</h3>
                    </div>
                </div>
            </div>
            <Footer /> 
        </main>
        </>
    )
}

export default ProductDemo
