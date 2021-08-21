import React from "react";
import "./Repos.css";
import { Button, Badge, Row, Col, Card, Container } from "react-bootstrap";
import "../../bootstrap.min.css";
const Repos = () => {
  return (
    <Col className="mt-3">
      <Card>
        <Card.Body>
          <Card.Title className="repo__name">
            <span>
              <i class="fas fa-book"></i> dev-lotus
            </span>
          </Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
              }}
            >
              <span>
                <i class="fas fa-star" aria-hidden="true"></i> 1
              </span>
              <span>
                <i class="fas fa-code-fork" aria-hidden="true"></i> 0
              </span>
            </div>
            <div>
              <span>
                <i class="fas fa-star" aria-hidden="true"></i> 1
              </span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Repos;
