import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row education">
<div className="three columns header-col">
   <h1><span>About Me</span></h1>
</div>
</div>
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/me.jpeg" alt="" />
            </div>

            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
            </div>
         </div>

         <div className="row skill">
          <div className="three columns header-col">
            
          </div>

          <div className="nine columns main-col">
          <h1>
              <span>{resumeData.skillsDescription}</span>
            </h1>

            <div className="bars">
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}