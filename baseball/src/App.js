import React, { Component } from 'react';
import './App.css';
import PitcherDropdown from './components/PitcherDropdown';
import pitchers from "./components/PitcherDropdown/pitchers";
import UserStats from './components/UserStats';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pitchersList: [] };
  }

  componentDidMount = () => {
    this.getPitchers()
    }
    getPitchers = () => {
    
    
    const pitcherList = pitchers.map((pitcher, index) => {
    return <option key={index} >{pitcher.pitcher}</option>
    })
    
    console.log(pitcherList)
    
    this.setState((state, props) => {
    return { pitchersList: pitcherList };
    });
    }

  render() {
    return (
      <div className="container">
      <div className="right">
       <h1>Step up to the plate!</h1>
      </div>
      <div className="left">
        <h1>Choose your pitcher</h1>
        < PitcherDropdown pitchersList={this.state.pitchersList}/>
      </div>
      </div>
    );
  }
}

export default App;
