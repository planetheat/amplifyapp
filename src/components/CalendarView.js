import API from '@aws-amplify/api'
import React, {useState, useEffect} from 'react'
import CalendarDisplay from './CalendarDisplay'
import DashBoardNav from './DashBoardNav'
import ToolBar from './ToolBar'
// import { listSixties } from '../graphql/queries'
import { listThreeHundreds } from '../graphql/queries'

const CalendarView = ({user}) => {

    const [sortedThreeHundreds, setSortedThreeHundreds] = useState([])
    // const [sortedSixties, setSortedSixties] = useState([])

    const compare = (a, b) => {
        if( a.id < b.id){
            return -1;
        }
        if( a.id > b.id){
            return 1
        }
        return 0;
    }

    useEffect(()=> {
        const fetchDevices = async () => {
            const apiData = await API.graphql({ 
                query: listThreeHundreds, 
                authMode: "API_KEY",
                variables: {filter: {cust_ID: {contains: user.attributes.sub}}}, limit: 2016})
            const sorted = apiData.data.listThreeHundreds.items.sort(compare)
            setSortedThreeHundreds(sorted)
        }
        fetchDevices();
    },[user])


    return (
        <div className="bg-indigo-900 p-0">
            <div className="relative fixed w-full min-h-screen inset-0" >
                <DashBoardNav />
                <div className="sm:pl-36 sm:pt-8">
                    {sortedThreeHundreds.length > 0 ? <CalendarDisplay sortedThreeHundreds={sortedThreeHundreds} />  : null}
                <ToolBar />
                </div>
          </div>
        </div>
    )
}

export default CalendarView
