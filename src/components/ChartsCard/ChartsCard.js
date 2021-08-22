import React from "react";
import "./ChartsCard.css";
import { Button, Badge, Row, Col, Card, Container } from "react-bootstrap";
import "../../bootstrap.min.css";
import MostStarred from "../MostStarred/MostStarred";
const ChartsCard = (props) => {
  return (
    <Col className="mt-3">
      <Card className="chart__cards">
        <Card.Body>
          <Card.Title className="heading">
            <h3>{props.title}</h3>
          </Card.Title>
          <Card.Text>
            <MostStarred type={props.type} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChartsCard;
