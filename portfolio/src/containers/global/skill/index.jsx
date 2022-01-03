import { Progress } from "reactstrap";

const SkillContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <div
                    className="skills-wrapper section-padding wow fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="1.5s"
                >
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="section-title-2">
                                <h2 className="title">Skills</h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div
                                className="skill-bar-wrapper"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="single-skills-bar">
                                    <h4> Since beginning my tech journey 4 years ago (initially a geology major), I taught myself how to use JavaScript, React, React-Native, MERN stack, and more libraries/frameworks.
                                        I&apos;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
                                        <br />
                                        <br />
                                        I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small to large
                                        web apps, features, animations, and coding interactive layouts.
                                        <br />
                                        <br />
                                        Visit my <a href="https://www.linkedin.com/in/ryan-o-donnell-18aa4a21b/">LinkedIn</a> or just <a href="/contact">contact</a> me.
                                    </h4>
                                    <br />
                                    <br />
                                    <span className="title">Web Development (MERN Stack, Next.js, JavaScript)</span>
                                    <br />
                                    <span className="title">App Development (React-Native)</span>
                                    <br />
                                    <span className="title">SEO (Optimization, Integration, Research)</span>
                                    <br />
                                    <span className="title">Branding</span>
                                    <br />
                                    <span className="title"></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillContainer;
