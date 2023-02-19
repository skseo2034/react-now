import { createStore } from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// 리덕스 적용

// 3. dispatch를 사용하여 reducer에게 action을 넘겨줄 함수 생성
// Action
const addNumber = () => {
    store.dispatch({ type: "ADD" });
}

// Action
const subtractNumber = () => {
    store.dispatch({ type: "SUBTRACT" });
}

// 2. reducer 함수 만들기
const countReducer = (state = 0, action) => { // state 초기화
  switch (action.type) {  // switch문
    case "ADD":
      minus.disabled = false;
      return state + 1;
    case "SUBTRACT":
      plus.disabled = false;
      return state - 1;
    default:
      return state;
  }
};

// 1. store 생성
const store = createStore(countReducer);

// 4. subscribe를 사용하여 state의 변화가 감지될 때마다 UI를 업데이트 시켜줄 함수를 만듭니다.

const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
};

// Update UI
store.subscribe(handleWrite);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", subtractNumber);