import React, { useState } from "react";
import { uidCreate } from "../utils/uidCreation";
import classes from "./AdharForm.module.css";

const AadharForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uid = uidCreate();
    onSubmit({ ...formData, uid, length: uid.length });
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formHeading}>Aadhar Card Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputGroup}>
          <div className={classes.inputContainer}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={classes.inputGroup}>
          <div className={classes.inputContainer}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="contact">Contact Information</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Information"
              required
            />
          </div>
        </div>
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AadharForm;
