import React from 'react';
import { data } from '../../database/data';
import './HomePage.css';
import ProductCard from "../../components/ProductCard/ProductCard";


const HomePage = () => {
    console.log(data);
    return (
        <main className="product">
            <ul className='product-list'>
                {data.map(item =>
                    <ProductCard
                        key={item.id}
                        productName = {item.productName}
                        price = {item.price}
                        thumbnailImg = {item.thumbnailImg}
                    />
                )}
            </ul>
            <a className='link-btn cart-link' href="#"></a>
        </main>
    );
};

export default HomePage;
