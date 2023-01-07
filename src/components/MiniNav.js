import React from "react";
import { Link } from "react-router-dom";

function MiniNav() {
  const userId = localStorage.getItem("user");
  console.log(userId);
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "2em 0",
        }}
      >
        <li style={{ listStyle: "none" }}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/dashboard/" + userId + "/"}
          >
            Start
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/dashboard/" + userId + "/minInfo"}
          >
            Min info
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MiniNav;
