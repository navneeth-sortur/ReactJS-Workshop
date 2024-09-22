import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = props => {
  let currentHour = new Date().getHours();
  const displayHour = currentHour > 9 ? currentHour : "0" + currentHour;
  let currentMinute = new Date().getMinutes();
  const displayMinute = currentMinute > 9 ? currentMinute : "0" + currentMinute;

  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="product_image"></img>

      {props.showHeartBeatSection ? (
        <div className={classes.HeartRateSection}>
          <i class="fa-solid fa-heart-pulse"></i>
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
