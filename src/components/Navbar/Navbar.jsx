import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", "false");
      navigate("");
    }
  };

  return (
    <div className="Navbar">
      <header>
        <h1>Best Application</h1>
        {isLoggedIn ? (
          <button className={styles.sign_in} onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button className={styles.sign_in} onClick={() => navigate("")}>Sign In</button>
        )}
      </header>
    </div>
  );
}

export default Navbar;
