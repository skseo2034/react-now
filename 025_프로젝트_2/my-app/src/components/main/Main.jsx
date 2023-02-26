import React, {useContext, useEffect, useState} from 'react';
import About from "./about/About";
import axios from "axios";
import {Link} from "react-router-dom";
import Category from "./posts/category/Category";
import Author from "./posts/author/Author";
import UserContext from "../../context/UserContext";

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
                    {
                        posts.map(post =>
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`} className="post">
                                    <article>
                                        <img src={post.thumbnail} alt=""/>
                                        <div className="contents-wrap">
                                            <Category categories={post.category}/>
                                            <h3>{post.title}</h3>
                                            <Author profileImg={post.profileImg} userName={post.userName} created={post.created}/>
                                            <p className="post-description">
                                                {post.contents.text}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        )
                    }
                </ul>
                {
                    isLogin ? <About /> : <></>
                }

            </div>
        </main>

    );
};

export default Main;
