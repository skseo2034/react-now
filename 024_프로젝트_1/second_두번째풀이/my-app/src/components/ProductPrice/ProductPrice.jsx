import './productPrice.css';

const ProductPrice = (porps) => {
    const { price } = porps;
    return (
        <strong className='price m-price'>{price}<span>원</span></strong>
    );
};

export default ProductPrice;
