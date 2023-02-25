import React, {useEffect, useState} from 'react';
import './home.css';
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then((json) => {
               setPosts(json.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    console.log(posts);

    return (
        <div>
            Home
            {
                posts.map(post => <h2 key={post.id}>{post.title}</h2>)
            }
        </div>
    );
};

export default Home;
