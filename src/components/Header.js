import React, { Component } from "react";
import Typical from "react-typical";

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

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
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
