// src/App.jsx
import React, { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import "./App.css";

function App() {
  const [view, setView] = useState("home"); // "home", "login", "signup"

  return (
    <div id="root">
      {view === "home" && (
        <>
          <h1>Pixifyy</h1>
          <p id="description">Pixifyy is amazing.</p>
          <button className="explore-button">Explore</button>
          <div className="auth-links">
            <a href="#" className="auth-link" onClick={() => setView("signup")}>
              SignUp
            </a>
            or
            <a href="#" className="auth-link" onClick={() => setView("login")}>
              LogIn
            </a>
          </div>
        </>
      )}

      {view === "signup" && <SignUp onLoginClick={() => setView("login")} />}
      {view === "login" && <LogIn onSignUpClick={() => setView("signup")} />}
    </div>
  );
}

export default App;
