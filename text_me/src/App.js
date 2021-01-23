import React from "react";
import { useSelector } from "react-redux";

import Logging from "./components/logging/logging";

const { useEffect } = React;
const App = () => {
  const authState = useSelector((state) => state.switchUserAuth);
  return <div>{!authState ? <Logging /> : null}</div>;
};

export default App;
