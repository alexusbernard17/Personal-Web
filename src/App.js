import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      portfolioData: {},
    };
  }

  componentDidMount() {
    this.loadPortfolioData();
    this.loadResumeData();
  }

  loadResumeData() {
    $.ajax({
      url: `resume-data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadPortfolioData() {
    $.ajax({
      url: `portfolio-data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ portfolioData: data });
        document.title = `${this.state.portfolioData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  /**
   * order:
   * header
   * about
   * education
   * experience
   * projects
   * skills
   * footer
   */

  render() {
    return (
      <div>
        <Header 
          resumeBasicInfo={this.state.resumeData.basic_info}
          portfolioData={this.state.portfolioData.basic_info}
        />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.portfolioData.basic_info}
        />
        <Education 
          education={this.state.resumeData.education}
          resumeBasicInfo={this.state.resumeData.basic_info}/>
        <Experience
          experience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.portfolioData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.portfolioData.basic_info} />
      </div>
    );
  }
}

export default App;
