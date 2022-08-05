import React from 'react'
// import avgVal from '../DevData/avgValXD-20211125-2013.json'
import { 
    Chart as ChartJS,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    // Title, 
    // Tooltip, 
    // Legend, 
        } from 'chart.js'
// import { Chart }            from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement
    // Title,
    // Tooltip,
    // Legend
)

const LineChart = () => {

    return (
        <div>
            <section className="container mx-auto border">
            <Line 
                data={{
                    labels: ['8am', '10am', '12 noon', '2pm', '4pm', '6pm'],
                    datasets: [
                        {
                            label: "Avarage Temperature",
                            data: [22, 21, 22, 22, 21, 20],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                              ],
                              borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                              ],
                              lineWidth: 2,
                              
                        },
                        {
                            label: 'Peaks',
                            data: [24, 24, 23, 25, 19, 18],
                            backgroundColor: 'orange',
                            borderColor: 'red',
                        },
                    ]
                }}
                // height={400}
                // width={600}
                options={{
                    responsive: true,
                    // maintainAspectRatio: false,
                    scales: {
                        y: 
                            {
                                ticks: {
                                    beginAtZero: true,
                                    color: "white"
                                },
                            },
                        x: 
                            {
                                ticks: {
                                    color: "white"
                                }
                            }
                    },
                    legend: {
                        labels: {
                            fontSize: 10,
                            color: "white"
                        },
                        title: {
                            color: "white"
                        },
                        color: "white"
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }}
            
            />
            </section>
        </div>
    )
}

export default LineChart
