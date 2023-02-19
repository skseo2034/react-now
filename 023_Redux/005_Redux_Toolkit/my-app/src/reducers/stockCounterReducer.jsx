import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message: '판매중!!'
}

const stockCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        sale: (state) => {
            state.message = '판매중!!';
        },
        soldout: (state) => {
           state.message = '완판!!';
        }
    }
});

console.log(stockCounterSlice);

export { stockCounterSlice };

export const { sale, soldout } = stockCounterSlice.actions;
export default stockCounterSlice.reducer;