'use client'

import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../globals.css'

export default function Blog() {
  useEffect(() => {
    // Blur effect
    setTimeout(() => {
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        mainContent.classList.remove('blurred')
      }
    }, 500)
  }, [])

  return (
    <div className="blurred" id="main-content">
      <Header />

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

              <button className="blog-button">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-thumbnail">
              <img src="/media/thumbnail-one.jpg" alt="" />
            </div>
            <div className="blog-details">
              <p className="blog-title">New features of android 16 | Everything you need to know...</p>
              <p className="blog-description">
                Android brings its new update of android 16 where there is nothing much to talk about but this small tiny changes actually matters.
              </p>
              <button className="blog-button">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-thumbnail">
              <img src="/media/thumbnail-one.jpg" alt="" />
            </div>
            <div className="blog-details">
              <p className="blog-title">New features of android 16 | Everything you need to know...</p>
              <p className="blog-description">
                Android brings its new update of android 16 where there is nothing much to talk about but this small tiny changes actually matters.
              </p>
              <button className="blog-button">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

