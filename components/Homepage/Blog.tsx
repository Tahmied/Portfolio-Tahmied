
const Blog = () => {
    return (
        <section className="blog">
            <div className="section-header">
                <h1 className="section-title">My Mind</h1>
                <p className="section-subtitle">
                    This is the blog section where I share my ideas
                </p>
            </div>
            <div className="blogs-container">
                <div className="blog-item">
                    <div className="blog-thumbnail">
                        <img src="/media/thumbnail-one.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <p className="blog-title">New features of android 16 | Everything you need to know...</p>
                        <p className="blog-description">
                            Android brings its new update of android 16 where there is nothing much to talk about but this small tiny changes actually matters...
                        </p>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-thumbnail">
                        <img src="/media/thumbnail2.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <p className="blog-title">Trying Game Dev for the first time, How hard it can be?!</p>
                        <p className="blog-description">
                            I was always interested about game development but never Started. But today I thought lets give it a try...
                        </p>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-thumbnail">
                        <img src="/media/thumbnail3.jpg" alt="" />
                    </div>
                    <div className="blog-details">
                        <p className="blog-title">How I would learn to code if, I start to learn again..!</p>
                        <p className="blog-description">
                            I started when I was only in 6th standard of my school, with a shitty laptop...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;