import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Contacts</span>
            </h1>
          </div>
        </div>

        <div className="row" >
          <div className="nine columns main-col">
            <ul>
              <li>
                <p>
                  <img className="svg-pic" src="images/coding.svg" alt="" />
                  {resumeData.phone}
                </p>
              </li>
              <li>
                <p>
                  <img className="svg-pic" src="images/event.svg" alt="" />
                  
                  {resumeData.email}
                </p>
              </li>
              <li>
                <p>
                  <img className="svg-pic" src="images/event.svg" alt="" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
