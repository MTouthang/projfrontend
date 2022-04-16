import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cardHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addtoCard = true,
  removeFromCart = false,
  setReload = (f) => f, // function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Photo not available";
  const cartDescription = product
    ? product.description
    : "description not available";
  const cartPrice = product ? product.price : "Price not available";

  const addToCard = () => {
    addItemToCart(product, () => {
      setRedirect(true);
    });
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const showAddToCard = (addtoCard) => {
    return (
      addtoCard && (
        <button
          onClick={addToCard}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCard = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />

        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCard(addtoCard)}</div>
          <div className="col-12">{showRemoveFromCard(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
