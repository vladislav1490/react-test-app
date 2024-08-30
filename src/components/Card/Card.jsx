import React from "react";
import styles from './Card.module.css';
import back from '../../assets/images/back.jpg';

function Card({ title, body, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={back} alt="Card"/>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

export default Card;
