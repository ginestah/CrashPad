import { Link } from "react-router-dom";

import "./Footer.css";
export default function Footer(props) {
  const { currentUser } = props;
  return (
    <>
      <footer>
        {currentUser ? (
          <>
            <Link className="login-link" onClick={props.handleLogout} to="/">
              Logout
            </Link>
          </>
        ) : (
          <Link className="login-link" to="/login">
            Login
          </Link>
        )}
        <a
          className="login-link"
          href="https://www.linkedin.com/in/huckleberry-ginesta/"
        >
          &copy; Huckleberry Ginesta 2021
        </a>
        <br />
        {currentUser && (
          <>
            <Link className="login-link" to="/new">
              Host
            </Link>
          </>
        )}
      </footer>
    </>
  );
}
