import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./SignIn.style.css";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");
    });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          alert("account successfully created. Please login now");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="sign-in">
      <div className="logo">
        <span onClick={(e) => history.push("/")}>Believer</span>
      </div>

      <form>
        <h4>Sign In</h4>
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h5>If you don't have an account please create</h5>
        <button onClick={register}>Create Account</button>
      </form>
    </div>
  );
}

export default SignIn;
