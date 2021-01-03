import React from 'react'
import styles from './App.module.css';
import { fetchData, fetchDailyData} from './api'
import { Cards, Charts, CountryPicker } from './components/components'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data : {}

    }
  }

  async componentDidMount() {
    // get the general data
    const getData = await fetchData()

    // get the daily data
    const getDailyData = await fetchDailyData();
    // alter the state;
    this.setState({ data: getData, dailyData: getDailyData.data })
    // console.log(this.state.dailyData);


  }

  render() {
    const { data, dailyData} = this.state
   return (
      // the styling is being applied individually ,Pretty cool!
      <div className={styles.container}>
       <Cards data={data}/>
       <Charts dailyData={dailyData}/>
       <CountryPicker />
      </div>
    )
}
}

export default App;