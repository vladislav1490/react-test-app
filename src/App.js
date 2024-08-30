import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SigIn/SignInPage";
import MainPage from "./pages/Main/MainPage";
import PostDetailPage from "./pages/PostDetail/PostDetailPage";
import Navbar from "./components/Navbar/Navbar";
import { PostsProvider } from "./context/PostsContext";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    if (storedStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <PostsProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/sign_in" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;
