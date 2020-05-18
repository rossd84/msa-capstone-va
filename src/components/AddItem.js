import React, { Component } from 'react'
import { Collapse, Button } from 'react-bootstrap'


export class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      username: '',
      open: false 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open})
    console.log(this.state.open)
  }


  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log(event)
    event.preventDefault()
  }

  render() {
    return (
      <>
        <Button
        onClick={this.handleToggle.bind(this)}
        aria-controls="example-collapse-text"
        aria-expanded={this.state.open}
      >
      Add
      </Button>
      <Collapse in={this.state.open}>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm">
              <label>Task</label>          
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />            
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <label>Due date</label>
              <input type="date" />
              <input type="time" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <label>
                <input type="radio" id="personalItem" name="listType" />Personal
              </label>
              <label>
                <input type="radio" id="workItem" name="listType" />Work
              </label>
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </Collapse>
      </>
    )
  }
}