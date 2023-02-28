import React from 'react';
import {Link} from "react-router-dom";
import imgProfile from '../../../assets/profile.jpg';
import imgWriteButton from '../../../assets/icon-modify-white.svg';
import imgLogout from '../../../assets/icon-logout.svg';
import './login.css';

const Login = () => {
    return (
        <>
            <li className="profile-img">
                <Link to="#">
                    <img src={imgProfile} alt="My Page"/>
                </Link>
            </li>
            <li>
                <Link to="#" className="button">
                    <img src={imgWriteButton} alt=""/>
                    <span>Write</span>
                </Link>
            </li>
            <li>
                <button className="button white">
                    <img src={imgLogout} alt=""/>
                    <span>Logout</span>
                </button>
            </li>
        </>
    );
};

export default Login;
