import React from 'react'
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

const MultiChart = ({labels, compiledFeeds}) => {

  return (
    <div className="bg-indigo-800 p-2 sm:mx-24">
            <div className="bg-white pt-2 rounded">
                <h4 className="text-sm pl-2">feeds</h4>
                <Line 
                data={{
                    labels:labels,
                    datasets: compiledFeeds ? compiledFeeds : []
                }}

                options={{
                    responsive: true,
                    // annotation: {
                    //     annotations: [
                    //       {
                    //         type: "line",
                    //         mode: "vertical",
                    //         scaleID: "x-axis-0",
                    //         value: compiledFeeds[14],
                    //         borderColor: "red",
                    //         label: {
                    //           content: "TODAY",
                    //           enabled: true,
                    //           position: "top"
                    //         }
                    //       }
                    //     ]
                    //   },
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
                        legend: {
                            display: true
                        }
                    }
                }}

                />
            </div>
        </div>
  )
}

export default MultiChart