import React, {useState, useEffect} from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import 'chartjs-adapter-moment'
import { 
    Chart as ChartJS,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    TimeSeriesScale

        } from 'chart.js'
import {Line} from 'react-chartjs-2'
import moment from 'moment'
// import { setLabels } from 'react-chartjs-2/dist/utils'
// import { useEffect } from 'react/cjs/react.development'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    TimeSeriesScale
)

const SummaryLineChart = ({feed, arrLength}) => {

    const [ values, setValues ] = useState([])
    const [labels, setLabels] = useState([])
    const { width } = useWindowDimensions();

    // set dimensions of chart depending on screen size. (app css is tailwind, which isn't compatible with chart.js)
    const ratio = () => {
        if(width < 800){
            return 1.8;
        }else{
            return 2.5;
        }
    }

    // const dateFormat = (date) => {
    //     const newDate = date * 1000;
    //     return newDate.toLocaleString()
    // }
    const [test, setTest] = useState()

    // gets avarage temerature of the rooms contained in the 300 second feed
    useEffect(()=> {
        const av = () => {
            const numRooms = feed && feed[arrLength-1].payload.temperatures.length
            const valstToAv = []
            for(let i = 0; i < numRooms; i++){
                valstToAv.push(feed.map(f => f.payload.temperatures[i].temp))
            }
            const output = []
            for(let i = 0; i < arrLength; i++){
                let sum = 0;
                for(let j = 0; j < numRooms; j++){
                    sum += valstToAv[j][i]
                    // console.log(sum)
                }
                // sum = valstToAv[0][i] + valstToAv[1][i]
                output.push((sum / numRooms))
            }
            setTest(output)
        }
        av()
    },[feed, arrLength])
    
    useEffect(()=> {
       
        setValues(feed && feed.map(v => v.payload.temperatures[0].temp)) 
        setLabels(feed && feed.map(l => moment.unix(parseInt(l.payload.epoch))))
    }, [feed])
  
    // console.log("Summary Line Chart",feed)
    console.log("values", values)
    console.log("labels", labels)
    console.log("avarages", test)
    
    if(!values) return <div>Loading...</div>
    return (
        <div className="bg-indigo-900 p-2">
            <div className="bg-white pt-2 rounded">
                {/* <h4 className="text-sm pl-2">Energy1</h4> */}
                <Line 
                data={{
                    labels:labels,
                    datasets: [
                        {
                            label:"Test label",
                            data: test,
                            backgroundColor: 'white',
                            borderColor: '#312E81',
                        },
                    ]
                }}

                options={{
                    responsive: true,
                    aspectRatio: ratio(),
                    scales: {
                        y:
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                        x: 
                        {
                            type: 'time',
                            time: {
                                displayFormats: {
                                    'millisecond': 'MMM DD',
                                    'second': 'MMM DD',
                                    'minute': 'MMM DD',
                                    'hour': 'MMM DD',
                                    'day': 'MMM DD',
                                    'week': 'MMM DD',
                                    'month': 'MMM DD',
                                    'quarter': 'MMM DD',
                                    'year': 'MMM DD',
                                }
                            }
                        }
                    },
                    legend: {
                        display: true
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: "Average Temerature",
                        },
                        legend: {
                            display: false
                        }
                    }
                }}

                />
            </div>
        </div>
    )
}

export default SummaryLineChart
