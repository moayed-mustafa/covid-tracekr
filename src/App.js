import React from 'react'
import styles from './App.module.css';
import { fetchData} from './api'
import { Cards, Charts, CountryPicker } from './components/components'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data : {}

    }
  }

  async componentDidMount() {
    const fetcheData = await fetchData()
    this.setState({data:fetcheData})


  }

  render() {
    const {data }= this.state
    console.log(data)
   return (
      // the styling is being applied individually ,Pretty cool!
      <div className={styles.container}>
       <Cards data={data}/>
        <Charts/>
       <CountryPicker />
      </div>
    )
}
}

export default App;