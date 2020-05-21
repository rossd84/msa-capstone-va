import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header'
import Main from './components/Main'
import { Lists } from './components/Lists'
import { Calendar } from './components/Calendar'
import AddItem from './components/AddItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'home',
      user: [],
      personalList: [],
      workList: [],
      fullList: [],
      items: {
        user_id: 1,
        item: '',
        list_type: 1
      }
    }
  }

  componentDidMount() {
    this.getItems();
    this.getUser();
    this.getPersonalList();
    this.getWorkList();
  }

  getUser = _ => {
    fetch(`http://localhost:4000/user?username=${'guest'}`)
    .then(response => response.json())
    .then(response => this.setState({
      user: response.data
    }))
    .catch(err => console.log(err))
  }
  
  getItems = _ => {
    fetch('http://localhost:4000/items')
    .then(response => response.json())
    .then(response => this.setState({
      fullList: response.data
    }))
    .catch(err => console.log(err))
  }

  getPersonalList = _ => {
    fetch('http://localhost:4000/items/personal')
    .then(response => response.json())
    .then(response => this.setState({
      personalList: response.data
    }))
    .catch(err => console.log(err))
  }

  getWorkList = _ => {
    fetch('http://localhost:4000/items/work')
    .then(response => response.json())
    .then(response => this.setState({
      workList: response.data
    }))
    .catch(err => console.log(err))
  }

  addItem = _ => {
    const { items } = this.state;
    fetch(`http://localhost:4000/items/add?user_id=${items.user_id}&item=${items.item}&list_type=${items.list_type}`)
      .then(this.getItems)
      .catch(err => console.error(err))
  }

  renderPersonalList = ({ item_id, item })=> <div key={item_id}>{item}</div>;

  onChangeTab(newTab) {
    this.setState({
      currentTab: newTab
    })
  console.log('app state:', this.state);    
  }

  onChangeItems(newItems) {
    console.log(newItems)
  }

render() {
  let currentPage = this.state.currentTab;
  let user = this.state.user;
  console.log(user);
  
  return (
    <>
      <Header 
        changeTab={this.onChangeTab.bind(this)}
        initialTab={this.state.currentTab} 
      />
      <div className='container'>
        <div className="row">
          <div className="col-sm">
            {/* <AddItem /> */}
            <form>
              <div className="form-group">
                <label htmlFor="formText">Task
                  <input 
                    value={this.state.items.item}
                    onChange={e => this.setState({ items: { ...this.state.items, item: e.target.value }})} 
                    style={{border: '1px solid black'}}
                    className="form-control"
                    id="formText"
                  />
                </label>
              </div>
              <div className="form-check">
                <input 
                  type="radio"                    
                  name="listType" 
                  value={1}
                  onChange={e => this.setState({ items: { ...this.state.items, list_type: e.target.value }})}
                  className="form-check-input" 
                  id="personalItemCheck"
                  checked              
                />
                <label className="form-check-label" htmlFor="personalItemCheck">Personal Item</label>
              </div>
              <div className='form-check'>
                <input 
                  type="radio" 
                  name="listType" 
                  value={2}
                  onChange={e => this.setState({ items: { ...this.state.items, list_type: e.target.value }})} 
                  className="form-check-input"
                  id="workItemCheck" 
                />
                <label className="form-check-label" htmlFor="workItemCheck">Work Item</label>
              </div>
              <button type='submit' className='btn btn-primary' onClick={this.addItem}>Add</button>
            </form>            
          </div>
        </div>
      </div>
        
      { currentPage.tab === 'lists' 
        ? <Lists 
            personalList={this.state.personalList}
            workList={this.state.workList}
            currentTab={this.state.currentTab}
            items={this.state.items}
            changeItems={this.onChangeItems.bind(this)}
          />
        : currentPage.tab === 'calendar'
        ? <Calendar />
        : <Main
          user={this.state.user} />
      }
    </>
  )
}
}


export default App;
