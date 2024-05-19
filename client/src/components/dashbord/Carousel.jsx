import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = ({ images }) => {
  return (
    <Carousel autoPlay showArrows infiniteLoop>
      {images.map((image, index) => {
        const url = image.url.split("\\");
        let validUrl = url[1];
        validUrl = `http://localhost:5173/uploads/${validUrl}`;
        return (
          <div className="border-logo rounded-sm" key={index}>
            <img src={validUrl} alt={`slide ${index}`} />
          </div>
        );
      })}
    </Carousel>
  );
};
MyCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MyCarousel;
