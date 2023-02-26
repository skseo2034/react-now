import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import data from './database/data.json';
import {useState} from "react";
import UserContext from "./context/UserContext";

function App() {
    // console.log(data);
    const [userId, setUserId] = useState(1);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <UserContext.Provider value={{userId, isLogin}}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/blog/:id"
                        element={<BlogDetail />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>

    );
}

export default App;