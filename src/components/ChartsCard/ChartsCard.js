import React from "react";
import "./ChartsCard.css";
import { Button, Badge, Row, Col, Card, Container } from "react-bootstrap";
import "../../bootstrap.min.css";
const ChartsCard = (props) => {
  return (
    <Col className="mt-3">
      <Card className="chart__cards">
        <Card.Body>
          <Card.Title className="heading">
            <h3>{props.title}</h3>
          </Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChartsCard;
