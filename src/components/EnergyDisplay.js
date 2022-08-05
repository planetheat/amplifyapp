import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify'
import { listSixties } from '../graphql/queries'

const EnergyDisplay = ({user}) => {

    const [sixties, setSixties] = useState(null)
    const [singleSixty, setSingleSixty] = useState()

    console.log(user)
    const arrLength = sixties && sixties.length
    useEffect(()=> {
        const fetch60s = async () => {
            const apiData = await API.graphql({
                query: listSixties,
                authMode: "API_KEY",
                variables: {filter: {cust_ID: {contains: user.attributes.sub}}, limit: 10080}
            })
            console.log(apiData)
            setSixties(apiData.data.listSixties.items.sort(compare))
            setSingleSixty(apiData.data.listSixties.items.sort(compare)[arrLength -1])
        }
        fetch60s();
    },[arrLength, user])

    const compare = (a, b) => {
        if( a.id < b.id){
            return -1;
        }
        if( a.id > b.id){
            return 1
        }
        return 0;
    }

    const background = (index) => {
        if(index % 2 === 1){
            return "bg-gray-300"
        }else{
            return "bg-gray-400"
        }
    }

  return (
    <div className="bg-white text-sm p-1 col-span-2 rounded">
        <h2 className="px-1 font-bold">Energy Feed</h2>
        <div className="h-32 overflow-y-auto sm:h-auto">
     
        <div className="m-0 rounded">
            {singleSixty && singleSixty.payload.temperatures.map((item, index)=>(
                <div className={`flex justify-between ${background(index)}`} key={index}>
                    <h4 className="font-bold ">{item.location}</h4>
                    {/* <h4>{item.location}</h4> */}
                    <h4 className="pr-4">{Math.floor(item.temp)}°C</h4>

                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default EnergyDisplay