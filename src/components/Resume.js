import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Projects</span>
            </h1>
          </div>
        </div>

        {resumeData.projects &&
          resumeData.projects.map((item) => {
            return (
              <div className="row" key={item.name}>
                <div className=" container">
                  <img className="container-pic" src={item.imgurl} alt="" />

                  <div className="container_text">
                    <h2>{item.name}</h2>
                    <p>{item.projectDiscription}</p>
                  </div>

                  <ul>
                    <li>
                      <p>
                        <img
                          className="svg-pic"
                          src="images/coding.svg"
                          alt="project image"
                        />{" "}
                        {item.framework}{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="svg-pic"
                          src="images/event.svg"
                          alt=""
                        />
                        {item.year}
                        <a href={item.weburl} target="_blank">
                          <button className="sourceBtn">webpage</button>
                        </a>
                        <a href={item.giturl} target="_blank">
                          <button className="sourceBtn"> Github</button>
                        </a>
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </section>
    );
  }
}
