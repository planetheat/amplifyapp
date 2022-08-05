import React, {useState, useEffect} from 'react'
import MultiChart from './charts/MultiChart'
import moment from 'moment'

const GraphsContainer = ({filteredDevices, selectedFeeds}) => {
    
    const [feeds, setFeeds] = useState([])
    const [compiledFeeds, setCompiledFeeds] = useState([])
    const [labels, setLabels] = useState()

        // function to generate colours for chart
        const intToRGB = (int) => {
            const colors = ["red", "yellow", "green", "purple", "cyan", "orange", "pink", "blue", "lime"]
            return colors[int];
        }        

        console.log(filteredDevices)

        useEffect(()=> {
            const feedParser = (arr) => {
                let outputArray = []
                // Loop through items in temperature array 
                for (let i = 0; i < arr.length; i++) {
                    let feed = {label: filteredDevices && filteredDevices[0].payload.temperatures[i].location, data: filteredDevices && filteredDevices.map(f => f.payload.temperatures[i].temp), borderColor: intToRGB(i)}
                    // feed.data.push(sortedThreeHundreds.map(f => f.payload.temperatures[i].temp))
                    outputArray.push(feed)
                }
                return outputArray
                }
            // Pass temperatures array to feedParser so that it can loop through the given feeds
            setFeeds(feedParser(filteredDevices && filteredDevices[0].payload.temperatures))
            setLabels(filteredDevices && filteredDevices.map(d => moment.unix(parseInt(d.payload.epoch))))
        },[filteredDevices])


        useEffect(()=>{
        const filterArray = (arr) => {
        // takes in the feeds array
        let out = []
        for(let i = 0; i < arr.length; i++){
            if(selectedFeeds[i].clicked){
                out.push(arr[i])
            } 
         }
        return out
        }
       setCompiledFeeds(filterArray(feeds))
    },[feeds, selectedFeeds])

    // console.log(filteredDevices)
    // console.log(selectedFeeds)
    // console.log(compiledFeeds)

  return (
    <>
        <MultiChart labels={labels} compiledFeeds={compiledFeeds} />
    </>
  )
}

export default GraphsContainer