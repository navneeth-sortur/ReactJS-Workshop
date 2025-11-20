import React, { useState } from "react";
import classes from "./App.module.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import Topbar from "./Topbar/Topbar";
import { ProductData } from "./utils/productData";

const App = () => {
  const [currentPreviewImagePos, setCurrentPreviewImagePos] = useState(0);
  const [currentSelectedFeature, setCurrentSelectedFeature] = useState(0);

  const onColorOptionClicked = pos => {
    if (pos !== currentPreviewImagePos) {
      setCurrentPreviewImagePos(pos);
    }
  };

  const onFeatureListClicked = pos => {
    setCurrentSelectedFeature(pos);
  };

  const currentPreviewImage =
    ProductData.colorOptions[currentPreviewImagePos].imageUrl;

  return (
    <div className="App">
      <Topbar />

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreviewWrapper}>
          <ProductPreview
            currentPreviewImage={currentPreviewImage}
            currentSelectedFeature={currentSelectedFeature}
          />
        </div>

        <div className={classes.ProductDetailsWrapper}>
          <ProductDetails
            data={ProductData}
            onColorOptionClicked={onColorOptionClicked}
            currentPreviewImagePos={currentPreviewImagePos}
            onFeatureListClicked={onFeatureListClicked}
            currentSelectedFeature={currentSelectedFeature}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
