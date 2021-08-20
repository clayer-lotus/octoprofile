import React from "react";
import { useLocation } from "react-router";

const UserPage = (props) => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("id");
  return <h3>{name}</h3>;
};

export default UserPage;
