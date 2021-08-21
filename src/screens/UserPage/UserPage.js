import React from "react";
import { useLocation } from "react-router";
import "./UserPage.css";
import StatsItem from "../../components/StatsItem/StatsItem";
import ChartsCard from "../../components/ChartsCard/ChartsCard";
import { Button, Badge, Row, Col, Card, Container } from "react-bootstrap";
import "../../bootstrap.min.css";
const UserPage = () => {
  //   const search = useLocation().search;
  //   const name = new URLSearchParams(search).get("id");
  //   return <h3>{name}</h3>;
  return (
    <div className="userContainer">
      <div className="upIntroSection">
        <img
          src="https://avatars.githubusercontent.com/u/61588021?v=4"
          alt=""
        />
        <h1>Lotus Biswas</h1>
        <h3>
          <a href="https://github.com/dev-lotus/" target="blank">
            {" "}
            @dev-lotus
          </a>
        </h3>
        <ul>
          <li>
            <i class="fa fa-map-marker"></i>Dehradun
          </li>
          <li>
            <i class="fa fa-calendar"></i>Joined February 28, 2020
          </li>
        </ul>
        {/* STATS SECTION */}
        <div className="stats">
          <StatsItem num={11} num__label={"Repositories"} />
          <StatsItem num={22} num__label={"FOLLOWERS"} />
          <StatsItem num={7} num__label={"FOLLOWING"} />
        </div>
      </div>
      <div className="chartSection">
        <Container>
          <Row xs={1} md={3} className="g-4 ">
            <ChartsCard title={"Top Languages"} />
            <ChartsCard title={"Most Starred"} />
            <ChartsCard title={"Stars Per Language"} />
          </Row>
        </Container>
      </div>
      <div className="top__repos"></div>
    </div>
  );
};

export default UserPage;
