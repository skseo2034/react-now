import './HomePage.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import {useContext, useEffect, useState} from "react";
import {ProductInfo} from "../../context/context";

const ProductItems = () => {
    const products = useContext(ProductInfo); // export const ProductInfo = createContext({products:[]});
    return (
        <>
            {
                products.products.map(item =>
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        productName={item.productName}
                        price={item.price}
                        thumbnailImg={item.thumbnailImg}

                    />
                )
            }
        </>
    )
}

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const fetchAPI = async () => {
        const res = await fetch('https://test.api.weniv.co.kr/mall');
        const result = await res.json();
        console.log(result[0]);
        return result;
    }
    useEffect(() => {

        // fetchAPI();
        fetchAPI().then(res => {
            setProducts(res);
        }).catch((error) => {
            console.log('error 발생');
        });
    }, []);
    return (
        <ProductInfo.Provider value={{products:products}}>
            <main className="product">
                <ul className='product-list'>
                    <ProductItems />
                </ul>
                <a className='link-btn cart-link' href="#"></a>
            </main>
        </ProductInfo.Provider>
    );



};

export default HomePage;
