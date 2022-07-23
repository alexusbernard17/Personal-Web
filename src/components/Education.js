import React, { Component } from "react";

class Education extends Component {
  render() {
    if (this.props.resumeBasicInfo && this.props.education) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var education = this.props.education.schools.map(function (education, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center education-tile">
                  <img src={education.imagePath} alt="logo" width="150" height="150" />
                <h1 className="school-name">
                  {education.name}
                </h1>
                <h4>
                  {education.location}
                </h4>
                <h4 className="education-degree-text">
                  {education.degree}
                </h4>
                <h4 className="education-degree-text" style={{ marginTop: "0" }}>
                  {education.description}
                </h4>
                <h4 className="education-years">
                  {education.years}
                </h4>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="education">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "#ECDBBA" }}>
              <span>{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{education}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
