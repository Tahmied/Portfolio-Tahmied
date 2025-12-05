'use client'

import { Highlighter } from "@/components/ui/highlighter"
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export default function Home() {
  const [loading, isLoading] = useState(true)
  useEffect(() => {
    // Blur effect
    setTimeout(() => {
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        mainContent.classList.remove('blurred')
      }
    }, 500)
    setTimeout(() => {
      isLoading(false)
    }, 1500)

  }, [])

  return (
    <div className="blurred" id="main-content">
      <Header />

      <section className="hero">
        <div className="hero-container">
          <div className="hero-title">
            <p className="hero-main-text">Full Stack Developer With A Passion For The backend</p>
          </div>

          <div className="hero-description">
            <p>
              I build complete web apps, from responsive UIs to scalable backend systems. Specializing in  {!loading && (
                <Highlighter action="highlight" color="#fdff32">
                  <span className="text-black">Node.js, Express and MongoDB</span>
                </Highlighter>
              )}{" "} with solid frontend skills With {!loading && (
                <Highlighter action="underline" color="#FF9800">
                  <span className="text-white">React and NextJs.</span>
                </Highlighter>
              )}
            </p>
          </div>

          <div className="hero-actions">
            <div className="hero-buttons">
              <button className="available-for-btn">
                <div className="available-circle">
                  <div className="available-dot"></div>
                  <div className="available-outline"></div>
                </div>
                Available for new project
              </button>

              <div className="projects-button-container">
                <div className="projects-button">
                  <span>Resume</span>
                </div>
              </div>
            </div>

            <div className="hero-contacts">
              <div className="links-button-container">
                <button className="links-button flex-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="22px"
                    className="btn-svg"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#fff"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                      <path
                        fill="#fff"
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button className="links-button flex-center">
                  <svg
                    viewBox="0 -2 20 20"
                    width="22px"
                    className="btn-svg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>twitter [#154]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-60.000000, -7521.000000)"
                          fill="#fff"
                        >
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                              d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                              id="twitter-[#154]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <button className="links-button flex-center">
                  <svg
                    stroke="#fff"
                    fill="#fff"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="btn-svg"
                    width="22px"
                    viewBox="0 0 20 20"
                  >
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>github [#fff142]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        fillRule="evenodd"
                        fill="none"
                        strokeWidth="1"
                        stroke="none"
                        id="Page-1"
                      >
                        <g
                          fill="#fff"
                          transform="translate(-140.000000, -7559.000000)"
                          id="Dribbble-Light-Preview"
                        >
                          <g transform="translate(56.000000, 160.000000)" id="icons">
                            <path
                              id="github-[#fff142]"
                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <button className="links-button flex-center">
                  <svg
                    viewBox="0 -3 20 20"
                    width="22px"
                    className="btn-svg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    stroke="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>youtube [#fff168]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-300.000000, -7442.000000)"
                          fill="#fff"
                        >
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                              d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                              id="youtube-[#fff168]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="timeline-dot">1</div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title"><i className="fas fa-code"></i> Customer Support Executive</h3>
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
              <div className="timeline-dot">2</div>
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
              <div className="timeline-dot">3</div>
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
            <button className="cta-section-btn">  <span>Book A Free Call</span>  </button>
            <button className="cta-section-btn">  <span>Contact Me</span>  </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

