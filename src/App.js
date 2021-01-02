import styles from './App.module.css';
import React from 'react'
// import Cards from './components/Cards/Cards'
import {Cards, Charts, CountryPicker} from './components/components'

// The reason App is a class component is because it's easier *according to the guy making the tutoial* to make async HTTP requests with it!
//* */ This is an api I found
//! https://api.covid19api.com/

//  The tutorial uses two different apis I think
// one to fetch bulk data
// and this one to fetch daily data cases: // 'https://api.covidtracking.com/v1/us/daily.json'
// It would be good to follow the tutorial I think
class App extends React.Component{
  render() {
    return (
      // the styling is being applied individually ,Pretty cool!
      <div className={styles.container}>
        <h1>Covid Tracker</h1>
        <Cards/>
        <Charts/>
        <CountryPicker/>
      </div>
    )
  }
}

export default App;