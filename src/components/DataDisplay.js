import React from "react";

const Display = (props) => {
  const { currentGeneral, educationList, jobList } = props;
  if (!currentGeneral) {
    return <div>No data available</div>;
  }

  const { name, email, phone, city, age } = currentGeneral;

  return (
    <div className="dataDisplay">
      <h2>Personal Info</h2>
      <div className="displayInfo">
        {name && (
          <React.Fragment>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>City: {city}</p>
            <p>Age: {age}</p>
          </React.Fragment>
        )}
      </div>

      <h2>Education</h2>
      <div className="displayEducation">
        {educationList.map((education, index) => (
          <div key={index}>
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Field of Study: {education.fieldOfStudy}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
          </div>
        ))}
      </div>

      <h2>Pratical Experience</h2>
      <div className="displayPraticalExperience">
        {jobList.map((job, index) => (
          <div key={index}>
            <p>Role: {job.role}</p>
            <p>Company: {job.company}</p>
            <p>Start Date: {job.startDate}</p>
            <p>End Date: {job.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
