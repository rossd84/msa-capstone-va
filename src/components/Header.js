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
        this.setState({ tab: 'lists'});
        break;
      case 'calendar':
        this.setState({ tab: 'calendar'});
        break;
      default:
        this.setState({ tab: 'home'})
    }
    this.props.changeTab(this.state.tab)
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
              id="uncontrolled-tab-example"
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