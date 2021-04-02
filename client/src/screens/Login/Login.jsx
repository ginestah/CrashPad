import { useState } from "react";
import { Link } from "react-router-dom";
import "../AddPad/AddPad.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container sign-in-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3>Login</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit" className="submit-pad">
          Submit
        </button>
      </form>
      <p>No account?</p>
      <Link to="/register">
        <button className="submit-pad">Register</button>
      </Link>
    </div>
  );
}
