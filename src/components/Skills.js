import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var languages = this.props.sharedSkills.languages.icons.map(function (languages, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={languages.class} style={{ fontSize: "375%"}}>
                  <p style={{ fontSize: "32%", marginTop: "1rem", color: "white"}}>
                    {languages.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var frameworks = this.props.sharedSkills.frameworks.icons.map(function (frameworks, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={frameworks.class} style={{ fontSize: "375%"}}>
                  <p style={{ fontSize: "32%", marginTop: "1rem", color: "white"}}>
                    {frameworks.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var tools = this.props.sharedSkills.tools.icons.map(function (tools, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={tools.class} style={{ fontSize: "375%"}}>
                  <p style={{ fontSize: "32%", marginTop: "1rem", color: "white"}}>
                    {tools.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "#ECDBBA" }}>
              <span>{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <h1 style={{ fontSize: '225%' }}>Languages</h1>
            <ul className="list-inline mx-auto skill-icon">{languages}</ul>
          </div>
          <div className="col-md-12 text-center" style={{ marginTop:"3rem" }}>
            <h1 style={{ fontSize: '225%' }}>Frameworks/ Libraries</h1>
            <ul className="list-inline mx-auto skill-icon">{frameworks}</ul>
          </div>
          <div className="col-md-12 text-center" style={{ marginTop:"3rem" }}>
            <h1 style={{ fontSize: '225%' }}>Software/ Tools</h1>
            <ul className="list-inline mx-auto skill-icon">{tools}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
