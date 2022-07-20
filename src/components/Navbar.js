import React, { Component } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

class Navbar extends Component {
  render() {
    document.body.setAttribute("data-theme", "dark");

    if (this.props.portfolioData && this.props.resumeBasicInfo) {
      var education = this.props.resumeBasicInfo.section_name.education;
      var experience = this.props.resumeBasicInfo.section_name.experience;
      var projects = this.props.resumeBasicInfo.section_name.projects;
      var skills = this.props.resumeBasicInfo.section_name.skills;
    }

    return (
      <div id="navbar">
        {
          (window.innerWidth <= 576 ? 
            <div>
              <div>
                <span className="logo-name-brackets"> &lt;</span>
                <span className="logo-name">
                  Alexus Brooklyn
                </span>
                <span className="logo-name-brackets">/&gt;</span>
              </div>
              <button onClick={() => scrollTo("#about")} className="button">
                <span className="navbar-text">{"About"}</span>
              </button>
              <button onClick={() => scrollTo("#education")} className="button" style={{marginLeft: "5px"}}>
                <span className="navbar-text">{education}</span>
              </button>
              <button onClick={() => scrollTo("#experience")} className="button" style={{marginLeft: "5px"}}>
                <span className="navbar-text">{experience}</span>
              </button>
              <button onClick={() => scrollTo("#projects")} className="button" style={{marginLeft: "5px"}}>
                <span className="navbar-text">{projects}</span>
              </button>
              <button onClick={() => scrollTo("#skills")} className="button" style={{marginLeft: "5px"}}>
                <span className="navbar-text">{skills}</span>
              </button>
            </div> :
            <div>
              <span className="logo-name-brackets"> &lt;</span>
              <span className="logo-name">
                Alexus Brooklyn
              </span>
              <span className="logo-name-brackets">/&gt;</span>
              <span style={{ marginLeft: "40%" }} />
              <button onClick={() => scrollTo("#about")} className="button">
                <span className="navbar-text">{"About"}</span>
              </button>
              <button onClick={() => scrollTo("#education")} className="button" style={{marginLeft: "20px"}}>
                <span className="navbar-text">{education}</span>
              </button>
              <button onClick={() => scrollTo("#experience")} className="button" style={{marginLeft: "20px"}}>
                <span className="navbar-text">{experience}</span>
              </button>
              <button onClick={() => scrollTo("#projects")} className="button" style={{marginLeft: "20px"}}>
                <span className="navbar-text">{projects}</span>
              </button>
              <button onClick={() => scrollTo("#skills")} className="button" style={{marginLeft: "20px"}}>
                <span className="navbar-text">{skills}</span>
              </button>
            </div>
        )}
      </div>
    );
  }
}

export default Navbar;
