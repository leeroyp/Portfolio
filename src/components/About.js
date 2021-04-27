import React, { Component } from "react";

import bootstrap from "../images/bootstrap.svg";
import css from "../images/css.svg";
import firebase from "../images/firebase.svg";
import git from "../images/git.svg";
import heroku from "../images/heroku.svg";
import html from "../images/html.svg";
import javascript from "../images/javascript.svg";
import jquery from "../images/jquery.svg";
import mongo from "../images/mongodb.svg";
import node from "../images/nodejs.svg";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import problemSolver from "../images/problemSolver.jpeg";
import TeamPlayer from "../images/TeamPlayer.png";
import timeManagement from "../images/timeManagement.jpeg";
import accountable from "../images/accountability.jpeg";
import ProblemSolving from "../images/ProblemSolving.jpeg";
import SelfLearning from "../images/SelfLearning.jpeg";
import Time from "../images/Time.jpeg";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>About</span>
            </h1>
          </div>
        </div>

        <div className="row education">
          <div className="container">
            <div className="soft_skills">
              <div>
                <img src={accountable} alt="Bootstrap css logo" />
                <h6>accountability</h6>
              </div>
              <div>
                <img src={ProblemSolving} alt="Bootstrap css logo" />
                <h6>Problem Solving</h6>
              </div>
              <div>
                <img src={SelfLearning} alt="Bootstrap css logo" />
                <h6>Self Learner</h6>
              </div>
              <div>
                <img src={Time} alt="Bootstrap css logo" />
                <h6>Time Management</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row education">
          {/* <div className="three columns">
            <img className="profile-pic" src="images/me.jpeg" alt="" />
          </div> */}

          <div className="container">
          <h4>
              <span>Bio</span>
            </h4>
            {/* <h2>About Me</h2> */}
            <p>{resumeData.aboutme}</p>
          </div>
        </div>

        <div className="row education">

          <div className="container">
            <h4>
              <span>{resumeData.skillsDescription}</span>
            </h4>

            {/* <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li key={item.name}>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div> */}

            <div className="about_skills">
              <img src={bootstrap} alt="Bootstrap css logo" />
              <img src={css} alt="css logo" />
              <img src={firebase} alt="Google firebase logo" />
              <img src={git} alt="git logo" />
              <img src={heroku} alt="heroku logo" />
              <img src={html} alt="html logo" />
              <img src={javascript} alt="javascript logo" />
              <img src={jquery} alt="JQuery javascript library logo" />
              <img src={mongo} alt="mongo logo" />
              <img src={node} alt="node logo" />
              <img src={react} alt="react logo" />
              <img src={redux} alt="react logo" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
