// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import LogIn from './LogIn';

function App() {
  return (
    <Router>
      <div id="root">
        <h1>Pixifyy</h1>
        <p id="description">Pixifyy is amazing.</p>
        <button className="explore-button">Explore</button>
        <div className="auth-links">
          <Link to="/signup" className="auth-link">SignUp</Link>
          or
          <Link to="/login" className="auth-link">LogIn</Link>
        </div>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
