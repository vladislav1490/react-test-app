import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

function Form({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
      const users = await response.json();

      if (users.length > 0) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/main");
      } else {
        setError("User not found");
      }
    } catch (err) {
      setError("Error fetching data");
    }
  };

  return (
    <main>
      <div className={styles.signin_container}>
        <div className={styles.signin_box}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className={styles.input_field}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button type="submit" className={styles.submit_btn}>Sign In</button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </main>
  );
}

export default Form;
