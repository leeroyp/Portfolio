import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text"

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Projects
                </a>
              </li>
              {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
              {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              <li>
                <a className="smoothscroll" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <div className="row home">
              <div className="two columns"></div>
                <div className="four columns">
                  <img className="profile-pic" src="images/me.jpeg" alt="" />
                </div>
                <div className="four columns">
                  <h4 className="responsive-headline">Hi,</h4>
                  <h4 className="responsive-headline">
                    My name is {resumeData.name}.
                  </h4>
                  <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                     <span><ReactRotatingText items={["I am a <web/> developer  based in Toronto Ontario. I enjoy making responsive pages that are very user friendly."]} pause={10000} typingInterval={100}/></span>
                  </h3>
                </div>
                <div className="two columns"></div>

              </div>
              <hr />
              <a href="images/Leeroy-Phili-Resume.pdf" target="_blank">
                <button type="button" className="btn btn-secondary">
                  RESUME
                </button>
              </a>

              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
