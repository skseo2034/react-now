import React, {useEffect, useState} from 'react';
import axios from "axios";
import './banner.css';

const Banner = () => {
    const [bannerContents, setBannerContents] = useState(undefined);

    useEffect(() => {
        axios.get("http://localhost:3001/blog")
            .then((response) => {
                setBannerContents(response.data);
            })
            .catch((error) => {
                console.log(error);
                setBannerContents(null);
            })
    }, []);


    return (
        <div>
            {
                bannerContents === undefined ?
                    <div>로팅중..</div> : bannerContents === null ?
                    <div>noData</div> : (
                        <div className="banner">
                            <div className="max-width">
                                <div className="banner-contents">
                                    <p className="sub-text">{bannerContents.subTitle}</p>
                                    <p className="main-text">{bannerContents.mainTitle}</p>
                                    <p className="description">{bannerContents.description}</p>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>

    );
};

export default Banner;
