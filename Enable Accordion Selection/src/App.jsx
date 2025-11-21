import "./App.css";
import Accordian from "./component/Accordian";
import RandomColor from "./component/random-color";
import StarRating from "./component/star-rating";
import ImageSlider from "./component/image-slider";
import LoadMoreData from "./component/load-more-data";
import QRCodeGenerator from "./component/qr-code";
import LightDarkMode from "./light-dark-mode";
import ScrollIndicator from "./component/scroll-indicator";
import TabsTest from "./component/custom-tabs/tabs-test";
import PopupTest from "./component/custom-model-popup/popup-test";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* 
      <Accordian /> */}
      {/* Randon color component */}
      {/* <RandomColor/> */}
      {/* < StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={"http://picsum.photos/v2/list"}page={'1'} limit={"10"} /> */}
      {/* LOADMORE DATA */}
      {/* <LoadMoreData/> */}
      {/* QRCODE GENERATOR  */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* custom tabs component */}
      {/* <TabsTest/> */}

      {/* Custom model popup */}
      <PopupTest/>
    </div>
  );
}

export default App;
