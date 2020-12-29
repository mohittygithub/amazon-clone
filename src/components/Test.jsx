import React from "react";
import "../App.css";
import { products } from "../data/products";
import { connect } from "react-redux";
import { addToCart } from "../redux/actionTypes";

const Test = (props) => {
  return (
    <div className="test">
      <div className="card col-4 text-center">
        <div className="card-header">
          <h2>{products.hats.productName}</h2>
        </div>
        <div className="card-body">
          <img
            src={products.hats.image}
            alt="hat"
            style={{ width: "200px", height: "150px" }}
          />
          <p>Size: {products.hats.size}</p>
          <p>Price: ${products.hats.price}</p>
          <button
            className="btn btn-success"
            onClick={() => props.dispatch(addToCart())}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="card col-4 text-center">
        <div className="card-header">
          <h2>{products.shoes.productName}</h2>
        </div>
        <div className="card-body">
          <img
            src={products.shoes.image}
            alt="hat"
            style={{ width: "200px", height: "150px" }}
          />
          <p>Size: {products.shoes.size[0]}</p>
          <p>Price: ${products.shoes.price}</p>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default connect()(Test);
