const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div
                    className="about-images"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-images.png)`,
                    }}
                ></div>

                <div className="container">
                    <div
                        className="row justify-content-end"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h3 className="title">About My Company: Limitless</h3>
                                <p className="about-text">
                                    Founded in Pittsburgh, PA in 2020, Limitless Web Developers
                                    (Limitless) was one of Pittsburgh`s leading
                                    Web Development companies (#10 on Clutch) until unfortunate circumstances
                                    caused me to step away from the company
                                    <br /><br />
                                    <p>Now I am looking to join a team of disruptors and help build the future. I learned a ton while building limitless.
                                    </p>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
