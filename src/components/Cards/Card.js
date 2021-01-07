import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Card.module.css'
import cx from 'classnames';
import CountUp from 'react-countup'

const IndividualCard = ({header,data, date, fotter, style}) => {

    return(
        <Grid item xs={12} md={3} >
            <Card className={cx(style, styles.card)}>
                    <CardContent >
                <Typography  className={styles.mainColor}  color="textSecondary" gutterBottom>{header}</Typography>
                <Typography  className={styles.mainColor}variant="h5" >
                    <CountUp start={0}
                        end={data}
                        duration={2.5}
                        separator=",">
                    </CountUp>
                </Typography>
                <Typography  className={styles.mainColor}variant="body2">{fotter}</Typography>
                <Typography className={styles.mainColor} color="textSecondary">last update:{date}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )

}

export default IndividualCard