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
  const [profileLink, setProfileLink] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userPublicRepos, setUserPublicRepos] = useState("");
  const [userFollowers, setUserFollowers] = useState("");
  const [userFollowing, setUserFollowing] = useState("");
  const [topLanguage, setTopLanguage] = useState("");

  var topLanguageName = [];
  var topLanguageSameCount = [];

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
        topLanguageName.push(prop);
        topLanguageSameCount.push(counts[prop]);
      }
    }
  }

  const fetchData = () => {
    const githubProfileData = axios.get(
      "https://api.github.com/users/" + searchName
    );
    const githubRepos = axios.get(
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

        var listofTopLanguage = [];
        for (var i = 0; i < allgithubRepos.length; i++) {
          if (allgithubRepos[i].fork == false) {
            if (allgithubRepos[i].language == null) {
              listofTopLanguage.push("Others");
            } else {
              listofTopLanguage.push(allgithubRepos[i].language);
            }
          }
        }

        count_duplicate(listofTopLanguage);

        console.log(listofTopLanguage);

        console.log(topLanguageName);
        console.log(topLanguageSameCount);

        // console.log(topLanguage);
        console.log(allgithubProfileData);
        console.log(allgithubRepos);
      })
    );
  };

  useEffect(() => {
    //     // setTopLanguage(response.data.map(d=>d.))
    //   })
    //   .catch((error) => {
    //     console.error("Error in Fetching Data ", error);
    //     setError(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
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
            <i class="fa fa-map-marker"></i>
            {userLocation}
          </li>
          <li>
            <i class="fa fa-calendar"></i>Joined February 28, 2020
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
