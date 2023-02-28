import React, {useEffect, useState} from 'react';
import './home.css';
import axios from "axios";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Main />
            <Footer />
            {/* posts.map(post => <h2 key={post.id}>{post.title}</h2>)*/}
        </>
    );
};

export default Home;
