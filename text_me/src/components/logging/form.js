import React from "react";
import { MdEmail } from "react-icons/md";

import "./form.scss";

const { useState } = React;
const LoggingForm = ({ props }) => {
  const [inputList, inputState] = props;
  const [formState, setFormState] = useState(inputState);
  // input text boxes
  const inputBoxes = inputList.map((inputData) => {
    return (
      <div className="inputHolder" key={inputData.placeHolder}>
        <div className="IconHolder">
          <inputData.icon className="inputIcon" />
        </div>
        <input
          className="inputBox"
          placeholder={inputData.placeHolder}
          value={formState[inputData.placeHolder]}
          type={inputData.type}
          onChange={(event) =>
            setFormState({
              ...formState,
              [inputData.placeHolder]: event.target.value,
            })
          }
        ></input>
      </div>
    );
  });

  return <div className="formContainer">{inputBoxes}</div>;
};

export default LoggingForm;
