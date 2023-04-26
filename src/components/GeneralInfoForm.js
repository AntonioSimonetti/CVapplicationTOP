import React, { useState } from "react";

function GeneralInfo({ onInfoListChange }) {
  const [currentGeneral, setCurrentGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
  });

  const [updatedGeneral, setUpdatedGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
  });

  const [addedInfo, setAddedInfo] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setUpdatedGeneral((prevGeneral) => ({
      ...prevGeneral,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    setCurrentGeneral(updatedGeneral);
    setUpdatedGeneral({
      name: "",
      email: "",
      phone: "",
      city: "",
      age: "",
    });
    setAddedInfo(true);
    onInfoListChange(updatedGeneral);
  };

  const handleEdit = () => {
    setUpdatedGeneral(currentGeneral);
    setAddedInfo(false);
    onInfoListChange(currentGeneral);
  };

  return (
    <div className="infoDiv">
      <h2>GENERAL INFO</h2>
      <form className="formInfo">
        Name:
        <input
          type="text"
          name="name"
          value={updatedGeneral.name}
          onChange={handleInputChange}
        />
        Email:
        <input
          type="text"
          name="email"
          value={updatedGeneral.email}
          onChange={handleInputChange}
        />
        Phone:
        <input
          type="text"
          name="phone"
          value={updatedGeneral.phone}
          onChange={handleInputChange}
        />
        City:
        <input
          type="text"
          name="city"
          value={updatedGeneral.city}
          onChange={handleInputChange}
        />
        Age:
        <input
          type="number"
          name="age"
          value={updatedGeneral.age}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={addedInfo ? handleEdit : handleAdd}>
        {addedInfo ? "Edit" : "Add Info"}
      </button>

      {currentGeneral && (
        <p>
          Name: {currentGeneral.name}
          <br />
          Email: {currentGeneral.email}
          <br />
          Phone: {currentGeneral.phone}
          <br />
          City: {currentGeneral.city}
          <br />
          Age: {currentGeneral.age}
        </p>
      )}
    </div>
  );
}

export default GeneralInfo;
