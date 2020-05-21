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
      personalList: [],
      workList: [],
      fullList: [],
    }
  }


  componentDidMount() {
    this.getItems();
  }
  
  getItems = _ => {
    fetch('http://localhost:4000/items')
    .then(response => response.json())
    .then(response => this.setState({
      fullList: response.data
    }))
    .catch(err => console.log(err))
  }

  renderPersonalList = ({ item_id, item })=> <div key={item_id}>{item}</div>;

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
      {this.state.fullList.map(this.renderPersonalList)}
      { currentPage.tab === 'lists' 
        ? <Lists 
            personalList={this.state.personalList}
            workList={this.state.workList}
            currentTab={this.state.currentTab}
          />
        : currentPage.tab === 'calendar'
        ? <Calendar />
        : <Home />
      }
    </>
  )
}
}


export default App;
