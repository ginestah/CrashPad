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
      </footer>
      <br />
      {currentUser && (
        <>
          <Link className="host-link" to="/new">
            Host
          </Link>
        </>
      )}
    </>
  );
}
