import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

import "./Header.css";
export default function Header(props) {
  const biggerThan600 = useMediaPredicate("(min-width: 600px)");

  function handleSearch(e) {
    props.setSearch(e.target.value);
  }

  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">CrashPad</h1>
        </Link>
        <input
          onChange={(e) => handleSearch(e)}
          className="search"
          type="search"
          placeholder="Where are you heading?"
        ></input>
        <Link to="/pads">
          <button className="edit-button">SearchPads</button>
        </Link>
        {biggerThan600 ? (
          props.currentUser ? (
            <div className="logout-container">
              <Link
                className="login-link logo logout"
                onClick={props.handleLogout}
                to="/"
              >
                Logout
              </Link>
              <Link className="login-link logo host" to="/new">
                Host
              </Link>
            </div>
          ) : (
            <Link className="login-link logo logout" to="/login">
              Login
            </Link>
          )
        ) : null}
      </header>
      <br />
    </>
  );
}
