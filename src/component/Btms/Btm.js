import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Btm.css'
const Btm = ({deletData,showData}) => {
  return (
    
    <Row className="center my-2">
          <Col sm="8" className="btns-y">
            <button onClick={deletData} className="btn btn-primary p-2">Delete All</button>
            <button onClick={showData} className="btn btn-primary p-2">Show Data</button>
          </Col>
        </Row>
  )
}

export default Btm