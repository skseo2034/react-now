import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import '../../style/style.css';
import './productDetail.css';

const initialProduct = {
    id: '',
    productName: '',
    price: 0,
    stockCount: 0,
    thumbnailImg: '',
    option: [],
    discountRate: 0,
    shippingFee: 0,
    detailInfoImage: [],
    viewCount: 0,
    pubDate: '',
    modDate: ''
}

const ProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(initialProduct);

    const getProduct = async () => {
       const response = await fetch('https://test.api.weniv.co.kr/mall/' + id).then(res => res.json());
       return response;
    }

    useEffect(() => {

        // fetchAPI();
        getProduct().then(res => {
            console.log('aaa', res);
            setProduct(res);
        }).catch((error) => {
            console.log('error 발생');
        });
    }, []);

    const goHome = () => {
        navigate("/");
    }

    return (
        <>
            <div className="modal" style={{display:"flex"}}>
                <div className='product-img'>
                    <ProductImage thumbnailImg={product.thumbnailImg} productName={product.productName} />
                    <ProductName productName={product.productName} />
                    <ProductPrice price={product.price} />
                </div>
                <div className='product-name'>
                    <ProductName productName={product.productName} />
                </div>
                <div className='product-price'>
                    <ProductPrice price={product.price} />
                </div>
            </div>
            <button onClick={goHome}>Close</button>
        </>
    );
};

export default ProductDetail;
