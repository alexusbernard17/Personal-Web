import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];
  
  render() {
    document.body.setAttribute("data-theme", "dark");

    if (this.props.portfolioData && this.props.resumeBasicInfo) {
      var education = this.props.resumeBasicInfo.section_name.education;
      var experience = this.props.resumeBasicInfo.section_name.experience;
      var projects = this.props.resumeBasicInfo.section_name.projects;
      var skills = this.props.resumeBasicInfo.section_name.skills;

    }

    if (this.props.portfolioData) {
      var name = this.props.portfolioData.name;
      this.titles = this.props.portfolioData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={Infinity} />
    }, (props, prevProp) => true);

    var windowWidth = window.innerWidth;
    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <div>
          {
            (windowWidth <= 576 ? 
              <div>
                <div>
                  <span className="logo-name-brackets"> &lt;</span>
                  <span className="logo-name">
                    Alexus Brooklyn
                  </span>
                  <span className="logo-name-brackets">/&gt;</span>
                </div>
                <span className="navbar-text"> {"About"} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {education} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {experience} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {projects} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {skills} </span>
              </div> :
              <div>
                <span className="logo-name-brackets"> &lt;</span>
                <span className="logo-name">
                  Alexus Brooklyn
                </span>
                <span className="logo-name-brackets">/&gt;</span>
                <span style={{ marginLeft: "40%" }} />
                <span className="navbar-text"> {"About"} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {education} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {experience} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {projects} </span>
                <span className="navbar-text" style={{marginLeft: "15px"}}> {skills} </span>
              </div>
          )}
        </div>

        <div className="row aligner" style={{height: '90%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1>
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
