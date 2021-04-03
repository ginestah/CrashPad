import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

import "./Footer.css";
export default function Footer(props) {
  const { currentUser } = props;
  const smallerThan600 = useMediaPredicate("(max-width: 600px )");
  return (
    <>
      <footer>
        {smallerThan600 ? (
          currentUser ? (
            <>
              <Link className="login-link" onClick={props.handleLogout} to="/">
                Logout
              </Link>
            </>
          ) : (
            <Link className="login-link" to="/login">
              Login
            </Link>
          )
        ) : null}
        <a
          className="login-link"
          href="https://www.linkedin.com/in/huckleberry-ginesta/"
        >
          &copy; Huckleberry Ginesta 2021
        </a>
        <br />
        {smallerThan600
          ? currentUser && (
              <>
                <Link className="login-link" to="/new">
                  Host
                </Link>
              </>
            )
          : null}
      </footer>
    </>
  );
}
