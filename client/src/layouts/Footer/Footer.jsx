import { Link } from "react-router-dom";
export default function Footer(props) {
  const { currentUser } = props;
  return (
    <>
      <footer>
        {currentUser ? (
          <>
            <button onClick={props.handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </footer>
      <br />
      {currentUser && (
        <>
          <Link to="Host"></Link>
        </>
      )}
    </>
  );
}
