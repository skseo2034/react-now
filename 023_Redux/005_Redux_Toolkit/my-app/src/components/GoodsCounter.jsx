import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../reducers/goodsCounterReducer";

const GoodsCounter = () => {
    // useSelector : store의 상태 조회 Hook
    const { stock, goods, message } = useSelector(state => ({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods
    }));

    console.log('GoodsCounter', stock, goods);

    // useDispatch : store의 dispatch를 함수 내부에서 사용할수 있는 Hook
    const dispatch = useDispatch();

    const onAddNumber = () => {
        if (stock == 0) {
            return;
        }
        dispatch(increment());
    }

    const onSubstractNumber = () => {
        if (goods == 0) {
            return;
        }
        dispatch(decrement());
    }



    return (
        <div>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type="button" onClick={onSubstractNumber}>MINUS</button>
                <span> {goods} </span>
                <button onClick={onAddNumber}>PLUS</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div>
    );
};

export default GoodsCounter;
