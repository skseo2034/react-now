import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import imgFacebook from '../../../assets/Facebook.svg';
import imgTwitter from '../../../assets/Twitter.svg';
import imgInstagram from '../../../assets/Instagram.svg';
import imgGitHub from '../../../assets/Github.svg';
import './about.css';
import UserContext from "../../../context/UserContext";
import axios from "axios";


const About = () => {
    const { userId } = useContext(UserContext);
    const [userData, setUserData] = useState();
    // console.log('About.jsx userId >>> ', userId);

    const snsImage = {
        imgFacebook,
        imgTwitter,
        imgInstagram,
        imgGitHub
    }

    useEffect(() => {
        console.log('About userEffect');
        axios.get(`http://localhost:3001/users/${userId}`)
            .then((res) => {

                setUserData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    console.log('About.jsx userData >>> ', userData);
    return (
        <>
            {
                userData !== undefined ? (
                    <aside className="about">
                        <h2>About Me</h2>
                        <img src={userData.profileImg} alt="" className="user-profile"/>
                        <p className="user-name">{userData.name}</p>
                        <p className="user-description">{userData.info}</p>
                        <h3>Categories</h3>
                        <ul className="categories">
                            {
                                userData.category.map((c, index) =>
                                    <li key={index}><Link to="#">{c}</Link></li>
                                )
                            }
                        </ul>
                        <h3>Follow</h3>
                        <ul className="sns">
                            {
                                Object.keys(userData.sns).map((s, index) =>
                                    <li key={index}><Link to={userData.sns.s}><img src={snsImage['img' + s]} alt="{s}"/></Link></li>
                                )
                            }
                        </ul>
                    </aside>
                ) : <></>
            }

        </>

    );
};

export default About;
