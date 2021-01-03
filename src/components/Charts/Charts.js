import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import styles from './charts.module.css'

//  This is the main cards component, It will house the cards for


const Charts = ({ dailyData }) => {
    console.log(dailyData)
    const lineChart = (
        dailyData ? <Line

            data={{
                labels:  dailyData.map(({ lastModified }) => new Date(lastModified ).toLocaleString()),
                dataSets: [
                    {
                        data: dailyData.map(( {positive} ) => positive),
                        label: 'Infected',
                        borderColor: "#333333",
                        fill: true
                    },
                    {
                        data: dailyData.map(( {recovered} ) => recovered),
                        lable: "recovered",
                        borderColor: "green",
                        fill: true
                    },
                    {
                        data: dailyData.map(({ death }) => death),
                        label: "deaths",
                        borderColor: "black",
                        fill: true
                    }
                ]
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