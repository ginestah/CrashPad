import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { destroyPad, getAllPads, postPad, putPad } from "../services/pads";

import Pads from "../screens/Pads";
import AddPad from "../screens/AddPad";
import EditPad from "../screens/EditPad";

function MainContainer(props) {
  const [pads, setPads] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  //get all of the pad data, which includes the user and photos and reviews
  useEffect(() => {
    const fetchPads = async () => {
      const data = await getAllPads();
      setPads(data);
    };
    fetchPads();
  }, [pads]);

  //api call to post a new pad
  const handleCreate = async (padData) => {
    const newPad = await postPad(padData);
    setPads((prevState) => [...prevState, newPad]);
    history.push("/");
  };

  // update an existing pad replace it in state if updated.
  const handleUpdate = async (id, padData) => {
    const updatedPad = await putPad(id, padData);
    setPads((prevState) =>
      prevState.map((pad) => {
        return pad.id == id ? updatedPad : pad;
      })
    );
  };

  //delete a pad
  const handleDelete = async (id) => {
    await destroyPad(id);
    setPads((prevState) => prevState.filter((pad) => pad.id !== id));
  };

  return (
    <Switch>
      <Route path="/pads/:id/edit">
        <EditPad pads={pads} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/pads">
        <Pads
          pads={pads}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/new">
        <AddPad handleCreate={handleCreate} currentUser={currentUser} />
      </Route>
    </Switch>
  );
}
export default MainContainer;
