import { useState } from "react";
import Popup from "./popup";
import "./popup.css";
export default function PopupTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);
  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup);
  }
  function onClose() {
    setShowModelPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModelPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Popup
          id={custom - id}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
