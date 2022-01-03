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
                                <h3 className="title">Limitless</h3>
                                <p className="about-text">
                                    Founded in Pittsburgh, PA in 2020, Limitless Web Developers
                                    (Limitless) has grown to
                                    become one of Pittsburgh`s leading
                                    Web Development companies (#10 on Clutch).
                                </p>
                                <p>
                                    We specialise in research-backed user experiences,
                                    user interface designs, and custom coded apps and sites
                                     <br /> <br />{" "}
                                    Our portfolio includes some of the newest disruptors and innovators
                                    in the nation including: Caddy Time
                                    golf, and many more. {" "}
                                </p>
                                <p>
                                    We love disruption and innovation.
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
