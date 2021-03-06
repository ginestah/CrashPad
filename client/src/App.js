import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout/Layout";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import MainContainer from "./containers/MainContainer";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState("");
  const history = useHistory();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData);
      setCurrentUser(userData);
      setError(null);
      history.push("/");
    } catch (e) {
      setError(e);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const userData = await registerUser(formData);
      setCurrentUser(userData);
      setError(null);
      history.push("/");
    } catch (e) {
      setError(e.response.data);
    }
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };
  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        setSearch={setSearch}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path="/login">
            <Login error={error} handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register error={error} handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer search={search} currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
