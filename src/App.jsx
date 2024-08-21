import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import FeedPage from "./FeedPage";
import "./App.css";

function App() {
  const [view, setView] = useState("home");
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/feed"); //feed page
  };

  return (
    <div id="root">
      <Routes>
        <Route
          path="/"
          element={
            view === "home" ? (
              <>
                <h1>Pixifyy</h1>
                <p id="description">Pixifyy is amazing.</p>
                <button className="explore-button" onClick={handleExploreClick}>
                  Explore
                </button>
                <div className="auth-links">
                  <button
                    className="auth-link"
                    onClick={() => setView("signup")}
                  >
                    SignUp
                  </button>
                  or
                  <button
                    className="auth-link"
                    onClick={() => setView("login")}
                  >
                    LogIn
                  </button>
                </div>
              </>
            ) : view === "signup" ? (
              <SignUp onLoginClick={() => setView("login")} />
            ) : view === "login" ? (
              <LogIn onSignUpClick={() => setView("signup")} />
            ) : null
          }
        />
        <Route path="/feed" element={<FeedPage />} />
        {/*ivde routes add akkane*/}
      </Routes>
    </div>
  );
}

export default App;
