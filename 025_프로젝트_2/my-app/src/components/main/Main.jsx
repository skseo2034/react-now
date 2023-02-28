import React, {useContext, useEffect, useState} from 'react';
import About from "./about/About";
import axios from "axios";
import {Link} from "react-router-dom";
import Category from "./posts/post/category/Category";
import Author from "./posts/post/author/Author";
import UserContext from "../../context/UserContext";
import './main.css';
import Posts from "./posts/Posts";

const Main = () => {
    const [posts, setPosts] = useState([]); // 이렇게 하면 최초에 undefined 이다. 그래서 오류가 날수 있다. [] 으로 초기화 해도 된다.
    const { isLogin } = useContext(UserContext);

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then((json) => {
                setPosts(json.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

   console.log('Main.jsx posts >>> ', posts);

    return (
        <main>
            <div className='max-width'>
                <h2 className="a11y-hidden">Post</h2>
                <ul className="posts">
                    <Posts posts={posts} />
                </ul>
                {
                    isLogin ? <About /> : <></>
                }

            </div>
        </main>

    );
};

export default Main;
