import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = ({
  data,
  currentPreviewImagePos,
  currentSelectedFeature,
  onColorOptionClicked,
  onFeatureListClicked
}) => {
  return (
    <div className={classes.ProductDetails}>
      <h1 className={classes.ProductTitle}>{data.title}</h1>
      <p className={classes.ProductDescription}>{data.description}</p>

      <h3 className={classes.SectionHeader}>Select Color</h3>
      <div className={classes.ColorOptions}>
        {data.colorOptions.map((option, index) => {
          const isSelected = index === currentPreviewImagePos;

          return (
            <img
              key={option.styleName}
              className={`${classes.ProductImage} ${
                isSelected ? classes.SelectedProductImage : ""
              }`}
              src={option.imageUrl}
              alt={option.styleName}
              onClick={() => onColorOptionClicked(index)}
            />
          );
        })}
      </div>

      <h3 className={classes.SectionHeader}>Features</h3>
      <div className={classes.FeaturesList}>
        {data.featureList.map((feature, index) => {
          const isSelected = index === currentSelectedFeature;

          return (
            <button
              key={feature}
              className={`${classes.FeatureItem} ${
                isSelected ? classes.SelectedFeatureItem : ""
              }`}
              onClick={() => onFeatureListClicked(index)}
            >
              {feature}
            </button>
          );
        })}
      </div>

      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
