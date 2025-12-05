
interface CtaProps {
    openContact: () => void;
}

const Cta = ({ openContact }: CtaProps) => {
    return (
        <section className="cta">
            <div className="cta-wrapper">
                <div className="cta-icon">
                    <img src="/media/cta-icon.svg" alt="" />
                </div>

                <div className="cta-text">
                    <p className="cta-main-text">
                        Let&apos;s Build Something Together
                    </p>
                    <p className="cta-normal-text">
                        Ready to bring your ideas to life? Get in touch and let&apos;s discuss your next project.
                    </p>
                </div>

                <div className="cta-buttons">
                    {/* <button className="cta-section-btn">  <span>Book A Free Call</span>  </button> */}
                    <button className="cta-section-btn" onClick={openContact}>  <span>Contact Me</span>  </button>
                </div>
            </div>
        </section>
    );
};

export default Cta;