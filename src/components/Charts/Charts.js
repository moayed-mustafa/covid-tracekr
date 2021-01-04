import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import styles from './charts.module.css'

//  This is the main cards component, It will house the cards for


const Charts = ({ dailyData }) => {
    console.log(dailyData)
    const lineChart = (
        dailyData ? <Line

            data={{
                labels: dailyData.map(({ dateChecked }) => new Date(dateChecked).toDateString()),
                datasets: [
                    {
                        data: dailyData.map(({ positive }) => positive),
                        label: 'Infected',
                        borderColor: 'rgba(230, 39, 32, 0.6)',
                        backgroundColor: 'rgba(230, 39, 32, 0.6)',
                        fill: true,
                        lineTension: 0.5,
                        borderWidth:1
                    },
                    {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: "recovered",
                        borderColor: 'rgba(52, 180, 47, 0.6)',
                        backgroundColor: 'rgba(52, 180, 47, 0.6)',
                        fill: true,
                        lineTension: 0.5,
                        borderWidth:1
                    },
                    {
                        data: dailyData.map(({ death }) => death),
                        label: "deaths",
                        borderColor: 'rgba(0, 0, 0, 0.8) ',
                        backgroundColor: 'rgba(0, 0, 0, 0.75) ',
                        fill: true,
                        lineTension: 0.5,
                        borderWidth:1
                    }
                ],


            }}
            options= {{
                title: {
                    display: true,
                    text: 'COVID19 STATS',
                    fontSize: 20

                },
                legend: {
                    display: true,
                    position: 'right'
                }

            }}

        /> : null
    )
    return (
        <div className={styles.container}>
            {lineChart}

       </div>
    )

}

export default Charts;