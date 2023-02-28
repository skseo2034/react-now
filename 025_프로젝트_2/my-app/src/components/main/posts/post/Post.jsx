import React from 'react';
import {Link} from "react-router-dom";
import Category from "./category/Category";
import Author from "./author/Author";
import './post.css';

const Post = (props) => {
    const { post } = props;
    return (
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
    );
};

export default Post;
