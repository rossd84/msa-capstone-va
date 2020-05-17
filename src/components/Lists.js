import React, { Component } from 'react'
import { AddItem } from './AddItem'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export class Lists extends Component {

  render() {
    const listSample = this.props.listItems.map((item, index) => <li key={index}>{item}</li>)
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
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text as='div'>
                    <ul>
                      {listSample}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
              <Card.Body>
                  <Card.Title className="text-center">Personal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text as="div">
                    <ul>
                      <li>
                        Sample 1
                      </li>
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