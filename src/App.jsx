import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="root">
        <h1>Pixifyy</h1>
        <p id="description">Pixifyy is amazing.</p>
        <button class="explore-button">Explore</button>
        <div class="auth-links">
          <a href="#" class="auth-link">
            SignUp
          </a>
          or
          <a href="#" class="auth-link">
            LogIn
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
