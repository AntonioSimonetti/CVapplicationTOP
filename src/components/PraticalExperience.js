import React, { useState } from "react";

function PraticalExperience({ onExperienceListChange }) {
  const [currentExperience, setCurrentExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
  });

  const [jobList, setJobList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentExperience({ ...currentExperience, [name]: value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    setJobList([...jobList, currentExperience]);
    setCurrentExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
    });

    onExperienceListChange([...jobList, currentExperience]);
  };

  const handleDelete = (index) => {
    const newJobList = [...jobList];
    newJobList.splice(index, 1);
    setJobList(newJobList);
  };

  const handleEdit = (index) => {
    const newJobList = [...jobList];
    const jobToEdit = newJobList[index];
    newJobList.splice(index, 1);
    setJobList(newJobList);
    setCurrentExperience(jobToEdit);
    onExperienceListChange(newJobList);
  };

  return (
    <div className="praticalDiv">
      <h2>PRATICAL EXPERIENCE</h2>
      {jobList.length > 0 ? (
        <ul className="praticalList">
          {jobList.map((currentExperience, index) => (
            <li key={index}>
              <p>
                Role: {currentExperience.role}
                <br />
                Company: {currentExperience.company}
                <br />
                Start date: {currentExperience.startDate}
                <br />
                End date: {currentExperience.endDate}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs added yet</p>
      )}
      <form className="formExperience">
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={currentExperience.role}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={currentExperience.company}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start date:
          <input
            type="text"
            name="startDate"
            value={currentExperience.startDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End date:
          <input
            type="text"
            name="endDate"
            value={currentExperience.endDate}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAdd}>
          Add job
        </button>
      </form>
    </div>
  );
}

export default PraticalExperience;
