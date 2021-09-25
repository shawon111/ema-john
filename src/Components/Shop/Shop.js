import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=> res.json())
        .then(data=> {
            setProducts(data);
            setDisplayProducts(data);
        })
    },[]);
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const searchHandler = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
       <div>
           <div className="search-box">
               <div className="search-field">
                    <input type="text" onChange={searchHandler} name="product-name" id="product-input" placeholder="type here to search"/>
                    <button id="search-btn">search</button>
               </div>
           </div>
            <div className="shop-container">
                <div className="product-container">
                    {displayProducts.map(product=> <Product 
                    product={product} 
                    key={product.key} 
                    handleAddToCart={handleAddToCart}>
                    </Product>)}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;