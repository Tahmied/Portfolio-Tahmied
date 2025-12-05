
const Projects = () => {
    return (
        <>
            <div id="projects-header-title" className="section-header">
                <h1 className="section-title">Selected Projects</h1>
            </div>
            <section className="projects">
                {/* First project: 2fr 1fr */}
                <div className="projects-container">
                    <div id="large-project-container" className="project-item">
                        <div id="large-project-media2" className="project-media-container">
                            <div className="project-media">
                                <video loop autoPlay muted id="large-video2">
                                    <source src="/media/ProjectVideos/Royal kitchen .webm" type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="project-details">
                            <p className="project-company">premium.royal-kitchen.pl</p>
                            <p className="project-descriptions">
                                Figma to perfect front end with separate admin panel, sales panel lead gen tools
                            </p>
                        </div>
                    </div>
                    <div id="small-project-container" className="project-item">
                        <div id="small-project-media" className="project-media-container">
                            <video loop autoPlay muted id="horizontal-video">
                                <source src="/media/ProjectVideos/mobile-royal-kitchen.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="project-details">
                            <p className="project-company">Royal Kitchen</p>
                            <p className="project-descriptions">Also designed pc version layout for mobile</p>
                        </div>
                    </div>
                </div>

                {/* Second project: 1fr 2fr */}
                <div className="projects-container">
                    <div id="small-project-container2" className="project-item">
                        <div id="small-project-media2" className="project-media-container">
                            <video loop autoPlay muted id="horizontal-video2">
                                <source src="/media/ProjectVideos/mobile gimbals insider.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="project-details">
                            <p className="project-company">Gimbals Insider</p>
                            <p className="project-descriptions">Responsive Custom wordpress theme</p>
                        </div>
                    </div>
                    <div id="large-project-container2" className="project-item">
                        <div id="large-project-media2" className="project-media-container">
                            <div className="project-media">
                                <video loop autoPlay muted id="large-video2">
                                    <source src="/media/ProjectVideos/gimbals insider.webm" type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="project-details">
                            <p className="project-company">Gimbals Insider</p>
                            <p className="project-descriptions">Custom wordpress theme built to run without any plugin</p>
                        </div>
                    </div>
                </div>

                {/* Third project: 2fr 1fr */}
                <div className="projects-container">
                    <div id="large-project-container3" className="project-item">
                        <div id="large-project-media2" className="project-media-container">
                            <div className="project-media">
                                <video loop autoPlay muted id="large-video">
                                    <source src="/media/ProjectVideos/AI hospital.webm" type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="project-details">
                            <p className="project-company">Ai Hospital</p>
                            <p className="project-descriptions">
                                The Front end of of AI Hospital
                            </p>
                        </div>
                    </div>
                    <div id="small-project-container3" className="project-item">
                        <div id="small-project-media3" className="project-media-container">
                            <video loop autoPlay muted id="horizontal-video3" src="/media/locker-prototype.mp4"></video>
                        </div>
                        <div className="project-details">
                            <p className="project-company">Interest</p>
                            <p className="project-descriptions">Created My own version of pinterest</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Projects;