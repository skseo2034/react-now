import './productName.css';

const ProductName = (props) => {
    const { productName } = props;
    return (
        <strong className='product-name sl-ellipsis' >{productName}</strong>
    );
};

export default ProductName;
