import React, { Component } from 'react'
import { AddItem } from './AddItem'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export class Lists extends Component {

  render() {
    const personalList = this.props.personalList.map((item, index) => <li className='list-group-item' key={index}>{item.item}</li>)
    const workList = this.props.workList.map((item, index) => <li className='list-group-item' key={index}>{item.item}</li>)

    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <AddItem />     
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className="col-sm">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title className='text-center'>Work</Card.Title>
                  <Card.Text as='div'>
                    <ul className='list-group'>
                      {personalList}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
              <Card.Body>
                  <Card.Title className="text-center">Personal</Card.Title>
                  <Card.Text as="div">
                    <ul>
                      {workList}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </CardDeck>
            </div>
          </div>
        </div>        
      </>
    )
  }
}