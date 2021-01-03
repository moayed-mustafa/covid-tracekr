

import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
const dailyDataUrl = 'https://api.covidtracking.com/v1/us/daily.json'

export const fetchData = async () => {
    try {
        // fetch the data
        const {data :{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);

        return {confirmed,recovered,deaths,lastUpdate};

    } catch(e) {
        console.log(e)

    }

}

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(dailyDataUrl);
        return response;

    } catch (e) {
        console.log(e)

    }

}

