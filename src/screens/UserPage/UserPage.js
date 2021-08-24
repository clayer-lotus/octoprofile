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
import LanguageColor from "../../components/LanguageColor/LanguageColor";

const UserPage = () => {
  const search = useLocation().search;
  const searchName = new URLSearchParams(search).get("id");

  const [userName, setuserName] = useState("");
  const [githubName, setgithubName] = useState("");
  const [userImage, setuserImage] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userPublicRepos, setUserPublicRepos] = useState("");
  const [userFollowers, setUserFollowers] = useState("");
  const [userFollowing, setUserFollowing] = useState("");
  const [topLanguageName, setTopLanguageName] = useState("");
  const [topLanguageSameCount, setTopLanguageSameCount] = useState("");
  const [getLanguageColor, setgetLanguageColor] = useState("");

  var pushtopLanguageName = [];
  var pushtopLanguageSameCount = [];
  var listofTopLanguage = [];
  var languageColorArr = [];

  function count_duplicate(a) {
    let counts = {};

    for (let i = 0; i < a.length; i++) {
      if (counts[a[i]]) {
        counts[a[i]] += 1;
      } else {
        counts[a[i]] = 1;
      }
    }
    for (let prop in counts) {
      if (counts[prop]) {
        pushtopLanguageName.push(prop);
        languageColorArr.push(LanguageColor[prop]);

        pushtopLanguageSameCount.push(counts[prop]);
      }
    }
    setTopLanguageName(pushtopLanguageName);
    setgetLanguageColor(languageColorArr);
    setTopLanguageSameCount(pushtopLanguageSameCount);
  }

  const fetchData = async () => {
    const githubProfileData = await axios.get(
      "https://api.github.com/users/" + searchName
    );
    const githubRepos = await axios.get(
      "https://api.github.com/users/" + searchName + "/repos"
    );

    axios.all([githubProfileData, githubRepos]).then(
      axios.spread((...allData) => {
        const allgithubProfileData = allData[0].data;
        const allgithubRepos = allData[1].data;

        setuserName(allgithubProfileData.name);
        setuserImage(allgithubProfileData.avatar_url);
        setgithubName(allgithubProfileData.login);
        setProfileLink(allgithubProfileData.html_url);
        setUserLocation(allgithubProfileData.location);
        setUserPublicRepos(allgithubProfileData.public_repos);
        setUserFollowers(allgithubProfileData.followers);
        setUserFollowing(allgithubProfileData.following);

        for (var i = 0; i < allgithubRepos.length; i++) {
          if (allgithubRepos[i].fork === false) {
            if (allgithubRepos[i].language == null) {
              listofTopLanguage.push("Others");
            } else {
              listofTopLanguage.push(allgithubRepos[i].language);
            }
          }
        }

        count_duplicate(listofTopLanguage);
        console.log(getLanguageColor);

        console.log(allgithubProfileData);
        console.log(allgithubRepos);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // if (loading) return "Loading ...";
  // if (error) return "Error ...";

  return (
    <div className="userContainer">
      <div className="upIntroSection">
        <a href={profileLink} target="blank">
          <img src={userImage} alt={userName} className="github__image" />
        </a>
        <h1>{userName}</h1>
        <h3 className="github__name">
          <a href={profileLink} target="blank">
            {" "}
            @{githubName}
          </a>
        </h3>
        <ul>
          <li>
            <i className="fa fa-map-marker"></i>
            {userLocation}
          </li>
          <li>
            <i className="fa fa-calendar"></i>Joined February 28, 2020
          </li>
        </ul>
        {/* STATS SECTION */}
        <div className="stats">
          <StatsItem num={userPublicRepos} num__label={"Repositories"} />
          <StatsItem num={userFollowers} num__label={"FOLLOWERS"} />
          <StatsItem num={userFollowing} num__label={"FOLLOWING"} />
        </div>
      </div>
      <div className="chartSection">
        <Container>
          <Row xs={1} md={3} className="g-4 ">
            <TopLanguage
              title={"Top Languages"}
              languageLabel={topLanguageName}
              languageCount={topLanguageSameCount}
              languageColorprop={getLanguageColor}
            />
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
