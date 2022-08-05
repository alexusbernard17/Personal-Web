import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    if (this.props.experience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.experience.map(function (work, i) {
        return (
          <VerticalTimelineElement>
            <img className="company-logo" src={work.imagePath} alt="logo" width="125" height="125" />
            <h3 style={{ fontWeight: "bold" }}> {work.company} </h3>
            <h4 style={{ fontStyle: "italic" }}> {work.title + " | " +  work.years} </h4>
            <h4 style={{ marginTop: "15px" }}> {work.description} </h4>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="experience" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title">
              <span>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
        <div style={{ paddingBottom: "5%" }} />
      </section>
    );
  }
}

export default Experience;
