import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";

const BlogDetail = () => {
    const location = useLocation();
    console.log(location.pathname.split('/'));

    const [post, setPost] = useState(undefined);
    const { id } = useParams();

    const postNumber = location.pathname.split('/')[2];

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`)
            .then((json) => {
                setPost(json.data);
            })
            .catch((error) => {
                console.log('post Detail get Error', error);
                setPost(null);
            })
    }, []);

    return (
        <div>
            BlogDetail
            {
                post === undefined ?
                    <div>로딩중...</div> : post === null ?
                    <div>404</div> : <div>{post.title}</div>
            }

        </div>
    );
};

export default BlogDetail;
