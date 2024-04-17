import React from "react";
import noImage from "../../images/no-image.jpg";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import Category from "../Category/Category";

const Card = ({
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  details,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img
          src={gallery ? gallery[0] : noImage}
          alt={name}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardTop}>
        <div className={styles.cardTitle}>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardPrice}>€{price}</p>
        </div>
        <div className={styles.cardRatingWrapper}>
          <div className={styles.cardRating}>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
                fill="#FFC531"
                stroke="#FFC531"
                strokeWidth="1.2"
              />
            </svg>
            <p className={styles.cardReviews}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={styles.cardLocationWrapper}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07537 2.63214 3.54925 3.75736 2.42403C4.88258 1.29881 6.4087 0.666672 8 0.666672C9.5913 0.666672 11.1174 1.29881 12.2426 2.42403C13.3679 3.54925 14 5.07537 14 6.66667Z"
                stroke="#101828"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                stroke="#101828"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={styles.cardLocation}>{location}</p>
          </div>
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardCategories}>
          <Category details={details} />
        </div>
        <Button text="Show more" />
      </div>
    </li>
  );
};

export default Card;
