import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import './productCard.css';
import {useRef} from "react";

const ProductCard = (props) => {
    console.log('ProductCard >>> ', props);
    const { price, thumbnailImg, productName } = props;
    const likeBtn = useRef();

    function handleLikeClick(e) {
       // console.log(e);
       // console.log(e.currentTarget.classList);
        e.currentTarget.classList.toggle('on');
    }

    return (
        <div>
            <li className='product-item'>
                <div className='product-img'>
                    <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
                </div>
                <ProductName productName={productName} />
                <button ref={likeBtn} onClick={handleLikeClick} className='like-btn'></button>
                <div className='product-price'>
                    <ProductPrice price={price} />
                </div>
            </li>
        </div>
    );
};

export default ProductCard;
