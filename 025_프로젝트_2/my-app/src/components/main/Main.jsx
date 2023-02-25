import React from 'react';
import About from "./about/About";
import Posts from "./posts/Posts";

const Main = (props) => {
    const { posts } = props;
    return (
        <main>
            <div className='max-width'>
                <h2 className="a11y-hidden">Post</h2>
                <Posts posts={posts}/>
                <About />
            </div>
        </main>
    );
};

export default Main;
