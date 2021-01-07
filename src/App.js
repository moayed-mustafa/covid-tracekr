import React from 'react'
import styles from './App.module.css';
import { fetchData, fetchDailyData, fetchCountries, fetchCountryData} from './api'
import { Cards, Charts, CountryPicker } from './components/components'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dailyData: [],
      country: undefined
    };
    this.getSelectedCountry = this.getCountry.bind(this);
  }

  getCountry(event) {
    this.setState({ country: event.target.value })
  }

  async componentDidMount() {
    // get the general data
    const getData = await fetchData()

    // get the daily data
    const getDailyData = await fetchDailyData();

    // get the list of countries
    const getCountriesList = await fetchCountries();

    // alter the state;
    this.setState({
      data: getData,
      dailyData: getDailyData.data,
      countries: getCountriesList.data.countries
    })


  }
  // update the data if a country is selected.
  async componentDidUpdate(prevProps, prevState) {
    // get the data of the selected country
    if (this.state.country !== prevState.country) {
      const getCountryData = await fetchCountryData(this.state.country);
      this.setState({data:getCountryData})

    }
  }

  render() {
    const { data, dailyData, countries, country } = this.state
   return (
      // the styling is being applied individually ,Pretty cool!
     <div className={styles.container}>
       <h1 className={styles.header}>COVID-19 Tracker</h1>
       <Cards data={data}/>
       <CountryPicker countries={countries} getCountry={this.getSelectedCountry} country={country} />
       <Charts dailyData={dailyData} country={country} countryData={data}/>
      </div>
    )
}
}

export default App;