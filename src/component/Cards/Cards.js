

import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Cards.css'
const Cards = ({data}) => {
  return (
    
    <Row className="center">
          <Col sm="8">
            <div className="cards">
              {data.length ? (
                data.map((n) => {
                  return (
                    <div key={n.id} className="one-card">
                      <img src="1.jpg" alt="ss" className="avatar" />
                      <div className="text">
                        <p>{n.name}</p>
                        <p className="date ">{n.date}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <h2 className=" cen">There Is Not Any Dates Today </h2>
                  <h3>Have Rest Of Peace !!</h3>
                </>
              )}
            </div>
          </Col>
        </Row>
  )
}

export default Cards