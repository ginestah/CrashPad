import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { destroyPad, getAllPads, postPad, putPad } from "../services/pads";

function MainContainer() {
  const [pads, setPads] = useState([]);
  const history = useHistory();

  return <div></div>;
}
export default MainContainer;
