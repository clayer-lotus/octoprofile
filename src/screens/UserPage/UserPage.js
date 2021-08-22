import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./UserPage.css";
import StatsItem from "../../components/StatsItem/StatsItem";
import Repos from "../../components/Repos/Repos";
import { Row, Container, Form } from "react-bootstrap";
import "../../bootstrap.min.css";
import StarsPerLanguage from "../../components/StarsPerLanguage/StarsPerLanguage";
import MostStarred from "../../components/MostStarred/MostStarred";
import TopLanguage from "../../components/TopLanguage/TopLanguage";
import axios from "axios";

const UserPage = () => {
  const search = useLocation().search;
  const searchName = new URLSearchParams(search).get("id");

  const [userName, setuserName] = useState("");
  const [githubName, setgithubName] = useState("");
  const [userImage, setuserImage] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    axios("https://api.github.com/users/" + searchName)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error in Fetching Data ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading ...";
  if (error) return "Error ...";

  return (
    <div className="userContainer">
      <div className="upIntroSection">
        <img
          src="https://avatars.githubusercontent.com/u/61588021?v=4"
          alt=""
          className="github__image"
        />
        <h1>Lotus Biswas</h1>
        <h3 className="github__name">
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
            <TopLanguage title={"Top Languages"} />
            <MostStarred title={"Most Starred"} />
            <StarsPerLanguage title={"Stars Per Language"} />
          </Row>
        </Container>
      </div>
      <div className="top__repos">
        <Container>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="heading__topRepos">
                <h3>
                  <span className="underline-text"> Top Repos </span>
                  <span className="light__test">by</span>
                </h3>
              </Form.Label>
              <Form.Select defaultValue="Choose..." className="dropdown">
                <option>forks</option>
                <option>stars</option>
                <option>size</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <Row xs={1} md={2} className="">
            <Repos />
            <Repos />
            <Repos />
            <Repos />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default UserPage;
