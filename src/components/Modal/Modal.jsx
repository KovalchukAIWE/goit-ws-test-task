import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

import closeButton from "../../images/close-button.svg";
import ratingIcon from "../../images/rating.svg";
import locationIcon from "../../images/map-pin.svg";
import noImage from "../../images/no-image.jpg";
import ButtonModal from "../ButtonModal/ButtonModal";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const Modal = ({ isOpen, onClose, advert }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  if (!isOpen || !advert) return null;

  const { gallery, name, price, rating, reviews, location, description } =
    advert;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalButtonClose} onClick={onClose}>
          <img src={closeButton} alt="close" />
        </button>
        <div className={styles.modalTop}>
          <p className={styles.modalName}>{name}</p>
          <div className={styles.modalRatingWrapper}>
            <div className={styles.modalRating}>
              <img src={ratingIcon} alt="rating" />
              <p className={styles.modalReviews}>
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <div className={styles.modalLocationWrapper}>
              <img src={locationIcon} alt="location" />
              <p className={styles.modalLocation}>{location}</p>
            </div>
          </div>
          <p className={styles.modalPrice}>€{price}</p>
        </div>
        <div className={styles.modalMiddle}>
          <div className={styles.modalGallery}>
            {gallery.map((image, index) => (
              <div className={styles.modalImages} key={index}>
                <img
                  src={image ? image : noImage}
                  alt={`{index + 1}`}
                  className={styles.modalImage}
                />
              </div>
            ))}
          </div>
          <p className={styles.modalDescription}>{description}</p>
        </div>
        <div className={styles.modalBottom}>
          <div className={styles.modalBottomButtons}>
            <div className={styles.modalBottomButton}>
              <ButtonModal
                text="Features"
                onClick={() => {
                  setShowFeatures(!showFeatures);
                  setShowReviews(false);
                }}
                active={showFeatures}
              />
            </div>
            <ButtonModal
              text="Reviews"
              onClick={() => {
                setShowReviews(!showReviews);
                setShowFeatures(false);
              }}
              active={showReviews}
            />
          </div>
          {showFeatures && <Features advert={advert} />}
          {showReviews && <Reviews reviews={reviews} />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
