import React, { useState, useEffect } from "react";

function Education({ onEducationListChange }) {
  const [currentEducation, setCurrentEducation] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const [educationList, setEducationList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentEducation({ ...currentEducation, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEducationList([...educationList, currentEducation]);
    setCurrentEducation({
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    });

    onEducationListChange([...educationList, currentEducation]);
  };

  useEffect(() => {
    console.log("Updated educationList array", educationList);
    console.log("Updated currentEducation object", currentEducation);
  }, [educationList, currentEducation]);

  const handleDelete = (index) => {
    const newEducationList = [...educationList];
    newEducationList.splice(index, 1);
    setEducationList(newEducationList);
  };

  const handleEdit = (index) => {
    const newEducationList = [...educationList];
    const educationToEdit = newEducationList[index];
    newEducationList.splice(index, 1);
    setEducationList(newEducationList);
    setCurrentEducation(educationToEdit);
    onEducationListChange(newEducationList);
  };

  return (
    <div className="educationDiv">
      <h2>EDUCATION</h2>
      {educationList.length > 0 ? (
        <ul className="educationList">
          {educationList.map((education, index) => (
            <li key={index}>
              <p>
                School: {education.school}
                <br />
                Degree: {education.degree}
                <br />
                Field of study: {education.fieldOfStudy}
                <br />
                Start date: {education.startDate}
                <br />
                End date: {education.endDate}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No education added yet</p>
      )}
      <form className="formEducation">
        <label>
          School:
          <input
            type="text"
            name="school"
            value={currentEducation.school}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Degree:
          <input
            type="text"
            name="degree"
            value={currentEducation.degree}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Field of study:
          <input
            type="text"
            name="fieldOfStudy"
            value={currentEducation.fieldOfStudy}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start date:
          <input
            type="text"
            name="startDate"
            value={currentEducation.startDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End date:
          <input
            type="text"
            name="endDate"
            value={currentEducation.endDate}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Add education
        </button>
      </form>
    </div>
  );
}

export default Education;
