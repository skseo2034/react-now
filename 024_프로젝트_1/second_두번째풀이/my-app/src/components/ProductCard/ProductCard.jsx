import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import './productCard.css';
import {useRef} from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import {Link, Outlet, useLocation} from "react-router-dom";

const ProductCard = (props) => {
    const location = useLocation();
    console.log('ProductCard >>> ', props);
    const { id, price, thumbnailImg, productName } = props;
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

               {/* <Link to={'/product/' + id} className="btn btn-primary">
                    <ProductName productName={productName} />
                </Link>*/}
                <Link to={'/product/' + id} state={{ background: location }}>
                    <ProductName productName={productName} />
                </Link>
                <button ref={likeBtn} onClick={handleLikeClick} className='like-btn'></button>
                <div className='product-price'>
                    <ProductPrice price={price} />
                </div>
            </li>
        </div>
    );
};

export default ProductCard;
