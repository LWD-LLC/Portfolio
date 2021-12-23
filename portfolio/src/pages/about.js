import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutBannerContainer from "../containers/about/about-banner-container";
import BrandTwoContainer from "../containers/global/brand-two";
import SkillContainer from "../containers/global/skill";
import SkillContainer2 from "../containers/global/skill/skillContainer2";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ryan O'Donnell - About" />
                <div className="main-wrapper">
                    <Header />
                    <AboutBannerContainer />
                    <BrandTwoContainer />
                    <SkillContainer />
                    <SkillContainer2 />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
