import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Main.module.css';
import Card from "../../components/Card/Card";
import { PostsContext } from "../../context/PostsContext";

function MainPage() {
  const posts = useContext(PostsContext);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="MainPage">
      <main>
        <div className={styles.card_container}>
          {posts.map(post => (
            <Card
              key={post.id}
              title={post.title}
              body={post.body}
              onClick={() => handleCardClick(post.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
