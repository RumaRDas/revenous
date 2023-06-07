import React from "react";
import "./business.css";
import Pizza from "../../assets/pizza.jpg";
function Business() {
  const business = {
    imageSrc: Pizza,
    name: "Pizzeria",
    address: "1010 Paddington way",
    city: "Flavortown",
    state: "NY",
    ZipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };
  return (
    <div className="business">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="business-information-container">
        <div className="business-address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.ZipCode}
          </p>
        </div>
        <div className="business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
