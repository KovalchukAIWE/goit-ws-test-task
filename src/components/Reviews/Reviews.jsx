import React from "react";
import BookForm from "../BookForm/BookForm";
import { Rating } from "react-simple-star-rating";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsLeft}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => {
          const firstLetter = reviewer_name.charAt(0).toUpperCase();
          return (
            <div className={styles.reviewsItem} key={index}>
              <div className={styles.reviewsTop}>
                <div className={styles.reviewsLatter}>{firstLetter}</div>
                <div>
                  <p className={styles.reviewsName}>{reviewer_name}</p>
                  <Rating
                    initialValue={reviewer_rating}
                    readonly={true}
                    size={16}
                    fillColor={"#FFC531"}
                  />
                </div>
              </div>
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.reviewsRight}>
        <BookForm />
      </div>
    </div>
  );
};

export default Reviews;
