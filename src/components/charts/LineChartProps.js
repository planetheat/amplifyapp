import React, {useState} from 'react'
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

const LineChartProps = ({feed}) => {
    
    const [ data ] = useState(feed)
    
    // Remove this date formatting code:
    const values = data.map(v => v.value)
    let labels = data.map(l => l.created_at.slice(0, 10))

    console.log(data)
    console.log(values)

   
    if (!data) return <div>Loading...</div>
    return (
        <div className="bg-indigo-900 pb-2">
        <div className="bg-white pt-2">
            <h4 className="text-sm pl-2">Selected Room:</h4>
            <Line 
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Test",
                            data: values,
                            // backgroundColor: [
                            //     'rgba(255, 99, 132, 0.2)',
                            //     'rgba(54, 162, 235, 0.2)',
                            //     'rgba(255, 206, 86, 0.2)',
                            //     'rgba(75, 192, 192, 0.2)',
                            //     'rgba(153, 102, 255, 0.2)',
                            //     'rgba(255, 159, 64, 0.2)',
                            //   ],
                            //   borderColor: [
                            //     'rgba(255, 99, 132, 1)',
                            //     'rgba(54, 162, 235, 1)',
                            //     'rgba(255, 206, 86, 1)',
                            //     'rgba(75, 192, 192, 1)',
                            //     'rgba(153, 102, 255, 1)',
                            //     'rgba(255, 159, 64, 1)',
                            //   ],
                            //   lineWidth: 2,
                            
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
                        x: 
                            {
                                type: 'time',
                                time: {
                                    // parser: 'MM/DD/YYYY HH:mm',
                                    // tooltipFormat: 'll HH:mm',
                                    // unit: 'day',
                                    // unitStepSize: 1,
                                    displayFormats: {
                                        day: 'DD/MM/YY'
                                    }
                                }
                            }
                    },
                    legend: {
                       
                        display: false
                    },
                    plugins: {
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

export default LineChartProps
