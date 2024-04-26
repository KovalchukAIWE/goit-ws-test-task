import React, { useState } from "react";
import styles from "./BookForm.module.css";
import FormInput from "../FormInput/FilterInput";
import Button from "../Button/Button";

const BookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    bookingDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      });
      window.location.reload();
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const { name, email, bookingDate } = formData;
    const newErrors = { name: "", email: "", bookingDate: "" };

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!bookingDate) {
      newErrors.bookingDate = "Please select a booking date.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form className={styles.bookForm} onSubmit={handleSubmit}>
      <p className={styles.bookFormTitle}>Book your campervan now</p>
      <p className={styles.bookFormSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <div>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className={styles.bookFormTextError}>{errors.name}</span>
      </div>
      <div>
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className={styles.bookFormTextError}>{errors.email}</span>
      </div>
      <div>
        <FormInput
          type="date"
          placeholder="Booking Date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
        />
        <span className={styles.bookFormTextError}>{errors.bookingDate}</span>
      </div>
      <div>
        <textarea
          placeholder="Comments"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className={styles.BookFormTextarea}
        />
      </div>
      <Button type="submit" text="Send" />
    </form>
  );
};

export default BookForm;
