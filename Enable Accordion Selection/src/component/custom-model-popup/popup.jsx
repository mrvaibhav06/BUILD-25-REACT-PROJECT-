import PopupTest from "./popup-test";

export default function Popup({ id, header, body, footer,onClose }) {
  return (
    <div id={id || "Popup"} className="popup">
      <div className="model-content">
        <div className="header">
          <span onClick={onClose}className="close-model-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">Coustomized body</div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
