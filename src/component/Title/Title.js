import React from "react";
import { Col, Row } from "react-bootstrap";
import './Title.css' 

const Title = ({data}) => {
  return (
    <Row className="center">
      <Col sm="8" className="title">You Have {data.length} Date/s Today</Col>
    </Row>
  );
};

export default Title;
