import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = ({ currentPreviewImage, currentSelectedFeature }) => {
  const now = new Date();

  const displayHour = String(now.getHours()).padStart(2, "0");
  const displayMinute = String(now.getMinutes()).padStart(2, "0");

  const isHeartRateActive = currentSelectedFeature === 1;

  return (
    <div className={classes.ProductPreview}>
      <img src={currentPreviewImage} alt="product_image" />

      {isHeartRateActive ? (
        <div className={classes.HeartRateSection}>
          <i className="fa-solid fa-heart-pulse"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${displayHour}:${displayMinute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
