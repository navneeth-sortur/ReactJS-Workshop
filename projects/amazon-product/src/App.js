import React, { Component } from "react";
import classes from "./App.module.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import Topbar from "./Topbar/Topbar";
import ProductData from "./utils/productData";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: "https://imgur.com/iOeUBV7.png",
    showHeartBeatSection: false
  };

  render() {
    return (
      <div className="App">
        <Topbar></Topbar>

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreviewWrapper}>
            <ProductPreview
              currentPreviewImage={this.state.currentPreviewImage}
              showHeartBeatSection={this.state.showHeartBeatSection}
            ></ProductPreview>
          </div>

          <div className={classes.ProductDetailsWrapper}>
            <ProductDetails data={this.state.productData}></ProductDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
