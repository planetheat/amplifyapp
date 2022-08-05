import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import {NavLink} from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
        <NavBar />
        <main className="bg-indigo-900 min-h-screen p-12">
            <header className="container shadow-lg mx-auto rounded">    
                <div className="px-2 py-6">
                <h1 className="text-white text-center text-4xl py-2 title">Heat Pump Monitoring and Support</h1>
                <hr  style={{ height: 1}} className="bg-pink-500"/>
                <p className="text-white text-center py-2">IoT Technology leveraged to keep you up to date with energy pricing, heat pump monitoring and efficiency savings</p>
                </div>  
            </header>  

            <section className="container mx-auto pt-12">
                {/* <div className="grid grid-cols-2 gap-8">
                    
                    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                        <i></i>
                        <h3>First thing</h3>
                    </div>

                    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                        <i></i>
                        <h3>Second thing</h3>
                    </div>


                </div> */}
                <div className="grid grid-cols-1 gap-8 p-2 sm:grid-cols-2">
                    
                    

                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-gray-200">
                        {/* <img src={chart1} alt="chart" className="w-full"/> */}
                        <div className="px-6 py-4">
                            <div className="text-grey-900 text-xl mb-2">
                                Heat Pump Services
                            </div>
                         <div>
                            
                             <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                             <NavLink to="https://planetheat.github.io/services.html">
                             <button className="flex border-2 border-gray-900 rounded p-2">Learn More...</button>
                             </NavLink>
                         </div>

                        </div>
                    </div>

                    <div className="max-w-m rounded overflow-hidden shadow-lg bg-gray-200">
                        {/* <img src={chart2} alt="chart" className="w-full"/> */}
                        <div className="px-6 py-4">
                            <div className="text-grey-900 text-xl mb-2">
                                IoT App - Beta
                            </div>
                        <div>
                            <i></i>
                            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <NavLink to="demo">
                            <button className="flex border-2 border-gray-900 rounded p-2">Learn more...</button>
                            </NavLink>
                        </div>

                        </div>
                    </div>


                </div>


            </section>


            {/*  */}

            <section className="container mx-0 w-full">
              
            </section>

            <Footer />      
        </main>
        </>
    )
}

export default LandingPage
