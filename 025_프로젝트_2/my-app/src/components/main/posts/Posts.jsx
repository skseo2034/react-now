import './posts.css';
import Post from "./post/Post";

const Posts = (props) => {
    const { posts } = props;
    console.log('Posts.jsx >>> ', posts);
    return (
        <>
           { posts.map(post =>
               <Post post={post} key={post.id}/>
            )}
        </>
    );
};

export default Posts;
