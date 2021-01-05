import React,{useEffect}from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'
import styles from './charts.module.css'
import {fetchCountryData } from '/Users/moayed/Desktop/covid-tracker/src/api'


//  This is the main cards component, It will house the cards for


const Charts = ({ dailyData, country }) => {

    console.log('rendering')

    useEffect(() => {
        const fetchCountry = async () => {
            fetchCountryData(country)

        }
        fetchCountry()
    }, [country])

    // make the pie chart
    const pieChart = (

        <Pie
            data={{}}






            />
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
            {country? pieChart: lineChart}
       </div>
    )

}

export default Charts;