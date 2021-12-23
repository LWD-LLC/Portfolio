import ContactForm from "../../components/contact-form";

const ContactContainer = () => {
    return (
        <div className="section contact-section bg-dark">
            <div
                className="contact-bg"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-bg.jpg)`,
                }}
            ></div>

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="contact-section-wrapper">
                            <div className="contact-info" data-aos="fade-up">
                                <span className="mail">
                                    <a href="mailto:someone@example.com">
                                        ryan@limitlessdevs.com
                                    </a>
                                </span>
                                <span className="number">
                                    <a href="tel:+12345678900">
                                        +1 (412) 926 5012
                                    </a>
                                </span>
                            </div>

                            <div
                                className="contact-form"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <ContactForm />
                            </div>

                            <div
                                className="contact-social"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <ul>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="instagram"
                                            href="https://instagram.com/limitless_devs412//"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="behance"
                                            href="https://www.behance.net/"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="twitter"
                                            href="https://twitter.com/LimitlessDev412"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
