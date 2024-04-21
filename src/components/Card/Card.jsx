import React from "react";
import noImage from "../../images/no-image.jpg";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import Category from "../Category/Category";

import likeIcon from "../../images/like.svg";
import ratingIcon from "../../images/rating.svg";
import locationIcon from "../../images/map-pin.svg";

const Card = ({ advert, onShowMore }) => {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    details,
  } = advert;
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
          <div className={styles.cardPriceWrapper}>
            <p className={styles.cardPrice}>€{price}</p>
            <img src={likeIcon} alt="like" />
          </div>
        </div>
        <div className={styles.cardRatingWrapper}>
          <div className={styles.cardRating}>
            <img src={ratingIcon} alt="rating" />
            <p className={styles.cardReviews}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={styles.cardLocationWrapper}>
            <img src={locationIcon} alt="location" />
            <p className={styles.cardLocation}>{location}</p>
          </div>
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardCategories}>
          <Category details={details} />
        </div>
        <Button onClick={() => onShowMore(advert)} text="Show more" />
      </div>
    </li>
  );
};

export default Card;
