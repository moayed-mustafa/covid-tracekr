

import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        // fetch the data
        const {data :{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);

        return {confirmed,recovered,deaths,lastUpdate};

    } catch {
        console.log('error')

    }

}

