import React from "react";
import { Pie } from "react-chartjs-2";
import { Col, Card } from "react-bootstrap";
import "../ChartCardStyle.css";

const TopLanguage = (props) => {
  // console.log("props " + props.languageLabel);

  const state = {
    labels: props.languageLabel,

    datasets: [
      {
        label: "Rainfall",
        backgroundColor: props.languageColorprop,

        data: props.languageCount,
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
            <Pie
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

export default TopLanguage;
