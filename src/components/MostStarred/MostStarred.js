import React from "react";
import { Bar, PolarArea } from "react-chartjs-2";
import { Col, Card } from "react-bootstrap";
import "../ChartCardStyle.css";

const MostStarred = (props) => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],

    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <Col className="mt-3">
      <Card className="chart__cards">
        <Card.Body>
          <Card.Title className="heading">
            <h3>{props.title}</h3>
          </Card.Title>
          <Card.Text>
            <PolarArea
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MostStarred;
