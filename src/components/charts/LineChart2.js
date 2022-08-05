import React, {useState} from 'react'
// import Moment from 'react-moment'
import avgVal from '../../DevData/avgValXD-20211125-2013.json'
import { 
    Chart as ChartJS,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend

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
    Legend
)


const LineChart2 = () => {

    const [ data ] = useState(avgVal)

    const values = data.map(v => v.value)
    let labels = data.map(l => l.created_at.slice(0, 10))
    // const sliced = labels[0].slice(0, 10)
    console.log(labels)
    return (
        <div>
            <Line 
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Test",
                            data: values,
                            
                        },
                    ]
                }}
            
                options={{
                    responsive: true,
                    // maintainAspectRatio: false,
                    scales: {
                        y: 
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                    time: {
                        unit: "day",
                        displayFormats: {
                            quarter: 'DD'
                        }
                        // unitStepSize: 1000,
                        // displayFormats: {
                        //     millisecond: 'MMM DD',
                        //     second: 'MMM DD',
                        //     minute: 'MMM DD',
                        //     hour: 'MMM DD',
                        //     day: 'MMM DD',
                        //     week: 'MMM DD',
                        //     month: 'MMM DD',
                        //     quarter: 'MMM DD',
                        //     year: 'MMM DD',
                        // }
                    }
                }}
            
            />
        </div>
    )
}

export default LineChart2
