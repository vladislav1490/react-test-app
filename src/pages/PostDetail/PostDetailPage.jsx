import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './PostDetail.module.css';

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <main>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.body}>{post.body}</p>
          <div className={styles.commentsSection}>
            <h2 className={styles.commentTitle}>Comments</h2>
            <ul className={styles.commentList}>
              {comments.map(comment => (
                <li key={comment.id} className={styles.commentItem}>
                  <p className={styles.commentName}>{comment.name}</p>
                  <p className={styles.commentBody}>{comment.body}</p>
                  <p className={styles.commentEmail}>{comment.email}</p>
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.backButton} onClick={() => navigate('/main')}>
            Back to Main
          </button>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
