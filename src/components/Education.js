import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEducation: {
        school: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
      educationList: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => {
      const currentEducation = { ...prevState.currentEducation };
      currentEducation[name] = value;
      return { currentEducation };
    });
  }

  handleAdd() {
    const { currentEducation, educationList } = this.state;

    this.setState(
      {
        educationList: [...educationList, currentEducation],
        currentEducation: {
          school: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        },
      },
      () => {
        // Callback function after state is updated
        this.props.onEducationListChange(this.state.educationList);
      }
    );
  }

  handleDelete(index) {
    const stateToCopy = { ...this.state };
    const newEducationList = [...stateToCopy.educationList];
    newEducationList.splice(index, 1);
    stateToCopy.educationList = newEducationList;
    this.setState(stateToCopy);
  }

  handleEdit(index) {
    const { educationList } = this.state;
    const educationToEdit = educationList[index];
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    this.setState({
      educationList: updatedEducationList,
      currentEducation: educationToEdit,
    });
  }

  render() {
    const { educationList, currentEducation } = this.state;

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
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
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
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={currentEducation.degree}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Field of study:
            <input
              type="text"
              name="fieldOfStudy"
              value={currentEducation.fieldOfStudy}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Start date:
            <input
              type="text"
              name="startDate"
              value={currentEducation.startDate}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            End date:
            <input
              type="text"
              name="endDate"
              value={currentEducation.endDate}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="button" onClick={this.handleAdd}>
            Add education
          </button>
        </form>
      </div>
    );
  }
}

export default Education;
