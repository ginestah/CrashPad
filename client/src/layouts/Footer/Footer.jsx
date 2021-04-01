import { Link } from "react-router-dom";
export default function Footer(props) {
  const { currentUser } = props;
  return (
    <>
      <footer>
        {currentUser ? (
          <>
            <Link onClick={props.handleLogout} to="/">
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </footer>
      <br />
      {currentUser && (
        <>
          <Link to="/new">Host</Link>
        </>
      )}
    </>
  );
}
