import React from 'react'

import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './countryPicker.module.css'
import { v4 as uuid } from 'uuid'

//  This is the main cards component, It will house the cards for


const CountryPicker = ({ countries, getCountry, country }) => {

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={getCountry } value={country} >
                {countries ?
                countries.map(({ name }) =>

                    <option value={name} key={uuid()}>{name}</option>

                )
                :null}
            </NativeSelect>

        </FormControl>
    )

}

export default CountryPicker;