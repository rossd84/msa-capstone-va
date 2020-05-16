import React, { Component } from 'react'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Lists } from './Lists'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: props.initialTab
    }
  }

    onChangeTab() {
      this.props.changeTab(this.state.tab)
    }

  render() {
    return(
      <header className="container bg-dark">
        <div className="row">
          <div className="col-sm text-center">
          <a className="navbar-brand" href="#">Personal Assistant</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Tabs 
              defaultActiveKey="home" 
              id="uncontrolled-tab-example"
              onSelect={this.onChangeTab.bind(this)}
            >
              <Tab eventKey="home" title="Home" />
              <Tab eventKey="lists" title="Lists" />
              <Tab eventKey="calendar" title="Calendar" />
            </Tabs>
            {/* <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Calendar</a>
            </li>
          </ul>  */}
          </div>
        </div>
      </header>
    )
  }
}