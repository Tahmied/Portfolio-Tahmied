
const Experience = () => {
    return (

        <section className="experience-section">
            <div className="content">
                <div className="section-header">
                    <h1 className="section-title">My Journey</h1>
                    <p className="section-subtitle">
                        A timeline of my professional development, key projects, and the
                        technologies I&apos;ve mastered along the way.
                    </p>
                </div>

                <div className="experience-container">
                    {/* Experience 1 */}
                    <div className="experience-item animated">

                        <div className="timeline-content">
                            <div className="experience-header">
                                <h3 className="experience-title !text-[#4fc3f7]"><i className="fas fa-code !text-[#4fc3f7]"></i> Customer Support Executive</h3>
                                <span className="experience-period">2023 - 2025</span>
                            </div>
                            <h4 className="experience-company"><i className="fas fa-building"></i> Amarhoster Inc.</h4>
                            <p className="experience-description">
                                At Amarhoster, I resolved clients&apos; website and hosting issues, provided ongoing site support, and developed custom web solutions, including custom WordPress themes.
                            </p>
                            <div className="experience-skills">
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Nodjes, Express, HTML, CSS, JS </span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Wordpress, PHP</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> cPanel, WHMCS, Apache & Nginx basics</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Domain & DNS Management</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-item animated delay-1">
                        <div className="timeline-content">
                            <div className="experience-header">
                                <h3 className="experience-title"><i className="fas fa-laptop-code"></i> Full Stack Developer</h3>
                                <span className="experience-period">2020 - 2022</span>
                            </div>
                            <h4 className="experience-company"><i className="fas fa-building"></i> Hostovo </h4>
                            <p className="experience-description">
                                At Hostovo, I made custom websites using Node.js, Express, and MongoDB. I also created WordPress themes and custom web solutions for their sub‑brands.
                            </p>
                            <div className="experience-skills">
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Node.js</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> MongoDB</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Express</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> VPS Deployment</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience 3 */}
                    <div className="experience-item animated delay-2">
                        <div className="timeline-content">
                            <div className="experience-header">
                                <h3 className="experience-title"><i className="fas fa-graduation-cap"></i> Courses and Other Experiences</h3>
                                <span className="experience-period">2018 - 2022</span>
                            </div>
                            <h4 className="experience-company"><i className="fas fa-building"></i> FreeCodeCamp, ProgrammingHero, SoloLearn, W3Schools</h4>
                            <p className="experience-description">
                                I learned to build responsive websites using HTML, CSS, and JavaScript through W3Schools and YouTube tutorials. I studied React and modern frontend workflows using FreeCodeCamp and SoloLearn. Later, the Programming Hero course helped me revise my skills and learn backend development, guiding me to become a full-stack MERN developer by applying everything I had learned.
                            </p>
                            <div className="experience-skills">
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> HTML5, CSS3, JavaScript</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Nodejs, React, Express </span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> MongoDB </span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Git & Github </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;