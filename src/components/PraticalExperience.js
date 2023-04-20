import React from "react";

class PraticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExperience: {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
      },
      jobList: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => {
      const currentExperience = { ...prevState.currentExperience };
      currentExperience[name] = value;
      return { currentExperience };
    });
  }

  handleAdd() {
    const { currentExperience, jobList } = this.state;

    this.setState(
      {
        jobList: [...jobList, currentExperience],
        currentEducation: {
          role: "",
          company: "",
          startDate: "",
          endDate: "",
        },
      },
      () => {
        // Callback function after state is updated
        this.props.onExperienceListChange(this.state.jobList);
      }
    );
  }

  handleDelete(index) {
    const stateToCopy = { ...this.state };
    const newJobList = [...stateToCopy.jobList];
    newJobList.splice(index, 1);
    stateToCopy.jobList = newJobList;
    this.setState(stateToCopy);
  }

  handleEdit(index) {
    const { jobList } = this.state;
    const jobToEdit = jobList[index];
    const updatedJobList = [...jobList];
    updatedJobList.splice(index, 1);
    this.setState({
      jobList: updatedJobList,
      currentExperience: jobToEdit,
    });
  }

  render() {
    const { jobList, currentExperience } = this.state;

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
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
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
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={currentExperience.company}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Start date:
            <input
              type="text"
              name="startDate"
              value={currentExperience.startDate}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            End date:
            <input
              type="text"
              name="endDate"
              value={currentExperience.endDate}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="button" onClick={this.handleAdd}>
            Add job
          </button>
        </form>
      </div>
    );
  }
}

export default PraticalExperience;
