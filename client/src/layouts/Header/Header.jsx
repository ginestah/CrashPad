import { Link } from "react-router-dom";

import "./Header.css";
export default function Header(props) {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">CrashPad</h1>
        </Link>
        <input
          className="search"
          type="search"
          placeholder="Where are you heading?"
        ></input>
        <Link to="/pads">Pads</Link>
      </header>
      <br />
    </>
  );
}
