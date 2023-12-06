import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function RenderTeamMember({ name, role, description, imageSrc }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="col-lg-3 col-md-3 d-flex align-items-stretch">
      <div className="member">
        <LazyLoadImage
          src={imageSrc}
          alt=""
          effect="blur"
          className="image-fluid"
        />
        <h4>{name}</h4>
        <h6>{role}</h6>
        <p>
          {showFullDescription ? description : `${description.slice(0, 55)}...`}
        </p>
        <p onClick={toggleDescription} className="read-more">
          {showFullDescription ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  );
}

export default RenderTeamMember;
