import React, { useState, useEffect } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Education from "./components/Education";
import PraticalExperience from "./components/PraticalExperience";
import "./App.css";
import Display from "./components/DataDisplay";

const App = () => {
  const [currentGeneral, setCurrentGeneral] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [jobList, setJobList] = useState([]);

  const handleInfoListChange = (currentGeneral) => {
    setCurrentGeneral(currentGeneral);
  };

  const handleEducationChange = (educationList) => {
    setEducationList(educationList);
  };

  const handleExperienceChange = (jobList) => {
    setJobList(jobList);
  };

  useEffect(() => {
    console.log("currentGeneral:", currentGeneral);
    console.log("educationList:", educationList);
    console.log("jobList:", jobList);
  }, [currentGeneral, educationList, jobList]);

  return (
    <div className="mainDiv">
      <GeneralInfoForm onInfoListChange={handleInfoListChange} />
      <Education onEducationListChange={handleEducationChange} />
      <PraticalExperience onExperienceListChange={handleExperienceChange} />
      <Display
        currentGeneral={currentGeneral}
        educationList={educationList}
        jobList={jobList}
      />
    </div>
  );
};

export default App;
