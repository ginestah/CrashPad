import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    password_confirm: "",
  });
  const {
    password_confirm,
    username,
    email,
    password,
    first_name,
    last_name,
  } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const CHECKS = () => {
    if (password_confirm !== password || password.length < 8) {
      if (password_confirm !== password) {
        return <p>Passwords must match</p>;
      } else if (password.split("").length <= 8) {
        return <p>Password must be 8 or more characters.</p>;
      }
    }
    return <button className="submit-pad">Submit</button>;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={handleChange}
        />
      </label>
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
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} />
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
      <label>
        Confirm Password:
        <input
          type="password"
          name="password_confirm"
          value={password_confirm}
          onChange={handleChange}
        />
      </label>
      <br />
      {CHECKS()}
    </form>
  );
}
