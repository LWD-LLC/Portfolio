import React from "react";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img src="/images/about-images-2.jpg" alt="Ryan O'Donnell" />
                </div>
            </div>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://twitter.com/LimitlessDev412"
                        icon="fab fa-twitter"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.facebook.com/ryan.odonnell.94043"
                        icon="fab fa-facebook-f"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.instagram.com/limitless_devs412/"
                        icon="fab fa-instagram"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AboutBannerContainer;
