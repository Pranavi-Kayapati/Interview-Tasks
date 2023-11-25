import React, { useState } from "react";
import "./DynamicForm.css";
const DynamicForm = () => {
  const [inputFields, setInputFields] = useState([""]);

  const addField = () => {
    setInputFields([...inputFields, ""]);
  };

  const removeField = (index) => {
    const updatedFields = [...inputFields];
    updatedFields.splice(index, 1);
    setInputFields(updatedFields);
  };

  const handleSubmit = () => {
    console.log(inputFields);
  };

  return (
    <form>
      {inputFields.map((field, index) => (
        <div key={index}>
          <input
            className="input-field"
            type="text"
            value={field}
            onChange={(e) => {
              const updatedFields = [...inputFields];
              updatedFields[index] = e.target.value;
              setInputFields(updatedFields);
            }}
          />
          <button
            className="remove"
            type="button"
            onClick={() => removeField(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="add" type="button" onClick={addField}>
        Add Field
      </button>
      <button className="submit" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
