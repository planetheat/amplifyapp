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

const RoomChart = ({props, labels, selectedRoom}) => {
    const [ values, setValues ] = useState(props)
    const [newLabels, setNewLabels] = useState(labels)
    const { width } = useWindowDimensions();

    const ratio = () => {
        if(width < 800){
            return 1.8;
        }else{
            return 2.5;
        }
    }
   
    useEffect(()=> {
        setValues(props)
        setNewLabels(labels)
    }, [props, labels])
    // console.log("Room Chart:",values)
    // console.log("Room Chart:",newLabels)
    
    // if(!values) return <div>Loading...</div>
    return (
        <div className="bg-indigo-900 pb-1 sm:mx-12">
            <div className="bg-white py-1 rounded">
                <Line 
                data={{
                    labels:newLabels,
                    datasets: [
                        {
                            label:"Energy1",
                            data: values,
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
                            align: 'center',
                            text: selectedRoom,
                            fontSize: 16,
                            padding: {
                                top: 6,
                                bottom: 10,
                            },
                            font: {
                                weight: 'bold',
                                size: 16,
                                color: 'black',
                            },
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

export default RoomChart
