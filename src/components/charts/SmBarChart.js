import React from 'react'
// import avgVal from '../DevData/avgValXD-20211125-2013.json'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement, 
    Title,
    Tooltip,
    Legend

        } from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
 
)

const SmBarChart = () => {

    // const {h, w} = props

    return (
            <Bar 
            data={{
                labels: ['Bathroom', 'Kitchen', 'Hall', 'Living Room', 'Bedroom 1', 'Bedroom 2'],
                datasets: [
                    {
                        label: "Rooms",
                        data: [1, 2, 9, 1, 1, 1],
                        backgroundColor: [
                            'red',
                            'green',
                            'blue',
                            'yellow',
                            'cyan',
                            'pink',
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
                ]
            }}
        
            options={{
                responsive: true,
                legend: {
                    labels: {
                        fontSize: 2,
                    },
                },
            }}
            />
      
    )
}

export default SmBarChart
