import React, {useState} from 'react'
import pricenow from '../DevData/pricenow-20211125-2017.json'
import ToolBar from './ToolBar'
import DashBoardNav from './DashBoardNav'
import LineChartProps from './charts/LineChartProps'
import BackNav from './BackNav'


const Pricing = () => {

    const [data] = useState(pricenow)

    return (
          <main className="bg-indigo-900 fixed w-full min-h-screen p-1 inset-0">
            <DashBoardNav />
            <BackNav />
      
        <div className="">
            <h2 className="font-bold text-white">Pricing Data:</h2>
        <div className="h-96 overflow-y-auto ">
           
       
            <LineChartProps feed={data}/>
       
            
        </div>
        </div>
            <ToolBar />
        </main>
    )
}

export default Pricing
