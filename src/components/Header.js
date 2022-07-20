import React, { Component } from "react";
import Typical from "react-typical";
import Navbar from "./Navbar";

class Header extends Component {
  titles = [];
  
  render() {
    document.body.setAttribute("data-theme", "dark");

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

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <Navbar portfolioData={this.props.portfolioData} resumeBasicInfo={this.props.resumeBasicInfo}/>

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
