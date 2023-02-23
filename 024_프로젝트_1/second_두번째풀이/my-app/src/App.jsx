import HomePage from "./pages/HomePage/HomePage";
import './reset.css';
import './app.css';
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
     return (
         <HomePage />
       /* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />


            {/!*<Route path="/saveForm" element={<SaveForm />} />
            <Route path="/book/:id" element={<Detail />} />
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/joinForm" element={<JoinForm />} />
            <Route path="/updateForm/:id" element={<UpdateForm />} />*!/}
            {/!* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 *!/}
            {/!*<Route path="*" element={<NotFound />}></Route>*!/}
            <Route path="*" element={<div>일치하는 페이지가 없습니다.</div>} />
        </Routes>*/
    );
}

export default App;