import React, { Component } from 'react'
import { AddItem } from './AddItem'

export class Lists extends Component {
  constructor(props) {
    super()
    this.state = {
      listItems: []
    }
  }

  render() {
    const testSample = ['Sample 1', 'Sample 2', 'Sample 3'];
    const listSample = testSample.map((item, index) => <li key={index}>{item}</li>)
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <AddItem />
              <ul>
                {listSample}
              </ul>     
            </div>
          </div>
        </div>
      </>
    )
  }
}