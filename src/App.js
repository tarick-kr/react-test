import React, {Component} from "react";
import './App.css';

import StartWindow from './components/StartWindow';


import 'bootstrap/dist/css/bootstrap.min.css';

import data from './dataBase';



class App extends Component {

  constructor() {
    super();
    this.state = {
      workList: data
    };
  }

  render() {

    const { workList } = this.state;

    return (
      <div className="App">
        <StartWindow workList = { workList }/>
      </div>
    );
  }
}

export default App;
