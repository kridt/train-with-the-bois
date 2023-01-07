import React, { useEffect } from "react";
import PinInput from "react-pin-input";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      const user = localStorage.getItem("user");
      navigate("/dashboard/" + user);
    } else {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  function handleLogin(e) {
    console.log("Login", e);
    firestore
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const user = querySnapshot.docs.find((file) => file.id === "user-" + e);

        if (user) {
          var onlyId = user.id.replace("user-", "");
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("user", onlyId);
          localStorage.setItem("userInfo", JSON.stringify(user.data()));
          /* navigate("/dashboard/" + user.id); */
          navigate("/dashboard/" + onlyId);
        } else {
          alert("Wrong pin");
        }
      });
  }

  return (
    <div>
      <h1>Login</h1>

      <PinInput
        length={4}
        type="numeric"
        onComplete={(e) => handleLogin(e)}
        style={{ padding: "30px" }}
        inputStyle={{ color: "white" }}
        secret={true}
        inputMode="numeric"
      />
    </div>
  );
}
