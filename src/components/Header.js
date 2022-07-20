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

      if (this.props.portfolioData) {
        var networks = this.props.portfolioData.social.map(function (network) {
          return (
            <span className="m-4">
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <span id={network.name}>
                  <i className={network.class}></i>
                </span>
              </a>
            </span>
          );
      });
    }

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
                <button className="button"> <span className="navbar-text">{"About"}</span></button>
                <button className="button" style={{marginLeft: "5px"}}> <span className="navbar-text">{education}</span></button>
                <button className="button" style={{marginLeft: "5px"}}> <span className="navbar-text">{experience}</span></button>
                <button className="button" style={{marginLeft: "5px"}}> <span className="navbar-text">{projects}</span></button>
                <button className="button" style={{marginLeft: "5px"}}> <span className="navbar-text">{skills}</span></button>
              </div> :
              <div>
                <span className="logo-name-brackets"> &lt;</span>
                <span className="logo-name">
                  Alexus Brooklyn
                </span>
                <span className="logo-name-brackets">/&gt;</span>
                <span style={{ marginLeft: "40%" }} />
                <button className="button"> <span className="navbar-text">{"About"}</span></button>
                <button className="button" style={{marginLeft: "20px"}}> <span className="navbar-text">{education}</span></button>
                <button className="button" style={{marginLeft: "20px"}}> <span className="navbar-text">{experience}</span></button>
                <button className="button" style={{marginLeft: "20px"}}> <span className="navbar-text">{projects}</span></button>
                <button className="button" style={{marginLeft: "20px"}}> <span className="navbar-text">{skills}</span></button>
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
            <div className="social-links-header">
              {networks}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
