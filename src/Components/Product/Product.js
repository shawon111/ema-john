import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-star-ratings';
const Product = (props) => {
    const {name, img, price, seller, star, stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div className="product-thumb">
                <img src={img} alt="" />
            </div>
           <div className="product-info">
                <h4 className="product-title">{name}</h4>
                <div className="detail">
                    <div className="basic-detail">
                        <p className="seller"><small>by: {seller}</small></p>
                        <h3 className="product-price">$<span>{price}</span></h3>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddToCart(props.product)} className="purchase-btn">{cartIcon}add to cart</button>
                    </div>
                    <div className="rating">
                        <Rating emptySymbol="far fa-star"
                         fullSymbol="fas fa-star"/>
                        
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Product;