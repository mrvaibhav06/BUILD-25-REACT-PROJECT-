import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }

  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured !</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      <span className="current-image">
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlider === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
      </span>
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlider === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
