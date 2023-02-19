import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sale, soldout} from "../modules/stockCounter";

const StockCounter = () => {
    // useSelector : store의 상태 조회 Hook
    const { stock, message } = useSelector(state => ({
        stock: state.goodsReducer.stock,
        message: state.stockReducer.message
    }));

    console.log('StockCounter', message, stock);

    // useDispatch : store의 dispatch를 함수 내부에서 사용할수 있는 Hook
    const dispatch = useDispatch();

    const onSale = () => dispatch(sale());
    const onSoldout = () => dispatch(soldout());

    useEffect(() => {
        if (stock <= 0) {
            onSoldout();
        } else {
            onSale();
        }
    }, [stock]);

    return (
        <div>
            <br/>
            <strong>{message}</strong>
        </div>

    );
};

export default StockCounter;
