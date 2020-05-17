import React, { useState } from 'react'
import { Button, Collapse, Form, FormControl, Col, InputGroup } from 'react-bootstrap';

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
          <Form.Group>
            <Form.Row width='100%'>
              <Col className="col-sm-2">
                <Form.Label column>
                  Item
                </Form.Label>
              </Col>              
              <Col className="col-sm-10">
                <Form.Control type="text" placeholder="e.g. Go to grocery store" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col className="col-sm-2">
                <Form.Label column>
                  Due By
                </Form.Label>
              </Col>
              <Col className="col-sm-2">
                <Form.Control type="date" />
              </Col>
              <Col className="col-sm-2">
                <Form.Control type="time" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Check inline label="Personal" type='radio' id='personal' />
          <Form.Check inline label="Work" type='radio' id='work' />
          <Button 
            type="submit"
            block
          >Submit</Button>
        </Form>
      </Collapse>
    </>  
  )
}