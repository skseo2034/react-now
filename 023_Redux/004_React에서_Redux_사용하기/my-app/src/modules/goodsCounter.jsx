import React from 'react';

// 액션생성 함수
export const addNumber = () => {
    return { type: 'ADD'}
}

export const subtractNumber = () => {
    return { type: 'SUBTRACT'}
}

// 초기값
const initialState = {
    stock: 10, // 재고
    goods: 0 // 구매한 갯수
}

const goodsReducer = (state = initialState, action) => {
    console.log(action);
    console.log(action.type);
    console.log(state);

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                stock: state.stock - 1,
                goods: state.goods + 1
            }
        case 'SUBTRACT':
            return {
                ...state,
                stock: state.stock + 1,
                goods: state.goods - 1
            }
        default:
            return state;
    }
}

export default goodsReducer;
