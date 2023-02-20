import React from 'react';
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import './productCard.css';

const ProductCard = (props) => {
    console.log('ProductCard >>> ', props);
    const { price, thumbnailImg, productName } = props;
    return (
        <div>
            <li className='product-item'>
                <div className='product-img'>
                    <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
                </div>
                <ProductName productName={productName} />
                <button className='like-btn'></button>
                <div className='product-price'>
                    <ProductPrice price={price} />
                </div>
            </li>
        </div>
    );
};

export default ProductCard;
