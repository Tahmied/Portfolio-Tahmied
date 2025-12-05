
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
                                <h3 className="experience-title !text-[#4fc3f7]"><i className="fas fa-code !text-[#4fc3f7]"></i> Web Developer</h3>
                                <span className="experience-period">Oct 2025 - Present</span>
                            </div>
                            <h4 className="experience-company"><i className="fas fa-building"></i> SatisfyHost</h4>
                            <p className="experience-description">
                                I’m responsible for building custom web applications such as their support system, hosting client area, and live
                                chat platform. I develop and maintain company websites with a strong focus on functionality and user
                                experience, while also providing technical hosting support and troubleshooting. My work covers full-stack
                                development using Next.js, the MERN stack and very basic PHP, along with hands-on server management.

                            </p>
                            <div className="experience-skills">
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Nodjes, Express, React, NextJs </span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Wordpress, PHP</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> cPanel, WHMCS, Apache & Nginx basics</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Domain & DNS Management</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> VPS Deployment</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-item animated delay-1">
                        <div className="timeline-content">
                            <div className="experience-header">
                                <h3 className="experience-title"><i className="fas fa-laptop-code"></i> Customer Support Executive</h3>
                                <span className="experience-period">2023 - 2025</span>
                            </div>
                            <h4 className="experience-company"><i className="fas fa-building"></i> Amarhoster </h4>
                            <p className="experience-description">
                                At Amarhoster, I managed web servers, resolved customer website issues, and built custom technical solutions.
                                I also created technology-focused tutorials for their YouTube channel. My work covered full-stack development,
                                server management, custom WordPress theme development (With the Help of AI), and basic video editing,
                                content writing, marketing, and social media graphics design.
                            </p>
                            <div className="experience-skills"> <span className="skill-tag"><i className="fas fa-check-circle"></i> Wordpress, PHP</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> cPanel, WHM, WHMCS, Apache, Nginx basics</span>
                                <span className="skill-tag"><i className="fas fa-check-circle"></i> Domain & DNS + Server Management</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;