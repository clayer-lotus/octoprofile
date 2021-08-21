import React from "react";
import "./Repos.css";
import { Button, Badge, Row, Col, Card, Container } from "react-bootstrap";
import "../../bootstrap.min.css";
const Repos = () => {
  return (
    <Col className="mt-3">
      <Card className="top__cards">
        <Card.Body>
          <Card.Title className="repo">
            <span>
              <i class="fas fa-book"></i>{" "}
              <span className="repo__name">dev-lotus</span>
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
              <span
                style={{
                  paddingRight: "5px",
                }}
              >
                <i
                  class="fas fa-circle"
                  aria-hidden="true"
                  style={{ color: "green" }}
                ></i>{" "}
                React JS
              </span>
              <span>
                <i
                  class="fas fa-star"
                  aria-hidden="true"
                  style={{ color: "gold" }}
                ></i>{" "}
                1
              </span>
              <span>
                <i
                  class="fas fa-code-fork"
                  aria-hidden="true"
                  style={{ color: "blue" }}
                ></i>{" "}
                0
              </span>
            </div>
            <div style={{ paddingTop: "4px" }}>
              <span>150 KB</span>
            </div>
          </Card.Text>
        </Card.Body>
        <div class="go-corner" href="#">
          <div class="go-arrow">→</div>
        </div>
      </Card>
    </Col>
  );
};

export default Repos;
