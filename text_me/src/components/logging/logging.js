import React from "react";

import "./logging.scss";
import { loggingData, loginData } from "./stateData";
import LoginForm from './form';

const { useState } = React;
const LoggingForm = () => {
  const [formType, setFormType] = useState("LOG_IN");
  const [hoverState, setHoverState] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  //   header data
  const header = loggingData.map((data) => {
    return (
      <div
        key={data.text}
        className={
          formType === data.id ? "loggerDiv extraBoxShaddow" : "loggerDiv"
        }
        onClick = {() => setFormType( prev => data.id)}
      >
        {data.text}
      </div>
    );
  });

  return (
    <div className="logginFullContainer">
      <div className="loggingForm">
        <div className="loggingHeader">{header}</div>
        <LoginForm props = { loginData }/>
      </div>
    </div>
  );
};

export default LoggingForm;
