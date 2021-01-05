import React from 'react'
import styles from './App.module.css';
import { fetchData, fetchDailyData, fetchCountries} from './api'
import { Cards, Charts, CountryPicker } from './components/components'


class App extends React.Component{
  getCountry(event) {
    this.setState({country:event.target.value})

  }

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dailyData: [],
      country: undefined
    };
    this.getSelectedCountry = this.getCountry.bind(this);
  }



  async componentDidMount() {
    // get the general data
    const getData = await fetchData()

    // get the daily data
    const getDailyData = await fetchDailyData();

    // get the list of countries
    const getCountriesList = await fetchCountries();

    // alter the state;
    this.setState({ data: getData, dailyData: getDailyData.data, countries: getCountriesList.data.countries })


  }

  render() {
    const { data, dailyData, countries, country } = this.state
   return (
      // the styling is being applied individually ,Pretty cool!
      <div className={styles.container}>
       <Cards data={data}/>
       <CountryPicker countries={countries} getCountry={this.getSelectedCountry} country={country} />
       <Charts dailyData={dailyData} country={country} />
      </div>
    )
}
}

export default App;