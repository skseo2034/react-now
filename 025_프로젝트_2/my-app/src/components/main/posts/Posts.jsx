import React from 'react';
import {Link} from "react-router-dom";
import Category from "./category/Category";
import Author from "./author/Author";

const Posts = (props) => {
    const {posts} = props;

    return (
        <ul className="posts">
            {
                posts.map(post =>
                    (
                        <li>
                            <Link to="post-view.html" className="post">
                                <article>
                                    <img src={'http://test.api.weniv.co.kr/' + post.thumbnailImg} alt=""/>
                                    <div className="contents-wrap">
                                        <Category categories={post.category}/>
                                        <h3>{post.title}</h3>
                                        <Author profileImg={post.profileImg}/>
                                        <p className="post-description">
                                            {post.contents.text}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        </li>
                    )
                )
            }
        </ul>
    );
};

export default Posts;
