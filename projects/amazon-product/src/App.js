import logo from "./amazon-logo-transparent.png";
import classes from "./App.module.css";
import ProductData from "./utils/productData";

function App() {
  let currentHour = new Date().getHours();
  const displayHour = currentHour > 9 ? currentHour : "0" + currentHour;
  let currentMinute = new Date().getMinutes();
  const displayMinute = currentMinute > 9 ? currentMinute : "0" + currentMinute;

  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src={logo} className="Amazon-logo" alt="logo" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="product_image"></img>
          <div className={classes.TimeSection}>
            <p>{`${displayHour}:${displayMinute}`}</p>
          </div>
          {/*<div className={classes.HeartRateSection}>
            <i class="fa-solid fa-heart-pulse"></i>
        <p>78</p>
  </div>*/}
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>

          <h3 className={classes.SectionHeader}>Select Color</h3>
          <div>
            <img
              className={[
                classes.ProductImage,
                classes.SelectedProductImage
              ].join(" ")}
              src="https://imgur.com/iOeUBV7.png"
              alt="black_product_image"
            ></img>
            <img
              className={classes.ProductImage}
              src="https://imgur.com/PTgQlim.png"
              alt="red_product_image"
            ></img>
            <img
              className={classes.ProductImage}
              src="https://imgur.com/Mplj1YR.png"
              alt="blue_product_image"
            ></img>
            <img
              className={classes.ProductImage}
              src="https://imgur.com/xSIK4M8.png"
              alt="purple_product_image"
            ></img>
          </div>
          <h3 className={classes.SectionHeader}>Features</h3>
          <div>
            <button
              className={[
                classes.FeatureItem,
                classes.SelectedFeatureItem
              ].join(" ")}
            >
              Time
            </button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
