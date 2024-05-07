import React from "react";
import classes from "./AdharCard.module.css";

const AadharCard = ({ data }) => {
  const { fullName, dob, address, contact, uid } = data;

  return (
    <div className={classes["aadhar-card"]}>
      <h2>Aadhar Card</h2>
      <div className={classes.adhar}>
        <img
          src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
          alt="adhar image"
        />
        <section>
          <p>
            <span className={classes.label}>Name:</span> {fullName}
          </p>
          <p>
            <span className={classes.label}>Date of Birth:</span> {dob}
          </p>
          <p>
            <span className={classes.label}>Address:</span> {address}
          </p>
          <p>
            <span className={classes.label}>Contact Information:</span>{" "}
            {contact}
          </p>
          <p>
            <span className={classes.label}>UID:</span>{" "}
            <span className={classes.uidCon}>
              {uid.replace(/(.{4})/g, "$1 ")}
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AadharCard;
