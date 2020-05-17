import React, { useState } from 'react'
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';

export function AddItem() {
  const [open, setOpen] = useState(false);

  return(
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-form"
        aria-expanded={open}
        block
      >Add Item</Button>
      <Collapse in={open}>
        <Form>
          <Form.Group as={Row}>
            <Form.Row width='100%'>
              <Col>
                <Form.Label column>
                  Item
                </Form.Label>
              </Col>              
              <Col className="col-sm-8">
                <Form.Control type="text" placeholder="e.g. Go to grocery store" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label column>
                  Due By
                </Form.Label>
              </Col>
              <Col>
                <Form.Control type="date" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button 
            type="submit"
            block
          >Submit</Button>
        </Form>
      </Collapse>
    </>  
  )
}