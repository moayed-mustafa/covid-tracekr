import React from 'react'
import {Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import IndividualCard from './Card'

//  This is the main cards component, It will house the cards for


const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {

    return (
        !confirmed ? <h1>Loading...</h1> :
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">

                    <IndividualCard header="Infected" data={confirmed.value} date={lastUpdate.slice(0,10)} />
                    <IndividualCard header="Recovered" data={recovered.value} date={lastUpdate.slice(0,10)} />
                    <IndividualCard header="Deaths" data={deaths.value} date={lastUpdate.slice(0,10)} />


            </Grid>

        </div>
    )

}

export default Cards;