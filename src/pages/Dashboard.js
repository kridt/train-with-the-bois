import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniNav from "../components/MiniNav";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    var userInfo = {};
    if (localStorage.getItem("loggedIn") === "true") {
      userInfo = JSON.parse(localStorage.getItem("userInfo"));
      userInfo.id = localStorage.getItem("user");
      console.log(userInfo);
      setUser(userInfo);
    }
  }, []);

  return (
    <div>
      <h1>hello {user?.name}</h1>
      <MiniNav />
      <button
        onClick={() => {
          localStorage.setItem("loggedIn", false);
          localStorage.setItem("user", "");
          localStorage.setItem("userInfo", "");
          navigate("/");
        }}
      >
        Log ud
      </button>
    </div>
  );
}
