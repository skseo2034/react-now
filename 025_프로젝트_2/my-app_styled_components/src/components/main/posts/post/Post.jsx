import React from 'react';
import {Link} from "react-router-dom";
import Category from "./category/Category";
import Author from "./author/Author";
// import './post.css';
import {ContentsWrap, PostDescription, PostH3, PostImg, PostLink} from "./PostStyle";

const Post = (props) => {
    const { post } = props;
    return (
        <li key={post.id}>
            <PostLink to={`/post/${post.id}`}>
                <article>
                    <PostImg src={post.thumbnail} alt=""/>
                    <ContentsWrap>
                        <Category categories={post.category}/>
                        <PostH3>{post.title}</PostH3>
                        <Author profileImg={post.profileImg} userName={post.userName} created={post.created}/>
                        <PostDescription>
                            {post.contents.text}
                        </PostDescription>
                    </ContentsWrap>
                </article>
            </PostLink>
        </li>
    );
};

export default Post;
