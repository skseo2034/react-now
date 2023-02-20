import './productImage.css';

const ProductImage = (props) => {
    const {thumbnailImg, productName} = props;
    const imgUrl = 'http://test.api.weniv.co.kr/' + thumbnailImg;
    return (
        <img src={imgUrl} alt={productName} />
    );
};

export default ProductImage;
