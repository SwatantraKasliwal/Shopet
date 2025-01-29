import React from "react";
import { Carousel } from "antd";

function MyCaro() {
  const contentStyle = {
    height: "400px", // Increased height for better visibility
    width: "100%", // Full width for responsiveness
    margin: "0 auto", // Center the carousel
    objectFit: "cover", // Better image fitting
    position: "relative",
    borderRadius: "20px",
  };

  const carouselContainerStyle = {
    maxWidth: "800px", // Maximum width of the carousel
    margin: "0 auto", // Center the container
    padding: "20px", // Add some padding
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
    borderRadius:"20px",
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel autoplay>
        <div>
          <img
            src="https://media.istockphoto.com/photos/young-woman-with-her-pets-picture-id183136431?k=6&m=183136431&s=170667a&w=0&h=YJbib_RLR7IfIRTstLFyTMkbb-nJbQHdwJbcnlD8aTg="
            alt="Woman with pets"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://cff2.earth.com/uploads/2019/07/08191128/The-personalities-of-animal-owners-are-reflected-in-their-pets.jpg"
            alt="Pet personalities"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.thesprucepets.com/thmb/IvkZpC67jvr8ss2MpIA8U6l2DBM=/673x467/filters:no_upscale():strip_icc()/GettyImages-1344938288-cce8e5edd33747e0864df0a76bbc6986.jpg"
            alt="Happy pets"
            style={contentStyle}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCaro;
