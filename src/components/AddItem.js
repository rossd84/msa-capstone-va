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
            <Form.Row>
              <Form.Label column lg={2}>
                Item
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Item" />
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