// import { data } from '../../database/data';
import './HomePage.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import {useContext, useEffect, useState} from "react";
import {Data} from "../../database/data";


const HomePage = () => {
    // console.log(data);
    const [loadData, setLoadData] = useState(null);

    useEffect(() => {
       console.log('로딩중');
    }, []);

    useEffect(() => {
        if (loadData == null) {
            return;
        }

        console.log('로딩완료');
        console.log(loadData);
    }, [loadData]);

    useContext(Data).then(d => {
        setLoadData(d);
    });

    useContext(Data).then(d => {
        console.log('데이터 세팅');
        setLoadData(d);
    }).catch((error) => {
        alert('에러입니다' + error.message);
    });

    return (
        <main className="product">
            <ul className='product-list'>
                {loadData !== null ?
                    loadData.map(item =>
                        <ProductCard
                            key={item.id}
                            productName = {item.productName}
                            price = {item.price}
                            thumbnailImg = {item.thumbnailImg}
                        />
                    ) : <h2>로딩 중입니다!</h2>
                }
                {}
            </ul>
            <a className='link-btn cart-link' href="#"></a>
        </main>
    );



};

export default HomePage;
