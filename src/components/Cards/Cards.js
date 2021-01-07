import React from 'react'
import {Grid } from '@material-ui/core'
import styles from './Card.module.css'
import IndividualCard from './Card'



const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {

    return (
        !confirmed ? <h1>Loading...</h1> :
            <div className={styles.container}>
                <Grid container spacing={2} justify="space-between" >
                    <IndividualCard header="New Cases"
                     data={confirmed.value}
                     date={new Date(lastUpdate).toDateString()}
                        fotter="No.active cases of COVID19"
                        style={styles.infected}
                     />
                    <IndividualCard header="Recovered "
                     data={recovered.value}
                        date={new Date(lastUpdate).toDateString()}
                        fotter="No.recovered cases of COVID19"
                        style={styles.recovered}
                     />
                    <IndividualCard header="Deaths"
                     data={deaths.value}
                    date={new Date(lastUpdate).toDateString()} fotter="No.deaths becaue of COVID19"
                    style={styles.deaths}
                     />
            </Grid>

        </div>
    )

}

export default Cards;