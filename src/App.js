import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header'
import Home from './components/Main'
import { Lists } from './components/Lists'
import { Calendar } from './components/Calendar'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'home',
      listItems: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5']
    }
  }

  onChangeTab(newTab) {
    this.setState({
      currentTab: newTab
    })
  console.log('app state:', this.state);    
  }

render() {
  let currentPage = this.state.currentTab;
  console.log('render currentPage', currentPage)
  return (
  <>
    <Header 
      changeTab={this.onChangeTab.bind(this)}
      initialTab={this.state.currentTab} 
    />
    { currentPage.tab === 'lists' 
      ? <Lists 
          listItems={this.state.listItems}
        />
      : currentPage.tab === 'calendar'
      ? <Calendar />
      : <Home />
    }

    {/* <Home />
    <Lists 
      listItems={this.state.listItems}
    /> */}
  </>
  )
}
}


export default App;
