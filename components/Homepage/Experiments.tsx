
const Experiments = () => {
    return (
        <section className="experiments">
            <div id="experiments-header" className="section-header">
                <h1 className="section-title">Experiments</h1>
                <p className="section-subtitle">
                    Some concepts of webapp that might be the future
                </p>
            </div>
            <div className="experiments-container">
                <div className="experiment-item">
                    <div
                        className="image-container"
                        style={{ backgroundImage: "url('/media/task management system.webp')" }}
                    >
                        <div className="text-overlay">
                            <div className="title">
                                Task Management System Developed for my use
                            </div>
                            <div className="subtitle">Task Management System</div>
                        </div>
                    </div>
                </div>

                <div className="experiment-item">
                    <div
                        className="image-container"
                        style={{ backgroundImage: "url('/media/app store.png')" }}
                    >
                        <div className="text-overlay">
                            <div className="title">
                                A place to store my apps
                            </div>
                            <div className="subtitle">App Store</div>
                        </div>
                    </div>
                </div>

                <div className="experiment-item">
                    <div
                        className="image-container"
                        style={{ backgroundImage: "url('/media/front end gallary.png')" }}
                    >
                        <div className="text-overlay">
                            <div className="title">
                                My Front End Projects
                            </div>
                            <div className="subtitle">Front End Gallary</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiments;