import React from "react";

const Gallery = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-milkbottles.jpg"
        alt="milk bottles"
      />
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-orange.jpg"
        alt="orange"
      />
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-cone.jpg"
        alt="empty icecream cone"
      />

      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-sugarcubes.jpg"
        alt="sugar cubes"
      />
    </div>
  );
};

export default Gallery;
