
const Skills = () => {
    return (
        <section className="skills">
            <div id="skills-heading" className="section-header">
                <h1 className="section-title">My Technical Skills</h1>
                <p className="section-subtitle">
                    A comprehensive display of my technical expertise.
                </p>
            </div>
            <section className="skills-section">
                <div className="skills-grid">
                    {/* Backend */}
                    <div className="skill-card">
                        <h3><i className="fas fa-server"></i> Backend Development</h3>
                        <p>Building robust server-side applications and APIs with modern technologies.</p>
                        <div className="skill-icons">
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                                </div>
                                <span>Node.js</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="/media/express.svg" alt="Express" />
                                </div>
                                <span>Express</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                </div>
                                <span>JavaScript</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                                </div>
                                <span>PHP</span>
                            </div>
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="skill-card">
                        <h3><i className="fas fa-laptop-code"></i> Frontend Development</h3>
                        <p>Crafting responsive and interactive user interfaces for the web.</p>
                        <div className="skill-icons">
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                                </div>
                                <span>HTML5</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                                </div>
                                <span>CSS3</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                </div>
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="skill-card">
                        <h3><i className="fas fa-database"></i> Database Management</h3>
                        <p>Experience with both SQL and NoSQL databases for scalable data storage.</p>
                        <div className="skill-icons">
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                                </div>
                                <span>MySQL</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                                </div>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>

                    {/* WordPress */}
                    <div className="skill-card">
                        <h3><i className="fab fa-wordpress"></i> WordPress Theme Development</h3>
                        <p>Custom WordPress themes from scratch to advanced, using PHP and best practices.</p>
                        <div className="skill-icons">
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="/media/wordpress.svg" alt="WordPress" />
                                </div>
                                <span>WordPress</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                                </div>
                                <span>PHP</span>
                            </div>
                        </div>
                    </div>

                    {/* also fimilar with */}
                    <div className="skill-card">
                        <h3><i className="fas fa-paint-brush"></i> Also Fimilar With</h3>
                        <p>I&apos;m not expert on these but I can work with these.</p>
                        <div className="skill-icons">
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                                </div>
                                <span>Figma</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="https://cdn.simpleicons.org/canva/00C4CC" alt="Canva" />
                                </div>
                                <span>Canva</span>
                            </div>
                            <div className="icon-label">
                                <div className="icon-wrapper">
                                    <img src="/media/photoshop.svg" alt="Photoshop" />
                                </div>
                                <span>Photoshop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Skills;