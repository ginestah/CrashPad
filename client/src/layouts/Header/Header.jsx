import { Link } from "react-router-dom";
import { logOut } from "../../services/auth";
export default function Header(props) {
  const { currentUser } = props;
  return (
    <>
      <header>
        <Link to="/">
          <h1>CrashPad</h1>
        </Link>
      </header>
      <br />
    </>
  );
}
