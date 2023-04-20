import React from "react";

class GeneralInfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGeneral: {
        name: "",
        email: "",
        phone: "",
        city: "",
        age: "",
      },
      infoList: [],
      submitted: false,
      editMode: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => {
      const currentGeneral = { ...prevState.currentGeneral };
      currentGeneral[name] = value;
      return { currentGeneral };
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    const { currentGeneral, infoList } = this.state;
    if (infoList.length > 0) {
      const newList = [...infoList];
      newList[0] = currentGeneral;
      this.setState({
        infoList: newList,
        submitted: true,
        currentGeneral: {
          name: "",
          email: "",
          phone: "",
          city: "",
          age: "",
        },
      });
    } else {
      this.setState({
        infoList: [currentGeneral],
        submitted: true,
        currentGeneral: {
          name: "",
          email: "",
          phone: "",
          city: "",
          age: "",
        },
      });
    }
    this.props.onInfoListChange(currentGeneral);
  };

  handleEdit(index) {
    const { infoList } = this.state;
    const infoToEdit = infoList[index];
    this.setState({
      currentGeneral: infoToEdit,
      editMode: true,
      submitted: false,
    });
  }

  render() {
    const { infoList, currentGeneral } = this.state;

    return (
      <div className="infoDiv">
        <h2>GENERAL INFO</h2>
        {infoList.length > 0 ? (
          <ul className="infoList">
            <p>
              Name: {infoList[0].name}
              <br />
              Email: {infoList[0].email}
              <br />
              Phone: {infoList[0].phone}
              <br />
              City: {infoList[0].city}
              <br />
              Age: {infoList[0].age}
            </p>
            <button onClick={() => this.handleEdit(0)}>Edit</button>
          </ul>
        ) : (
          <p>No info added yet</p>
        )}
        <form className="formInfo">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={currentGeneral.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={currentGeneral.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={currentGeneral.phone}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={currentGeneral.city}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={currentGeneral.age}
              onChange={this.handleInputChange}
            />
          </label>

          <button
            type="button"
            onClick={this.handleAdd}
            disabled={this.state.submitted}
          >
            Add info
          </button>
        </form>
      </div>
    );
  }
}

export default GeneralInfoForm;
