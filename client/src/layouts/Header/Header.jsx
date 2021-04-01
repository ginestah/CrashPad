import { Link } from "react-router-dom";

import "./Header.css";
export default function Header(props) {
  const { currentUser } = props;
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">CrashPad</h1>
          <input
            className="search"
            type="search"
            placeholder="Where are you heading?"
          ></input>
        </Link>
        <Link to="/pads">Pads</Link>
      </header>
      <br />
    </>
  );
}
