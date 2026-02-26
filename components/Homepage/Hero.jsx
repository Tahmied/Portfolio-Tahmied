'use client'
import { Highlighter } from "@/components/ui/highlighter";
import { gsap } from 'gsap';
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Initial animation states as CSS — set in JSX so they're invisible
// from the very first server render / hydration, before any JS runs.
// This is the only reliable way to prevent GSAP flicker in Next.js.
const INITIAL = {
    title: { opacity: 0, transform: 'translateY(60px)', filter: 'blur(10px)' },
    description: { opacity: 0, transform: 'translateX(-50px)' },
    buttons: { opacity: 0, transform: 'translateY(40px)' },
    linkBtn: { opacity: 0, transform: 'translateY(30px)' },
};

const Hero = ({ openContact }) => {
    const [loading, isLoading] = useState(true)
    const [isMobile, setIsMobile] = useState(false);
    const [showLazyNote, setShowLazyNote] = useState(false);

    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsContainerRef = useRef(null);
    const contactsRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setTimeout(() => isLoading(false), 500);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setShowLazyNote(true), 1800);
        return () => clearTimeout(timer);
    }, []);

    // All GSAP work in one useLayoutEffect with gsap.context() for cleanup.
    // Elements already start invisible via inline style in JSX — no gsap.set() needed.
    // gsap only animates TO the final state, nothing ever flashes visible.
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            tl.to(titleRef.current, {
                opacity: 1, y: 0, filter: "blur(0px)",
                duration: 1, ease: "power3.out",
            }, 0.2);

            tl.to(descriptionRef.current, {
                opacity: 1, x: 0, duration: 0.8,
            }, 0.6);

            tl.to(buttonsContainerRef.current, {
                opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.2)",
            }, 1);

            const contactButtons = contactsRef.current?.querySelectorAll('.links-button');
            if (contactButtons?.length) {
                contactButtons.forEach((btn, i) => {
                    tl.to(btn, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 1.2 + i * 0.1);
                });
            }

            // Pulsing dot
            const dot = buttonsContainerRef.current?.querySelector('.available-dot');
            if (dot) {
                gsap.to(dot, { scale: 1.2, opacity: 0.8, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
            }

            // Hover — resume button
            const resumeBtn = heroRef.current?.querySelector('.projects-button-container');
            if (resumeBtn) {
                resumeBtn.addEventListener('mouseenter', () => gsap.to(resumeBtn, { y: -5, duration: 0.3, ease: "power2.out" }));
                resumeBtn.addEventListener('mouseleave', () => gsap.to(resumeBtn, { y: 0,  duration: 0.3, ease: "power2.out" }));
            }

            // Hover — social links
            contactButtons?.forEach(btn => {
                const svg = btn.querySelector('svg');
                btn.addEventListener('mouseenter', () => {
                    gsap.to(btn, { scale: 1.15, y: -5, duration: 0.3, ease: "power2.out" });
                    if (svg) gsap.to(svg, { rotation: 5, duration: 0.3, ease: "power2.out" });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
                    if (svg) gsap.to(svg, { rotation: 0, duration: 0.3, ease: "power2.out" });
                });
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className="hero !h-screen" ref={heroRef}>
                <div className="hero-container">

                    {/* opacity:0 in style — invisible from first render, GSAP animates it in */}
                    <div className="hero-title" ref={titleRef} style={INITIAL.title}>
                        <p className="hero-main-text">Full Stack Developer With A Passion For The backend</p>
                    </div>

                    <div className="hero-description w-[90%]" ref={descriptionRef} style={INITIAL.description}>
                        {isMobile ? (
                            <p>
                                I build complete web apps, from responsive UIs to scalable backend systems. Specializing in {
                                    loading ? ('Node.js') : (
                                        <Highlighter action="highlight" color="#fdff32"><span className="text-black"> Node.js</span></Highlighter>
                                    )
                                }, {
                                    loading ? (<span>Express and MongoDB </span>) : (
                                        <Highlighter action="highlight" color="#fdff32">
                                            <span className="text-black">Express and MongoDB </span>
                                        </Highlighter>
                                    )
                                } with solid frontend skills With {
                                    loading ? ('React and NextJs.') : (
                                        <Highlighter action="underline" color="#FF9800">
                                            <span className="text-white">React and NextJs.</span>
                                        </Highlighter>
                                    )
                                }
                            </p>
                        ) : (
                            <p>
                                I build complete web apps, from responsive UIs to scalable backend systems. Specializing in {
                                    loading ? (<span>Node.js, Express and MongoDB</span>) : (
                                        <Highlighter action="highlight" color="#fdff32">
                                            <span className="text-black">Node.js, Express and MongoDB</span>
                                        </Highlighter>
                                    )
                                } with solid frontend skills With {
                                    loading ? ('React and NextJs.') : (
                                        <Highlighter action="underline" color="#FF9800">
                                            <span className="text-white">React and NextJs.</span>
                                        </Highlighter>
                                    )
                                }
                            </p>
                        )}
                    </div>

                    <div className="hero-actions">
                        <div className="hero-buttons" ref={buttonsContainerRef} style={INITIAL.buttons}>
                            <button className="available-for-btn" onClick={openContact}>
                                <div className="available-circle">
                                    <div className="available-dot"></div>
                                    <div className="available-outline"></div>
                                </div>
                                Available for new project
                            </button>

                            <div className="projects-button-container">
                                <Link href={'https://drive.google.com/file/d/16SUhkYeJvJUf6XKjyEW1jlPyQyDY8c_n/view?usp=sharing'}>
                                    <div className="projects-button">
                                        <span>Resume</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="hero-contacts" ref={contactsRef}>
                            <div className="links-button-container">
                                <Link href={'https://www.linkedin.com/in/tahmied/'}>
                                    <button className="links-button flex-center" style={INITIAL.linkBtn}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="22px" className="btn-svg" viewBox="0 0 24 24">
                                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fill="#fff" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </g>
                                        </svg>
                                    </button>
                                </Link>
                                <Link href={'https://www.github.com/tahmied'}>
                                    <button className="links-button flex-center" style={INITIAL.linkBtn}>
                                        <svg stroke="#fff" fill="#fff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" className="btn-svg" width="22px" viewBox="0 0 20 20">
                                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title>github [#142]</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs></defs>
                                                <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none" id="Page-1">
                                                    <g fill="#fff" transform="translate(-140.000000, -7559.000000)" id="Dribbble-Light-Preview">
                                                        <g transform="translate(56.000000, 160.000000)" id="icons">
                                                            <path id="github-[#142]" d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </Link>
                                <Link href={'mailto:tahmiedhossain4671@gmail.com'}>
                                    <button className="links-button flex-center" style={INITIAL.linkBtn}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" className="btn-svg" viewBox="0 0 24 24" fill="none">
                                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2" />
                                            </g>
                                        </svg>
                                    </button>
                                </Link>
                                <Link href={'https://www.facebook.com/tahmied.dev'}>
                                    <button className="links-button flex-center" style={INITIAL.linkBtn}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" className="btn-svg" viewBox="0 0 24 24" fill="#fff">
                                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="#fff" />
                                            </g>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lazy Dev Note */}
            {showLazyNote && (
                <div style={{
                    position: 'fixed', bottom: '28px', right: '24px', zIndex: 9999,
                    background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '14px', padding: '14px 18px 14px 16px', maxWidth: '300px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.45)', display: 'flex',
                    alignItems: 'flex-start', gap: '10px',
                    animation: 'lazyNoteIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
                }}>
                    <span style={{ fontSize: '20px', lineHeight: 1, marginTop: '2px' }}>😴</span>
                    <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', color: 'rgba(255,255,255,0.75)', fontFamily: 'inherit' }}>
                            <span style={{ color: '#fff', fontWeight: 600 }}>Last updated: 2021.</span>
                            {' '}I'm too lazy to update this. Maybe someday. 😐
                        </p>
                    </div>
                    <button onClick={() => setShowLazyNote(false)} style={{
                        background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)',
                        cursor: 'pointer', fontSize: '16px', lineHeight: 1,
                        padding: '0 0 0 4px', marginTop: '1px', flexShrink: 0,
                    }} aria-label="Dismiss">✕</button>
                </div>
            )}
            <style>{`
                @keyframes lazyNoteIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </>
    );
};

export default Hero;