import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header
        currentUser={props.currentUser}
        setSearch={props.setSearch}
        handleLogout={props.handleLogout}
      />
      <div className="layout-children">{props.children}</div>
      <Footer
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
    </div>
  );
}
