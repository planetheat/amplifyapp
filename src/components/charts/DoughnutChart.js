import React from 'react'
// import avgVal from '../DevData/avgValXD-20211125-2013.json'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, 

    } from 'chart.js'
// import { Chart }            from 'react-chartjs-2'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
)

const DoughnutChart = () => {

    // const [data, setData] = useState(avgVal)
    
    return (
        <div>
           
            <Doughnut 
                data={{
                    labels: ['Living Room', 'Kitchen', 'Bedroom 1', 'Hall', 'Bedroom 2', 'Bathroom'],
                    datasets: [
                        {
                            label: "Room Temperature",
                            data: [12, 19, 3, 5, 2, 3],
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
                              borderWidth: 1,
                        },
                        
                    ]
                }}
                // height={400}
                // width={600}
                options={{
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
                }}
            
            />
        </div>
    )
}

export default DoughnutChart
