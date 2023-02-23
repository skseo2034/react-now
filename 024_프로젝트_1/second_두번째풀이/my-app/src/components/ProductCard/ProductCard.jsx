import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import './productCard.css';
import {useRef, useState} from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import {Link, Outlet, useLocation} from "react-router-dom";
import Modal from 'react-modal';

const ProductCard = (props) => {
    const location = useLocation();
    console.log('ProductCard >>> ', props);
    const { id, price, thumbnailImg, productName } = props;
    const likeBtn = useRef();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleLikeClick(e) {
       // console.log(e);
       // console.log(e.currentTarget.classList);
        e.currentTarget.classList.toggle('on');
    }

    const viewDetail = () => {
        setModalIsOpen(true);
    }

    const closeFoodModal = () => {
        setModalIsOpen(false);
    }
    return (
        <div>
            <li className='product-item'>

                <div className='product-img' onClick={viewDetail}>
                    <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
                </div>

               {/* <Link to={'/product/' + id} className="btn btn-primary">
                    <ProductName productName={productName} />
                </Link>*/}

                <ProductName productName={productName} />

                <button ref={likeBtn} onClick={handleLikeClick} className='like-btn'></button>
                <div className='product-price'>
                    <ProductPrice price={price} />
                </div>
                {/*<Modal modalIsOpen={true}>
                    <ProductDetail id={id} />
                    <button onClick={()=> setModalIsOpen(false)}>Modal Close</button>
                </Modal>*/}
                {/*<button onClick={()=> setModalIsOpen(true)}>Modal Open</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <ProductDetail id={id} />
                    <button onClick={()=> setModalIsOpen(false)}>Modal Open</button>
                </Modal>*/}
                <Modal isOpen={modalIsOpen}
                       /*onRequestClose={() => setModalIsOpen(false)}*/
                       onRequestClose={closeFoodModal}
                       ariaHideApp={false}
                       className="modal"
                       overlayClassName="overlay"
                       contentLabel="Modal">
                    <ProductDetail id={id} closeModal={closeFoodModal}/>
                </Modal>
            </li>
        </div>
    );
};

export default ProductCard;
