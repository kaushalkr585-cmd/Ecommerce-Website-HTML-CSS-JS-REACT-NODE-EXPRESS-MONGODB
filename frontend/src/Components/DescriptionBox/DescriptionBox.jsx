import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the buying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where businesses and individuals can showcase their
          products, interact with customers, and conduct transactions without the
          need for a physical presence.
        </p>
        <p>
          E-commerce websites typically display products or services with detailed
          descriptions, images, prices, and available options such as sizes or
          colors. Each product usually has its own dedicated page that provides
          relevant information to help customers make informed purchasing decisions.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
