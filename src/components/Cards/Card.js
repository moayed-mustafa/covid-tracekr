import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
// import styles from './Cards.module.css'
import CountUp from 'react-countup'

const IndividualCard = ({header,data, date}) => {

    return(
    <Grid item component={Card}>
                    <CardContent>
                <Typography color="textSecondary" gutterBottom>{header}</Typography>
                            <Typography variant="h5" >
                                <CountUp start={0}
                                    end={data}
                                    duration={2.5}
                                    separator=","
                                >
                                </CountUp>

                            </Typography>
                <Typography color="textSecondary">last update:{date}</Typography>
                        <Typography variant="body2">No.active cases of COVID19</Typography>
                    </CardContent>
        </Grid>
    )

}

export default IndividualCard