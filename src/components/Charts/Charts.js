import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import styles from './charts.module.css'

const Charts = ({ dailyData, country, countryData}) => {

    const Dounght = (

        countryData.hasOwnProperty("confirmed") ? <Doughnut
            data={{
                labels: ["Confirmed","Recovered", "Deaths"],
                datasets: [
                    {
                        data: [countryData.confirmed.value,
                        countryData.recovered.value,
                        countryData.deaths.value],
                        backgroundColor: ['rgb(212, 17, 17)', "rgb(65, 148, 26)", "rgb(0,0,0)"],
                        hoverBackgroundColor: ['rgba(212, 17, 17, 0.3)', "rgba(65, 148, 26, 0.3)", "rgba(0,0,0, 0.3)"],

                    }
                ]
            }}

            options= {{
                title: {
                    display: true,
                    text: `${country}'s STATS`,
                    fontSize: 20

                },
                legend: {
                    display: true,
                    position: 'right'
                }

            }}


            /> : null
    )

    // make the line chart
    const lineChart = (
        dailyData ? <Line

            data={{
                labels: dailyData.map(({ dateChecked }) => new Date(dateChecked).toDateString()),
                datasets: [
                    {
                        data: dailyData.map(({ positive }) => positive),
                        label: 'Infected',
                        // borderColor: 'rgba(230, 39, 32, 0.6)',
                        backgroundColor: 'rgba(230, 39, 32, 0.6)',
                        fill: true,
                        lineTension: 0.5,
                        borderWidth:3
                    },
                    {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: "recovered",
                        // borderColor: 'rgba(52, 180, 47, 0.6)',
                        backgroundColor: 'rgba(52, 180, 47, 0.6)',
                        fill: true,
                        lineTension: 0.5,
                        borderWidth:3
                    },
                    {
                        data: dailyData.map(({ death }) => death),
                        label: "Deaths",
                        // borderColor: 'rgba(0, 0, 0, 0.8) ',
                        backgroundColor: 'rgba(0, 0, 0, 0.75) ',
                        fill: true,
                        lineTension: 0.5,
                        borderWidth:3
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
            {country? Dounght: lineChart}
       </div>
    )

}

export default Charts;