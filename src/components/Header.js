import React, { Component } from 'react'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: props.initialTab
    }
  }

  handleSelect(key) {
    switch (key) {
      case 'lists':
        this.props.changeTab({ tab: 'lists'});
        break;
      case 'calendar':
        this.props.changeTab({ tab: 'calendar'});
        break;
      default:
        this.props.changeTab({ tab: 'home'})
    }
  }

  render() {
    return(
      <header className="container bg-dark">
        <div className="row">
          <div className="col-sm text-center">
          <a className="navbar-brand" href="/">Personal Assistant</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Tabs 
              defaultActiveKey="home" 
              onSelect={this.handleSelect.bind(this)}
            >
              <Tab eventKey="home" title="Home" />
              <Tab eventKey="lists" title="Lists" />
              <Tab eventKey="calendar" title="Calendar" />
            </Tabs>
          </div>
        </div>
      </header>
    )
  }
}