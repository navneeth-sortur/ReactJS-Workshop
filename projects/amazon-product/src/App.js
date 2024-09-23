import React, { Component } from "react";
import classes from "./App.module.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import Topbar from "./Topbar/Topbar";
import ProductData from "./utils/productData";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  };

  onColorOptionClicked = pos => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureListClicked = pos => {
    this.setState({ currentSelectedFeature: pos });
  };

  render() {
    return (
      <div className="App">
        <Topbar></Topbar>

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreviewWrapper}>
            <ProductPreview
              currentPreviewImage={
                this.state.productData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            ></ProductPreview>
          </div>

          <div className={classes.ProductDetailsWrapper}>
            <ProductDetails
              data={this.state.productData}
              onColorOptionClicked={this.onColorOptionClicked}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureListClicked={this.onFeatureListClicked}
              currentSelectedFeature={this.state.currentSelectedFeature}
            ></ProductDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
