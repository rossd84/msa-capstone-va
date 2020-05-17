import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header'
import Home from './components/Main'
import { Lists } from './components/Lists'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'home'
    }
  }

  onChangeTab(newTab) {
    this.setState({
      currentTab: newTab
    })
  console.log('app state:', this.state);    
  }

render() {
  return (
  <>
    <Header 
      changeTab={this.onChangeTab.bind(this)}
      initialTab={this.state.currentTab} 
    />
    <Home />
    <Lists />
  </>
  )
}
}


export default App;
