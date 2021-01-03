import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Card.module.css'
import cx from 'classnames';
import CountUp from 'react-countup'

const IndividualCard = ({header,data, date, fotter, style}) => {

    return(
    <Grid item component={Card} xs= {12} md={3}  className={cx(style, styles.card)}>
                    <CardContent>
                <Typography color="textSecondary" gutterBottom>{header}</Typography>
                <Typography variant="h5" >
                    <CountUp start={0}
                        end={data}
                        duration={2.5}
                        separator=",">
                    </CountUp>
                </Typography>
                <Typography variant="body2">{fotter}</Typography>
                <Typography color="textSecondary">last update:{date}</Typography>
                    </CardContent>
        </Grid>
    )

}

export default IndividualCard