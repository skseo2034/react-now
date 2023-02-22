// import { data } from '../../database/data';
import './HomePage.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import {useEffect, useState} from "react";


const HomePage = () => {
    // console.log(data);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getData = async () => {
        console.log('getData() execute');
        const response = await fetch('https://test.api.weniv.co.kr/mall').then(res => res.json());
        return response;
    }

    useEffect(() => {
       /* const getData = async () => {
            console.log('getData() execute');
            try {
            const res = await fetch('https://test.api.weniv.co.kr/mall');
            const result = await res.json();
            setItems(result);
            setIsLoaded(true);
            } catch (error) {
                setIsLoaded(true); // load 는 되었는데, 에러가 난것임.
                setError(error);
            }
        }
        getData();*/
        getData().then(res => {
            setItems(res);
            setIsLoaded(true);
        }).catch((error) => {
            setIsLoaded(true);
            setError(error);
        });

    }, []);

    if (error) {
        return <div>에러입니다! {error.message}</div> // 이 에러는 개발자만 보면됨. 사용자가 볼 필요 없음. 배포전 삭제!!
    } else if (!isLoaded) {
        return <div>로딩중!</div>
    } else {
        return (
            <main className="product">
                <ul className='product-list'>
                    {items.map(item =>
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
    }


};

export default HomePage;
