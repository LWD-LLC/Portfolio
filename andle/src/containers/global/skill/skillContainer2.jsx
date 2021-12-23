import { Progress } from "reactstrap";
import clip from '../../../components/videos/Skiing.mp4'

const SkillContainer2 = () => {
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
                                <h2 className="title">Hobbies and Background</h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div
                                className="skill-bar-wrapper"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="single-skills-bar">
                                    <h4> Aside from my passion for technology, I am a huge golfer and love: skiing, entrepreneurship,
                                        learning, and watching Shark Tank. I&apos;m a family man and love being with my friends and having a good time.
                                        <br />
                                        <br />
                                        I served a six year contract in the United States Army National Guard as a 15P Aviation Operations Specialist. I&apos;ve been
                                        around the world twice, speak german (listen better than speak), and worked in the oilfield for 2 years.
                                        <br />
                                        <br />
                                        I&apos;m a huge advocate for empowering others with ADHD, and teaching them to use their skills to create unique
                                        solutions to better the world. I will be starting a YouTube about ADHD and technology soon. I believe that it is 
                                        a great solution for those that can&apos;t sit still and do repetative tasks. 
                                        <br />
                                        <br />
                                        To me, coding is my vise and savior, it has turned my life around for the better. Days go by as fast as can be because when I&apos;m
                                        coding, I&apos;m happy. 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Video'>
                    <video id='background-video' autoPlay loop muted playsInline>
                        <source src={clip} type='video/mp4' />
                        <source src={clip} type='video/ogg' />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default SkillContainer2;
