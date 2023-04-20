import React from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Education from "./components/Education";
import PraticalExperience from "./components/PraticalExperience";
import "./App.css";
import Display from "./components/DataDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGeneral: [],
      educationList: [],
      jobList: [],
    };

    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleInfoListChange = (currentGeneral) => {
    this.setState({ currentGeneral }, () => {
      console.log("App state after currentgeneral change:", this.state);
    });
  };

  handleEducationChange = (educationList) => {
    console.log("handleEducationChange called with:", educationList);
    this.setState({ educationList }, () => {
      console.log("App state after el change:", this.state);
    });
  };

  handleExperienceChange = (jobList) => {
    console.log("handleEducationChange called with:", jobList);
    this.setState({ jobList }, () => {
      console.log("App state after job change:", this.state);
    });
  };

  render() {
    return (
      <div className="mainDiv">
        <GeneralInfoForm onInfoListChange={this.handleInfoListChange} />
        <Education onEducationListChange={this.handleEducationChange} />
        <PraticalExperience
          onExperienceListChange={this.handleExperienceChange}
        />
        <Display
          currentGeneral={this.state.currentGeneral}
          educationList={this.state.educationList}
          jobList={this.state.jobList}
        />
      </div>
    );
  }
}

export default App;
